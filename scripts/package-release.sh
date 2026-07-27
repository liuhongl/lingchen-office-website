#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
release_id="${1:-$(git -C "$project_root" rev-parse --short=7 HEAD)}"
output_dir="${2:-$project_root/output/releases}"
static_dir="$project_root/out"

if [[ ! "$release_id" =~ ^[A-Za-z0-9._-]+$ ]]; then
  echo "发布标识只能包含字母、数字、点、下划线和连字符：$release_id" >&2
  exit 1
fi

for required_file in index.html robots.txt sitemap.xml favicon.ico; do
  if [[ ! -f "$static_dir/$required_file" ]]; then
    echo "缺少 out/$required_file；请先执行 pnpm build。" >&2
    exit 1
  fi
done

if ! git -C "$project_root" diff --quiet ||
  ! git -C "$project_root" diff --cached --quiet; then
  echo "警告：当前存在未提交的 tracked 改动；生产发布前应先提交并重新构建。" >&2
fi

release_tmp="$(mktemp -d /tmp/lingchen-release.XXXXXX)"
trap 'rm -rf "$release_tmp"' EXIT

staging_dir="$release_tmp/site"
mkdir -p "$staging_dir" "$output_dir"

rsync -rlt \
  --exclude='.DS_Store' \
  --exclude='._*' \
  "$static_dir/" "$staging_dir/"

find "$staging_dir" -type d -exec chmod 0755 {} +
find "$staging_dir" -type f -exec chmod 0644 {} +

if find "$staging_dir" -type f ! -perm -004 -print -quit | grep -q .; then
  echo "打包目录中仍有其他用户不可读的文件，已停止。" >&2
  exit 1
fi

archive="$output_dir/lingchen-website-$release_id.tar.gz"
archive_tmp="$release_tmp/$(basename "$archive")"
archive_list="$release_tmp/archive-list.txt"

COPYFILE_DISABLE=1 tar --no-xattrs -czf "$archive_tmp" -C "$staging_dir" .
tar -tzf "$archive_tmp" >"$archive_list"

for required_entry in ./index.html ./robots.txt ./sitemap.xml ./favicon.ico; do
  if ! grep -Fqx "$required_entry" "$archive_list"; then
    echo "发布包缺少 $required_entry，已停止。" >&2
    exit 1
  fi
done

if grep -Eq '(^|/)\._|(^|/)\.DS_Store$' "$archive_list"; then
  echo "发布包仍包含 macOS 元数据文件，已停止。" >&2
  exit 1
fi

mv "$archive_tmp" "$archive"

archive_sha256="$(shasum -a 256 "$archive" | awk '{print $1}')"
archive_bytes="$(wc -c <"$archive" | tr -d ' ')"

echo "发布包已生成"
echo "文件：$archive"
echo "大小：$archive_bytes bytes"
echo "SHA-256：$archive_sha256"
echo "Termius SFTP 上传到：root@81.68.166.109:/root/$(basename "$archive")"

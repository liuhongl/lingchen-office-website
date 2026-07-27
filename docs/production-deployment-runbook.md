# 灵宸官网生产发布手册

本文档是官网生产发布的固定操作手册。单次发布结果、提交、产物哈希和备份目录仍单独记录在 `docs/release-YYYY-MM-DD.md`。

## 1. 当前生产定位

以下信息已在 2026-07-27 的真实发布中验证，但每次上线前仍须只读复核，不能把历史记录当成当前运行态。

| 项目 | 当前值 |
|---|---|
| 正式域名 | `https://lingchen-ai.com/` |
| 生产主机 | `81.68.166.109` |
| 登录方式 | Termius，`root` 用户 |
| SFTP 上传目录 | `/root/` |
| 正式静态目录 | `/home/lingchen/web/lingchen_website` |
| 预发布目录命名 | `/home/lingchen/web/lingchen_website.release-<提交短 SHA>` |
| 备份目录命名 | `/home/lingchen/web/lingchen_website.backup-<时间>-<提交短 SHA>` |
| Nginx 配置 | `/home/lingchen/mid/nginx-1.28.0/conf/nginx-web.conf` |
| 当前 Nginx 程序 | `/usr/local/nginx/sbin/nginx` |
| 后端反向代理 | `/system/`，静态发布不得改动 |

生产发布只替换 `/home/lingchen/web/lingchen_website`。不要覆盖 `/home/lingchen/web`，不要修改 `/system/` 后端、数据库或 Nginx 配置；确需修改这些内容时，应作为独立变更重新评审。

## 2. 如何缩短上线时间

每次发布都全量重跑所有 MasterGo 页面、全部公开路由和全部预约入口，会产生大量重复工作。以后先按 Git diff 判断影响范围，再执行对应门禁。

### 所有发布固定必跑

1. 核对 Git diff，只提交本次上线内容。
2. 涉及视觉或文案的页面，只执行对应页面的 `pnpm mastergo:check <page-slug>`。
3. 执行 `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、`git diff --check`。
4. 生成全新的发布包和 SHA-256，不复用旧包。
5. 服务器只读复核、远端哈希校验、预发布目录校验、备份和受控切换。
6. 线上检查首页、改动路由、联系页、Logo、favicon、robots、sitemap 和 `/system/contact-us`。

### 只有以下变更才做全站检查

| 变更范围 | 追加检查 |
|---|---|
| 单页文案、样式或单页图片 | 该页 MasterGo/SEO 台账、该路由浏览器回归 |
| `SiteHeader`、`SiteFooter`、Logo、全局 CSS | 全部 sitemap 路由、公共头尾和资源错误 |
| `BookingModal`、`BookingTrigger` | 全站预约入口与弹窗交互 |
| 路由、sitemap、robots、metadata、canonical、JSON-LD、Next 构建配置 | 全部 sitemap 路由的状态码与 SEO/GEO 技术字段 |
| 联系表单、`/system/contact-us`、Nginx `/system/` 代理 | 浏览器完整表单流程和一次带明确测试标记的真实 POST |
| 仅静态图片或 favicon | 目标页面、文件 HTTP、MIME、哈希、权限和浏览器加载 |

没有触发右侧条件时，不重复全站 70 路由、93 个预约入口和真实表单 POST。这样减少的是重复验收，不是省略构建、哈希、备份、回滚和关键线上检查。

## 3. 标准快速发布流程

### 3.1 本地确认并提交

```bash
cd /Users/liuhongli/Desktop/lingchen/lingchen-office-website
git status --short
git diff --stat
git diff --check
```

确认 diff 后，只暂存本次发布文件，避免把 Playwright 临时目录、构建产物或其他未审查改动混入提交。

```bash
git add <本次确认的文件>
git commit -m "feat: publish website updates"
git push origin main
git rev-parse HEAD
```

成功标准：生产包对应一个已推送的明确提交，且 `git status --short` 没有本次发布遗留的 tracked 改动。

### 3.2 本地门禁与构建

先确认没有 `next dev` 与正式构建同时写入 `.next/`：

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
```

如果本项目的开发服务正在运行，先在它所属终端按 `Ctrl+C` 停止，完成本节检查后再执行 `pnpm dev` 恢复。不要让 `next dev` 和 `next build` 共用同一个 `.next/`。

对本次实际改动的页面逐个执行：

```bash
pnpm mastergo:check <page-slug>
```

然后执行固定工程门禁：

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
git diff --check
```

`pnpm build` 成功后，静态站位于项目的 `out/`。不要上传源码、`.next/` 或整个项目目录。

注意：Next.js 命令可能自动改写 `next-env.d.ts`。构建后必须重新执行 `git status --short`；如果它与已提交版本不同，应先查明原因，不能悄悄带着不一致的工作树发布。

如果类型检查报错位置只在损坏的 `.next/dev/types/*` 生成文件中，应先停止开发服务，把 `.next/` 移到 `/tmp` 留作可恢复备份，再重新执行正式构建和类型检查；不要手改生成文件，也不要把它当成业务源码错误。

### 3.3 自动生成干净发布包

```bash
pnpm release:package
```

脚本会：

- 检查 `out/index.html`、`robots.txt`、`sitemap.xml`、`favicon.ico`；
- 排除 `.DS_Store` 和 `._*` AppleDouble 文件；
- 将目录权限规范为 `0755`、文件权限规范为 `0644`；
- 生成 `output/releases/lingchen-website-<提交短 SHA>.tar.gz`；
- 输出文件大小、SHA-256 和 Termius 上传目标。

也可手动指定发布标识和输出目录：

```bash
bash scripts/package-release.sh <release-id> <output-directory>
```

生产发布必须保存脚本输出的文件名、大小和 SHA-256。

### 3.4 Termius 上传

1. 在 Termius 连接 `root@81.68.166.109`。
2. 打开 SFTP。
3. 本地选择 `output/releases/lingchen-website-<提交短 SHA>.tar.gz`。
4. 上传到服务器 `/root/`。

例如提交短 SHA 为 `fbac882` 时：

```text
本地：.../output/releases/lingchen-website-fbac882.tar.gz
远端：/root/lingchen-website-fbac882.tar.gz
```

## 4. 完全手动的服务器上线步骤

以下命令在 Termius 的生产服务器终端逐段执行。先把 `<提交短 SHA>` 和 `<本地 SHA-256>` 换成这次发布的真实值。

### 4.1 定义本次路径

```bash
RELEASE_ID='<提交短 SHA>'
EXPECTED_SHA256='<本地 SHA-256>'
PACKAGE="/root/lingchen-website-${RELEASE_ID}.tar.gz"
SITE="/home/lingchen/web/lingchen_website"
STAGING="/home/lingchen/web/lingchen_website.release-${RELEASE_ID}"
BACKUP="/home/lingchen/web/lingchen_website.backup-$(date +%Y%m%d-%H%M%S)-${RELEASE_ID}"
NGINX_CONF="/home/lingchen/mid/nginx-1.28.0/conf/nginx-web.conf"
NGINX_BIN="/usr/local/nginx/sbin/nginx"
```

### 4.2 只读生产预检

```bash
test -f "$PACKAGE"
test -d "$SITE"
test ! -e "$STAGING"
df -h /home/lingchen/web
ps -ef | grep '[n]ginx: master'
grep -nE 'root |index |location /system/' "$NGINX_CONF"
"$NGINX_BIN" -t -c "$NGINX_CONF"
```

成功标准：

- 上传包和正式目录存在；
- 本次预发布目录尚不存在；
- 磁盘空间充足；
- Nginx master、配置文件、静态 root 和 `/system/` 代理与预期一致；
- `nginx -t` 通过。

如果服务器实际 Nginx 程序或配置路径发生变化，立即暂停并以运行进程为准，不要继续使用历史路径。

### 4.3 校验上传完整性

```bash
ACTUAL_SHA256="$(sha256sum "$PACKAGE" | awk '{print $1}')"
printf 'expected=%s\nactual=%s\n' "$EXPECTED_SHA256" "$ACTUAL_SHA256"
test "$ACTUAL_SHA256" = "$EXPECTED_SHA256"
```

哈希不一致时停止，不解压、不切换，重新上传。

### 4.4 解压到独立预发布目录

```bash
mkdir "$STAGING"
tar -xzf "$PACKAGE" -C "$STAGING"

find "$STAGING" -type f -name '._*' -delete
find "$STAGING" -type f -name '.DS_Store' -delete
find "$STAGING" -type d -exec chmod 0755 {} +
find "$STAGING" -type f -exec chmod 0644 {} +

test -f "$STAGING/index.html"
test -f "$STAGING/contact/index.html"
test -f "$STAGING/robots.txt"
test -f "$STAGING/sitemap.xml"
test -f "$STAGING/favicon.ico"
test -z "$(find "$STAGING" -type f ! -perm -004 -print -quit)"
```

这是独立目录操作，正式站点此时仍未变化。

### 4.5 切换正式目录

切换前再次检查 Nginx：

```bash
"$NGINX_BIN" -t -c "$NGINX_CONF"
```

然后执行受控切换：

```bash
mv "$SITE" "$BACKUP"

if mv "$STAGING" "$SITE"; then
  printf 'site=%s\nbackup=%s\n' "$SITE" "$BACKUP"
else
  mv "$BACKUP" "$SITE"
  echo "新目录切换失败，旧站已恢复。" >&2
  exit 1
fi
```

这里替换的就是 `/home/lingchen/web/lingchen_website`。旧站没有删除，而是保存在 `$BACKUP`。两次 `mv` 之间存在极短间隔，因此称为“受控目录切换”，不声明为严格零间隙原子切换。

静态根路径和 Nginx 配置没有变化时，不需要 reload Nginx。只有配置文件确实修改且另行确认后，才允许执行 reload。

## 5. 上线后最小验证

先在服务器执行：

```bash
curl -fsS -o /dev/null -w '%{http_code}  /\n' https://lingchen-ai.com/
curl -fsS -o /dev/null -w '%{http_code}  /contact/\n' https://lingchen-ai.com/contact/
curl -fsS -o /dev/null -w '%{http_code}  /robots.txt\n' https://lingchen-ai.com/robots.txt
curl -fsS -o /dev/null -w '%{http_code}  /sitemap.xml\n' https://lingchen-ai.com/sitemap.xml
curl -fsS -o /dev/null -w '%{http_code}  /favicon.ico\n' 'https://lingchen-ai.com/favicon.ico?v=20260723-2'
curl -fsS -o /dev/null -w '%{http_code}  /logo\n' https://lingchen-ai.com/images/lingchen-logo.png
curl -sS -o /dev/null -w '%{http_code}  /system/contact-us GET\n' https://lingchen-ai.com/system/contact-us
```

预期静态资源均为 `200`。`/system/contact-us` 的 GET 结果用于确认代理仍可达，业务接口如果只允许 POST，返回 `405` 也可接受；不能把 GET 的 405 误判为表单故障。

然后在真实浏览器检查：

1. 首页、联系页和本次改动路由正常显示。
2. Logo、favicon、图片无 403/404，控制台无新增错误。
3. Header/Footer 链接和正式联系方式正确。
4. 若改动预约弹窗，验证打开、关闭、Escape、滚动锁定和焦点恢复。
5. 若改动联系表单或 `/system/` 代理，使用明确的“官网发布验收测试，请忽略”备注只提交一次真实 POST，并确认 HTTP/业务码和前端成功状态；不读取或导出生产联系人数据。

共享组件、路由、SEO 基础或预约系统发生变更时，再执行全 sitemap 和全入口回归。

## 6. 回滚

任一关键路由、公共资源、表单或共享组件验证失败，先回滚，再排查。不要直接删除失败版本。

确认 `$BACKUP` 是本次切换生成的旧站目录后执行：

```bash
FAILED="/home/lingchen/web/lingchen_website.failed-$(date +%Y%m%d-%H%M%S)-${RELEASE_ID}"

test -d "$SITE"
test -d "$BACKUP"
test ! -e "$FAILED"

mv "$SITE" "$FAILED"

if mv "$BACKUP" "$SITE"; then
  echo "旧站已恢复，新版本保留在 $FAILED"
else
  mv "$FAILED" "$SITE"
  echo "旧站恢复失败，已把新站放回正式目录，请立即人工处理。" >&2
  exit 1
fi
```

恢复后重新检查 `/`、`/contact/`、Logo、favicon、robots、sitemap 和 `/system/contact-us`。失败目录保留用于排查，不在发布过程中使用 `rm -rf` 清理站点目录。

## 7. 每次发布必须记录

在 `docs/release-YYYY-MM-DD.md` 记录：

- 上线提交完整 SHA、提交信息、分支和远端推送状态；
- 实际执行的增量门禁，以及为何需要或不需要全站门禁；
- 发布包文件名、字节数、本地与远端 SHA-256；
- 主机、正式目录、预发布目录、备份目录；
- Nginx 进程、配置测试和是否 reload；
- 切换时间、线上关键路由、资源、交互和表单结果；
- 未验证项、用户确认的例外和可回滚路径。

只有提交、全新产物、远端哈希、备份、切换和线上验证都有证据后，才能报告“已上线”。

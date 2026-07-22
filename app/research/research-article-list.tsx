"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ResearchEditorialCover, type ResearchCoverConfig } from "./research-editorial-cover";

export type ResearchListArticle = {
  number: string;
  tag: string;
  title: string;
  summary: string;
  date?: string;
  duration?: string;
  image: string;
  imageAlt?: string;
  background?: string;
  sourceCover?: boolean;
  editorialCover?: ResearchCoverConfig;
  href: string;
};

const categories = ["全部", "行业洞察", "解决方案&白皮书", "产品动态"] as const;
type ResearchCategory = (typeof categories)[number];

export function ResearchArticleList({ articles }: { articles: ResearchListArticle[] }) {
  const [activeCategory, setActiveCategory] = useState<ResearchCategory>("全部");
  const filteredArticles = activeCategory === "全部"
    ? articles
    : articles.filter((article) => article.tag === activeCategory);

  function selectCategory(category: ResearchCategory) {
    setActiveCategory(category);
  }

  return (
    <>
      <nav className="research-tabs" aria-label="研究文章分类">
        <div className="research-shell research-tabs__inner">
          {categories.map((category) => (
            <button
              aria-controls="research-article-list"
              aria-pressed={activeCategory === category}
              className={`research-tab${activeCategory === category ? " is-active" : ""}`}
              key={category}
              onClick={() => selectCategory(category)}
              type="button"
            >
              {category}
              {category === "全部" ? <b>{articles.length}</b> : null}
            </button>
          ))}
        </div>
      </nav>

      <section className="research-articles is-complete" aria-label="研究文章">
        <div className="research-shell research-articles__list" id="research-article-list">
          {filteredArticles.map((article) => (
            <article
              className="research-card"
              id={`article-${article.number}`}
              key={article.number}
            >
              <div className="research-card__copy">
                <div className="research-card__label">
                  <span className={article.tag === "行业洞察" ? "" : "is-amber"}>{article.tag}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                {article.duration ? (
                  <div className="research-card__meta">
                    <span><Image src="/images/research-institute/clock.svg" alt="" width={14} height={14} />{article.duration}</span>
                  </div>
                ) : null}
              </div>
              <div className="research-card__aside">
                <div className={`research-card__visual${article.sourceCover ? " is-source-cover" : ""}${article.editorialCover ? " is-generated-cover" : ""}`}>
                  {article.background ? <Image className="research-card__visual-bg" src={article.background} alt="" fill sizes="180px" /> : null}
                  {article.editorialCover ? <ResearchEditorialCover config={article.editorialCover} /> : <Image className="research-card__visual-main" src={article.image} alt={article.imageAlt ?? ""} fill sizes="180px" />}
                </div>
                <Link className="research-card__button" href={article.href}>
                  立即阅读
                  <Image src="/images/research-institute/arrow-right.svg" alt="" width={14} height={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}

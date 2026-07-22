"use client";

import { useState } from "react";
import { Zap } from "lucide-react";

const stories = [
  {
    id: "cold-thinking",
    title: "大模型热潮下的‘冷思考’",
    body: (
      <>
        <p>在通用大模型爆发的初期，我们注意到一个极为割裂的怪象：一方面，企业对 AI 的促进业务增长、降本增效寄予厚望；另一方面，大家最终拿到手的，却往往只是一个‘只能一问一答、图文处理、幻觉丛生’的各种AI工具。AI 根本无法代替人去执行真实、精密、复杂的长链路工作，无法交付生产力与商业结果。</p>
        <p>正是基于这一现实痛点，灵宸智能成立，我们创始团队的目标非常纯粹：<strong>不做那些飘在空中的、只能做 PPT展示的‘AI工具’</strong>，我们只做能够深入企业经营最深处、独立解决痛点问题、按可量化商业结果对齐利益的<strong>“工业级 AI Agent OS 基座”</strong>。</p>
        <footer><Zap size={22} /><div><strong>工业级 AI Agent OS</strong><small>为企业经营最深处设计</small></div></footer>
      </>
    ),
  },
  {
    id: "agent-os",
    title: "从“AI幻觉”到“AGENT OS 基座”",
    body: (
      <>
        <p>为什么传统的 AI 在面对复杂的出海获客、不良资产处置等场景时频频失灵？因为这些场景不仅要求LLM推理能力，更对出海获客数据挖掘与触达、批量不良资产处置、一字之差的法律红线等有着近乎变态的精密考量。一旦 AI 出现‘幻觉’，带给企业的将是无效的商业结果。</p>
        <p>灵宸智能的突破在于：我们将资深出海专家、催收机构负责人、资深律师等的完整‘思维链（Chain-of-Thought）’，通过算法自适应编译并固化到灵宸 Agent OS 基座。大模型不再仅仅是神经网络机制下的冷思考，而是能够懂得‘甲方立场与乙方立场的多轮利益攻守’。这种将LLM技术原理与代码算子深度对碰的底气，让灵宸在交付商业结果的领域，建立起坚不可摧的专业门槛。</p>
      </>
    ),
  },
  {
    id: "alliance",
    title: "交付可量化商业结果的“同盟者”",
    body: (
      <>
        <p>我们坚信，技术供应商与客户之间，不应该只是一锤子的软件买卖。如果一个软件买了却用不起来、或者无法直接带来利润，那对企业来说就是成本是消耗品。</p>
        <p>因此，灵宸在业内推行了 RaaS与按交付的商业结果计费的‘同盟者机制’。不管是小额巨量债权催收，还是出海精准高管 Leads 挖掘，我们支持‘不纯卖软件、不收高昂软件初装费，我们按照可量化商业结果收取服务费’。这种极度客观、与客户同进退的商业底色，正是我们能够迅速获得世界500强、国有股份制银行、头部券商、国际物流巨头等标杆客户高度信任的根本原因。</p>
      </>
    ),
  },
] as const;

export function AboutStoryTabs() {
  const [activeId, setActiveId] = useState<(typeof stories)[number]["id"]>(stories[0].id);

  return (
    <>
      <div className="about-story__aside">
        <p className="about-label">OUR STORY</p>
        <h2>灵宸品牌故事与思考</h2>
        <p>点击切换下方按钮，了解灵宸团队的创业思考和做事方法，</p>
        <div className="about-story__tabs" role="tablist" aria-label="品牌故事标签">
          {stories.map((story) => {
            const isActive = story.id === activeId;

            return (
              <button
                key={story.id}
                id={`about-story-tab-${story.id}`}
                type="button"
                className={isActive ? "is-active" : undefined}
                role="tab"
                aria-controls={`about-story-panel-${story.id}`}
                aria-selected={isActive}
                onClick={() => setActiveId(story.id)}
              >
                <i aria-hidden="true" />
                {story.title}
              </button>
            );
          })}
        </div>
      </div>
      {stories.map((story) => (
        <article
          key={story.id}
          id={`about-story-panel-${story.id}`}
          className="about-story__article"
          role="tabpanel"
          aria-labelledby={`about-story-tab-${story.id}`}
          hidden={story.id !== activeId}
        >
          <span>{story.title}</span>
          {story.body}
        </article>
      ))}
    </>
  );
}

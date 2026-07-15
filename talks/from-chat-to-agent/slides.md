---
theme: default
title: 从 Chat 到 Agent AI 研发实践与探索
info: |
  面向内部技术分享的 AI 开发实践演讲模板
author: ruhuang2001
keywords: AI, engineering, agents, developer experience
colorSchema: dark
transition: fade-out
routerMode: hash
canvasWidth: 1280
aspectRatio: 16/9
lineNumbers: true
drawings:
  persist: false
download: true
head: |
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="image" href="./cover.webp">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap">
  <style>
    :root {
      --slidev-theme-primary: #6ca8ff !important;
      --accent: #6ca8ff !important;
      --accent-2: #88e5ff !important;
      --muted: #8c9caf !important;
      --ink: #f8fbff !important;
      --line: rgba(151, 190, 255, 0.15) !important;
      --accent-soft: rgba(74, 137, 255, 0.14) !important;
    }
  </style>
---

<link rel="stylesheet" href="./styles/index.css">
<link rel="stylesheet" href="./styles/variant.css">

<h1 class="hero-title">从 Chat 到 Agent</h1>

<p class="hero-subtitle">AI 研发实践与探索</p>

<div class="hero-speaker">
  <SpeakerProfile compact />
</div>
<div class="hero-date">2026.07.15</div>

<!--
TODO：用 20 秒解释为什么今天值得聊这个话题
建议开场不是介绍工具，而是说一个团队正在面对的真实变化
-->

---
title: 在开始之前
---

<div class="iframe-heading">在开始之前</div>
<div class="bun-embed">
  <iframe src="https://bun.com/blog/bun-in-rust" title="Rewriting Bun in Rust" loading="lazy" />
</div>
<div class="iframe-caption">来源：<a href="https://bun.com/blog/bun-in-rust">https://bun.com/blog/bun-in-rust</a></div>

<style scoped>
.bun-embed {
  position: absolute;
  inset: 64px 60px 62px auto;
  width: min(800px, calc(100% - 96px));
  border-radius: 16px;
  overflow: hidden;
  background: #0a0a0a;
  animation: iframe-fade-in 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.2s both;
}
.iframe-caption {
  position: absolute;
  right: 60px;
  bottom: 28px;
  width: min(800px, calc(100% - 96px));
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  text-align: right;
  animation: iframe-fade-in 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.4s both;
}
.iframe-caption a {
  color: inherit;
  text-decoration: none;
}
.bun-embed iframe {
  width: 1400px;
  height: calc(100% + 11120px);
  border: 0;
  transform: translateY(-11120px) translateX(-128px);
  transform-origin: 0 0;
}
@keyframes iframe-fade-in {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .bun-embed, .iframe-caption { animation: none !important; }
}
</style>

---
title: 今天聊什么
---

<div class="iframe-heading">今天聊什么</div>

<div class="agenda-minimal">
  <v-clicks>
  <div class="agenda-minimal__item">
    <div class="agenda-minimal__head">
      <span class="agenda-minimal__title">Evolution</span>
    </div>
    <div class="agenda-minimal__items">
      <div>Stages</div>
      <div>Status</div>
    </div>
  </div>
  <div class="agenda-minimal__item">
    <div class="agenda-minimal__head">
      <span class="agenda-minimal__title">Practice</span>
    </div>
    <div class="agenda-minimal__items">
      <div>Codex</div>
      <div>Code Review</div>
      <div>CI/CD</div>
      <div>Observability</div>
      <div>Memory</div>
      <div>Others</div>
    </div>
  </div>
  <div class="agenda-minimal__item">
    <div class="agenda-minimal__head">
      <span class="agenda-minimal__title">Future</span>
    </div>
    <div class="agenda-minimal__items">
      <div>Next</div>
    </div>
  </div>
  </v-clicks>
</div>

<DeckFooter section="Overview" />

---
title: Evolution
class: section-divider-slide
---

<div class="section-divider">Evolution</div>

---
title: Stages
---

<div class="iframe-heading">Stages</div>

<div class="evolution">
  <div class="evolution__bar">
    <div class="evolution__segment evolution__segment--done">Chat</div>
    <div class="evolution__segment evolution__segment--current">Agent</div>
    <div class="evolution__segment evolution__segment--future">Auto</div>
    <div class="evolution__arrow">▶</div>
  </div>

  <div class="evolution__timeline">
    <v-clicks>
    <div class="evolution__timeline-item">Chat</div>
    <div class="evolution__timeline-item">Agent</div>
    <div class="evolution__timeline-item">Auto</div>
    </v-clicks>
  </div>
</div>

<DeckFooter section="Evolution" />

---
title: Status
---

<div class="iframe-heading">Status</div>

<div class="triangle-page">
  <div class="triangle">
    <div class="triangle__node triangle__node--top">
      <span class="triangle__label">质量</span>
    </div>
    <div class="triangle__node triangle__node--left">
      <span class="triangle__label">价格</span>
    </div>
    <div class="triangle__node triangle__node--right">
      <span class="triangle__label">速度</span>
    </div>
    <svg class="triangle__svg" viewBox="0 0 300 260">
      <polygon points="150,20 20,240 280,240" fill="none" stroke="rgba(108,168,255,0.72)" stroke-width="2.4" />
    </svg>
    <div class="triangle__center">模型</div>
    <div class="triangle__caption">三者不可兼得，必须做出取舍</div>
  </div>

  <div class="first-class">
    <div class="first-class__intro">构建一个好的 AI 研发体系，需要：</div>
    <v-clicks>
    <div class="fc-item">
      <span class="fc-item__label">一流的模型：</span>
      <span class="fc-item__list">GPT-5.6 / Claude Fable 5 / Claude Opus 4.8</span>
    </div>
    <div class="fc-item">
      <span class="fc-item__label">一流的工具：</span>
      <span class="fc-item__list">Codex / Claude Code / CodeRabbit / Linear / Slack / Mintlify</span>
    </div>
    <div class="fc-item">
      <span class="fc-item__label">一流的平台：</span>
      <span class="fc-item__list">AWS / Cloudflare / Vercel / GitHub</span>
    </div>
    </v-clicks>
  </div>
</div>

<DeckFooter section="Evolution" />

---
title: Practice
class: section-divider-slide
---

<div class="section-divider">Practice</div>

---
title: Codex
---

<div class="iframe-heading">Codex</div>

<div class="practice-intro">
  <div class="practice-intro__lead">把 AI 从对话带进真实研发流程</div>
  <ul class="practice-intro__list">
    <li>Goal</li>
    <li>Computer Use &amp; Record &amp; Replay</li>
  </ul>
</div>

<DeckFooter section="Practice" />

---
title: Codex / Goal
---

<div class="iframe-heading">Codex / Goal</div>
<div class="goal-page"><div class="goal-page__lead">让 AI 从目标出发，完成可验证的任务</div><div class="goal-page__items"><div>明确目标</div><div>约束边界</div><div>验收结果</div></div></div>
<DeckFooter section="Practice" />

---
title: Codex / Goal / Screenshot
---

<div class="iframe-heading">Codex / Goal</div>
<div class="goal-screenshot-layout"><div class="case-evidence__copy"><h2>复杂问题持续验证</h2></div><div class="goal-screenshot-visual"><div class="goal-screenshot"><img src="./public/goal.JPG" alt="Codex Goal 执行过程截图" /></div><div class="case-evidence__annotation">Codex Goal 执行过程</div></div></div>
<DeckFooter section="Practice" />

---
title: Codex / Computer Use & Record & Replay
transition: fade
---

<div class="iframe-heading">Codex / Computer Use &amp; Record &amp; Replay</div>
<div class="case-evidence case-evidence--replay case-evidence--screenshot"><div class="case-evidence__copy replay-flow"><h2>UI 操作复用</h2></div><div class="case-evidence__visual"><div class="case-evidence__media case-evidence__media--image case-evidence__media--replay"><img class="replay-skills-shot" src="./public/recap-skills.png" alt="Record &amp; Replay 生成 UniApp 打包 Skill" /></div><div class="replay-skill-caption"><span>Record &amp; Replay 生成的 <strong>UniApp 打包 Skill</strong></span></div></div></div>
<DeckFooter section="Practice" />

---
title: Codex / Computer Use & Record & Replay
transition: fade
---

<div class="iframe-heading">Codex / Computer Use &amp; Record &amp; Replay</div>
<div class="case-evidence case-evidence--replay"><div class="case-evidence__copy replay-flow"><div class="replay-flow__steps"><div class="replay-flow__step"><strong>录制</strong></div><div class="replay-flow__arrow">↓</div><div class="replay-flow__step"><strong>AI</strong></div><div class="replay-flow__arrow">↓</div><div class="replay-flow__step"><strong>Skills</strong></div></div></div><div class="case-evidence__visual"><div class="case-evidence__media case-evidence__media--image case-evidence__media--replay"><div class="replay-video"><video src="./public/record-replay.mp4" autoplay muted playsinline></video></div></div><div class="replay-skill-caption"><span>Record &amp; Replay 生成的 <strong>UniApp 打包 Skill</strong></span></div></div></div>
<DeckFooter section="Practice" />

---
title: Code Review
---

<div class="iframe-heading">Code Review</div>
<div class="case-evidence"><div class="case-evidence__copy"><h2>大模型检查代码</h2></div><div class="case-evidence__visual"><div class="case-evidence__media case-evidence__media--image case-evidence__media--review-bot"><img src="./public/code-review-bot.jpg" alt="企业微信 Code Review 机器人" /></div><div class="case-evidence__annotation">企业微信 Code Review 机器人</div></div></div>
<DeckFooter section="Practice" />

---
title: Code Review
---

<div class="iframe-heading">Code Review</div>

<div class="case-evidence case-evidence--mr">
  <div class="case-evidence__copy"><h2>行级代码审查</h2></div>
  <div class="case-evidence__visual">
    <div class="mr-review">
      <div class="mr-review__stage">
        <div class="mr-review__media mr-review__media--found"><img src="./public/review-mr-found.png" alt="GitLab MR 中发现的问题" /></div>
        <div v-click class="mr-review__media mr-review__media--solved"><img src="./public/review-mr-solved.jpeg" alt="GitLab MR 中修复的问题" /></div>
      </div>
      <div class="case-evidence__annotation">GitLab MR 代码审查</div>
    </div>
  </div>
</div>

<DeckFooter section="Practice" />

---
title: CI/CD
---

<div class="iframe-heading">CI/CD</div>
<div class="case-evidence case-evidence--teamcity"><div class="case-evidence__copy"><h2>持续化集成部署</h2></div><div class="case-evidence__visual"><div class="case-evidence__media case-evidence__media--image case-evidence__media--teamcity"><img src="./public/teamcity-build-history.png" alt="TeamCity 构建记录" /></div><div class="case-evidence__annotation">TeamCity</div></div></div>
<DeckFooter section="Practice" />

---
title: Memory
---

<div class="iframe-heading">Memory</div>
<div class="case-evidence case-evidence--memory-result"><div class="case-evidence__copy"><h2>记住重要的内容</h2></div><div class="case-evidence__visual"><div class="case-evidence__media case-evidence__media--image memory-result"><img src="./public/nowledge-mem-timeline.png" alt="Nowledge Mem 时间线效果图" /></div><div class="case-evidence__annotation">Nowledge Mem 时间线效果</div></div></div>
<DeckFooter section="Practice" />

---
title: Observability / SigNoz
---

<div class="iframe-heading">Observability</div>
<div class="case-evidence observability-evidence"><div class="case-evidence__copy"><h2>系统持续监测</h2></div><div class="case-evidence__visual observability-single"><div class="observability-stage"><div class="observability-media"><img src="./public/SigNoz.png" alt="SigNoz 可观测性面板" /></div><div v-click class="observability-media observability-media--next"><img src="./public/SigNozMCPAndNotice.JPG" alt="SigNoz MCP 与告警通知" /></div></div><div class="observability-single__caption case-evidence__annotation"><span class="observability-single__base-caption">SigNoz 可观测性面板</span><span class="observability-single__next-caption">SigNoz Alert 和 MCP</span></div></div></div>
<DeckFooter section="Practice" />

---
title: Others
---

<div class="iframe-heading">Others</div>
<div class="others-showcase">
<v-clicks>
  <div class="others-showcase__card">
    <div class="others-showcase__head"><h2>ONES-MCP 任务管理</h2><p>快速查询任务和缺陷，并直接更新处理状态，让 AI 进入团队协作流程</p></div>
    <div class="others-showcase__window"><img src="./public/ones-mcp-latest.png" alt="ONES-MCP 缺陷查询示例" /></div>
  </div>
  <div class="others-showcase__card">
    <div class="others-showcase__head"><h2>Document Skills 文档生成</h2><p>沉淀文档结构、风格与格式，让 AI 生成的交付物更清晰、更专业</p></div>
    <div class="others-showcase__window others-showcase__window--document"><img src="./public/document-skills.png" alt="Document Skills 文档示例" /></div>
  </div>
  <div class="others-showcase__card">
    <div class="others-showcase__head"><h2>Multi-Agent 并行执行</h2><p>多个 Agent 同时执行互不冲突的子任务，缩短复杂工作的整体交付时间</p></div>
    <div class="others-showcase__window others-showcase__window--multi"><img class="others-showcase__asset" src="./public/multi-agents.jpg" alt="Multi-Agent 并行执行示例" /></div>
  </div>
  </v-clicks>
</div>
<DeckFooter section="Practice" />

---
title: Output
---

<div class="iframe-heading">Output</div>
<div class="commit-comparison-slide">
  <div class="commit-comparison-intro">
    <div class="commit-comparison-meta"><span>GitLab</span><span>92 个仓库</span><span>461 个分支</span></div>
  </div>
  <div v-click class="output-play-stage">
  <div class="single-output-chart">
    <div class="single-output-chart__head"><span>团队产出规模</span><span><i class="legend-before"></i>AI 使用前 <i class="legend-after"></i>AI 使用后</span></div>
    <div class="single-output-chart__plot">
      <div class="single-output-chart__group"><div class="single-output-chart__metric"><label>Commit</label></div><div class="single-output-chart__lanes"><div class="single-output-chart__lane"><span>AI 使用前</span><i class="single-output-chart__bar single-output-chart__bar--before" style="--bar-size:28.6%"></i><b>1,476</b></div><div class="single-output-chart__lane"><span>AI 使用后</span><i class="single-output-chart__bar single-output-chart__bar--after" style="--bar-size:100%"></i><b>5,152</b></div></div><strong>+249.1%</strong></div>
      <div class="single-output-chart__group"><div class="single-output-chart__metric"><label>Changed lines</label></div><div class="single-output-chart__lanes"><div class="single-output-chart__lane"><span>AI 使用前</span><i class="single-output-chart__bar single-output-chart__bar--before" style="--bar-size:28.6%"></i><b>1.31M</b></div><div class="single-output-chart__lane"><span>AI 使用后</span><i class="single-output-chart__bar single-output-chart__bar--after" style="--bar-size:83.1%"></i><b>3.80M</b></div></div><strong>+189.9%</strong></div>
    </div>
  </div>
  <p class="output-reveal-copy">使用 AI 后，提交次数提升 249.1%，代码改动量提升 189.9%</p>
  </div>
</div>

<style scoped>
.commit-comparison-slide { position: absolute; inset: 104px 64px 54px; display: grid; align-content: start; gap: 24px; }
.commit-comparison-meta { display: flex; align-items: center; gap: 18px; margin-bottom: 20px; color: #7de0bd; font: 14px 'IBM Plex Mono', monospace; letter-spacing: .06em; }
.commit-comparison-meta span + span { padding-left: 16px; border-left: 1px solid rgba(125,224,189,.34); }
.commit-comparison-intro h2 { margin: 0; color: var(--ink); font-size: 38px; letter-spacing: -.06em; }
.commit-comparison-intro p { max-width: 680px; margin: 14px 0 0; color: var(--muted); font-size: 16px; line-height: 1.5; }
.output-reveal-copy { margin: 0; color: #7de0bd !important; font-size: 24px !important; font-weight: 500; line-height: 1.35; letter-spacing: -.02em; opacity: 0; transform: translateY(8px); animation: output-result-reveal .7s cubic-bezier(.16,1,.3,1) 3.25s forwards; }
.output-play-stage { display: grid; gap: 20px; }
.commit-comparison-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.commit-comparison-card { position: relative; padding: 28px 30px 32px; border: 1px solid rgba(168, 212, 255, .18); border-radius: 14px; background: rgba(255,255,255,.045); box-shadow: 0 22px 70px rgba(0,0,0,.18); }
.commit-comparison-card__head { display: flex; justify-content: space-between; margin-bottom: 34px; color: rgba(255,255,255,.76); font: 600 14px 'IBM Plex Mono', monospace; }
.commit-comparison-card__head strong { color: #7de0bd; font: 500 12px 'IBM Plex Mono', monospace; letter-spacing: 0; }
.output-stream { display: grid; gap: 25px; margin: 24px 0 14px; }
.output-stream__row { display: grid; grid-template-columns: 78px minmax(0, 1fr) 70px; gap: 14px; align-items: center; }
.output-stream__row label { color: var(--muted); font: 11px 'IBM Plex Mono', monospace; }
.output-stream__row b { color: var(--ink); font: 500 19px 'IBM Plex Mono', monospace; text-align: right; }
.output-stream__units { display: flex; gap: 4px; min-height: 28px; }
.output-stream__units i { flex: 1; min-width: 7px; border-radius: 2px; transform: scaleY(0); transform-origin: bottom; animation: output-unit-rise .55s cubic-bezier(.16,1,.3,1) both; }
.output-stream__units--before i { background: #e89b52; }
.output-stream__units--after i { background: #7de0bd; }
.output-stream__units i:nth-child(1) { animation-delay: .25s; }.output-stream__units i:nth-child(2) { animation-delay: .35s; }.output-stream__units i:nth-child(3) { animation-delay: .45s; }.output-stream__units i:nth-child(4) { animation-delay: .55s; }.output-stream__units i:nth-child(5) { animation-delay: .9s; }.output-stream__units i:nth-child(6) { animation-delay: 1s; }.output-stream__units i:nth-child(7) { animation-delay: 1.1s; }.output-stream__units i:nth-child(8) { animation-delay: 1.2s; }.output-stream__units i:nth-child(9) { animation-delay: 1.3s; }.output-stream__units i:nth-child(10) { animation-delay: 1.4s; }.output-stream__units i:nth-child(11) { animation-delay: 1.5s; }.output-stream__units i:nth-child(12) { animation-delay: 1.6s; }
@keyframes output-unit-rise { from { transform: scaleY(0); opacity: .2; } to { transform: scaleY(1); opacity: 1; } }
.output-chart { display: block; width: 100%; height: 180px; margin-top: 18px; overflow: visible; }
.output-chart text { fill: var(--muted); font: 11px 'IBM Plex Mono', monospace; }
.output-chart__axis { stroke: rgba(255,255,255,.16); stroke-width: 1; }
.output-chart__divider { stroke: rgba(125,224,189,.45); stroke-dasharray: 3 7; stroke-width: 1; }
.output-chart__line { fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 4; stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: output-line-draw 2.8s cubic-bezier(.16,1,.3,1) forwards; }
.output-chart__line--before { stroke: #e89b52; }
.output-chart__line--after { stroke: #7de0bd; animation-delay: 1.1s; }
.output-chart__points circle { stroke: #07111b; stroke-width: 3; transform-box: fill-box; transform-origin: center; transform: scale(0); animation: output-point-pop .45s cubic-bezier(.16,1,.3,1) forwards; }
.output-chart__points--before circle { fill: #e89b52; }
.output-chart__points--after circle { fill: #7de0bd; animation-delay: 1.35s; }
.output-chart__footer { display: flex; justify-content: space-between; margin-top: -5px; color: var(--muted); font: 11px 'IBM Plex Mono', monospace; }
.output-chart__footer strong { color: #7de0bd; font-weight: 500; }
@keyframes output-line-draw { to { stroke-dashoffset: 0; } }
@keyframes output-point-pop { to { transform: scale(1); } }
.single-output-chart { padding: 34px 40px 38px; border: 1px solid rgba(168,212,255,.18); border-radius: 14px; background: rgba(255,255,255,.045); box-shadow: 0 22px 70px rgba(0,0,0,.18); }
.single-output-chart__head { display: flex; align-items: center; justify-content: space-between; color: rgba(255,255,255,.82); font: 600 18px 'IBM Plex Mono', monospace; }
.single-output-chart__head > span:last-child { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 15px; font-weight: 400; }
.single-output-chart__head i { display: inline-block; width: 10px; height: 10px; margin-left: 10px; border-radius: 50%; }
.legend-before { background: #e89b52; }.legend-after { background: #7de0bd; }
.single-output-chart__plot { display: grid; gap: 34px; margin-top: 38px; }
.single-output-chart__group { display: grid; grid-template-columns: 155px minmax(0,1fr) 96px; gap: 28px; align-items: center; }
.single-output-chart__metric { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.single-output-chart__metric label { color: var(--muted); font: 19px 'IBM Plex Mono', monospace; }
.single-output-chart__group > strong { color: #7de0bd; font: 500 18px 'IBM Plex Mono', monospace; opacity: 0; transform: translateX(10px); animation: output-result-reveal .7s cubic-bezier(.16,1,.3,1) 3.25s forwards; }
.single-output-chart__lanes { display: grid; gap: 12px; }
.single-output-chart__lane { display: grid; grid-template-columns: 78px minmax(0,1fr) 74px; gap: 14px; align-items: center; }
.single-output-chart__lane > span { color: var(--muted); font: 15px 'IBM Plex Mono', monospace; }
.single-output-chart__lane > b { color: var(--ink); font: 500 22px 'IBM Plex Mono', monospace; text-align: right; }
.single-output-chart__bar { display: block; width: var(--bar-size); height: 28px; min-width: 7px; transform: scaleX(0); transform-origin: left; animation: single-bar-rise 2.8s cubic-bezier(.16,1,.3,1) both; }
.single-output-chart__bar--before { background: #e89b52; animation-delay: .25s; }.single-output-chart__bar--after { background: #7de0bd; animation-delay: .8s; }
.single-output-chart__bar b { position: absolute; }
@keyframes single-bar-rise { from { transform: scaleX(0); opacity: .25; } to { transform: scaleX(1); opacity: 1; } }
@keyframes output-result-reveal { to { opacity: 1; transform: translateX(0); } }
@media (prefers-reduced-motion: reduce) { .output-stream__units i, .output-chart__line, .output-chart__points circle, .single-output-chart__bar { animation: none; transform: scale(1); opacity: 1; stroke-dashoffset: 0; } }
</style>

<DeckFooter section="Practice" />

---
title: Future
class: section-divider-slide
---

<div class="section-divider">Future</div>

---
title: Future / Next
---

<div class="iframe-heading">Next</div>

<div class="future-improvements">
  <div class="future-improvement"><span class="future-improvement__label">EVALUATION</span><h3>建立持续评估</h3><p>用真实数据持续校准 AI 研发效果</p></div>
  <div class="future-improvement"><span class="future-improvement__label">ASSETS</span><h3>沉淀团队专属能力</h3><p>将 Memory、Skills 与实践沉淀为团队资产</p></div>
  <div class="future-improvement"><span class="future-improvement__label">COLLABORATION</span><h3>扩大协作边界</h3><p>让 AI 串联代码、评审、交付与运维</p></div>
  <div class="future-improvement"><span class="future-improvement__label">SAFETY</span><h3>补齐安全与治理</h3><p>在权限、审计与人工确认中守住边界</p></div>
</div>

<DeckFooter section="Future" />

---
title: Thank You
---

<div class="closing-slide">
  <div class="closing-slide__left">
    <div class="closing-slide__title">Thank You</div>
    <SpeakerProfile compact />
  </div>
  <div class="closing-slide__meta">
    <div class="closing-slide__section">致谢</div>
    <div class="closing-slide__credit-row">
      <PoweredBySlidev />
    </div>
    <div class="closing-slide__credit-row">Created by Codex & Devin</div>
    <div class="closing-slide__credit-row">封面来源：<a href="https://unsplash.com/@yancymin" target="_blank">Yancy Min</a> / <a href="https://unsplash.com/photos/a-close-up-of-a-text-description-on-a-computer-screen-842ofHC6MaI" target="_blank">Unsplash</a></div>
    <div class="closing-slide__credit-row">设计参考：<a href="https://github.com/BaizeAI/talks" target="_blank">BaizeAI/talks</a> / <a href="https://github.com/LittleSound/talks-template" target="_blank">LittleSound/talks-template</a></div>
  </div>
</div>

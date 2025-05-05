---
theme: default
layout: center
highlighter: shiki
transition: none
---

<link rel="stylesheet" href="global.css">


# AI 辅助开发指北

<Contact />

---
theme: default
layout: default
transition: none
---

<h1 class="animated-title">AI 辅助开发指北</h1>

<div class="flex justify-center items-center gap-8 h-full">
  <div
    v-click
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
    class="w-80"
  >
    <h2 class="text-3xl font-normal bg-gradient-to-r from-blue-500/10 to-blue-500/5 px-8 py-6 rounded-xl text-center backdrop-blur-sm h-32 flex items-center justify-center">
      我的 AI 经历
    </h2>
  </div>

  <div
    v-click
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
    class="w-80"
  >
    <h2 class="text-3xl font-normal bg-gradient-to-r from-green-500/10 to-green-500/5 px-8 py-6 rounded-xl text-center backdrop-blur-sm h-32 flex items-center justify-center whitespace-nowrap">
      AI 辅助开发实践
    </h2>
  </div>

  <div
    v-click
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
    class="w-80"
  >
    <h2 class="text-3xl font-normal bg-gradient-to-r from-orange-500/10 to-orange-500/5 px-8 py-6 rounded-xl text-center backdrop-blur-sm h-32 flex items-center justify-center">
      代码之外
    </h2>
  </div>
</div>

<PageFooter />

---
theme: default
layout: default
transition: none
---

<div class="main-title">AI 辅助开发指北</div>
<div class="sub-title">我的 AI 经历</div>

<PageFooter />

---
theme: default
layout: default
transition: none
---


<div class="static-main-title">AI 辅助开发指北</div>
<div class="static-sub-title">我的 AI 经历</div>

<div class="flex justify-center items-center h-full">
  <div class="relative w-[1000px] h-[600px]">
    <svg width="1000" height="600">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
        </marker>
      </defs>
      <g transform="translate(150, 70)">
        <line 
          x1="50" y1="400" 
          x2="50" y2="50" 
          stroke="#333" 
          stroke-width="2"
          marker-end="url(#arrowhead)"
          class="animate-draw"
        />
        <line 
          x1="50" y1="400" 
          x2="650" y2="400" 
          stroke="#333" 
          stroke-width="2"
          marker-end="url(#arrowhead)"
          class="animate-draw"
        />
        <text x="150" y="225" class="axis-label" transform="rotate(-90, 30, 225)">满意度</text>
        <text x="650" y="440" class="axis-label" text-anchor="middle">时间线</text>
      </g>
    </svg>
  </div>
  
  <div v-click>
        <svg width="1000" height="600" class="absolute top-0 left-0">
        <g transform="translate(100, 50)">
          <image 
            href="/chatgpt.png" 
            x="110" 
            y="300" 
            width="80" 
            height="80"
            class="point rounded-lg shadow-xl invert-in-dark"
          />
          <text 
            class="point-label" 
            x="150" 
            y="420" 
            text-anchor="middle" 
            style="font-size: 16px"
          >ChatGPT</text>
      </g>
      </svg>
    </div>
  </div>

  <div v-click>
        <svg width="1000" height="600" class="absolute top-0 left-0">
        <g transform="translate(100, 50)">
          <image 
            href="/gpt4.png" 
            x="210" 
            y="250" 
            width="80" 
            height="80"
            class="point rounded-lg shadow-xl"
          />
          <text 
            class="point-label" 
            x="250" 
            y="420" 
            text-anchor="middle" 
            style="font-size: 16px"
          >GPT-4</text>
      </g>
      </svg>
  </div>

  <div v-click>
        <svg width="1000" height="600" class="absolute top-0 left-0">
        <g transform="translate(100, 50)">
          <image 
            href="/copilot.png" 
            x="310" 
            y="200" 
            width="80" 
            height="80"
            class="point rounded-lg shadow-xl"
          />
          <text 
            class="point-label" 
            x="350" 
            y="420" 
            text-anchor="middle" 
            style="font-size: 16px"
          >Copilot</text>
      </g>
      </svg>
  </div>

  <div v-click>
        <svg width="1000" height="600" class="absolute top-0 left-0">
        <g transform="translate(100, 50)">
          <image 
            href="/deepseek.png" 
            x="410" 
            y="150" 
            width="80" 
            height="80"
            class="point rounded-lg shadow-xl"
          />
          <text 
            class="point-label" 
            x="450" 
            y="420" 
            text-anchor="middle" 
            style="font-size: 16px"
          >DeepSeek</text>
      </g>
      </svg>
  </div>

  <div v-click>
        <svg width="1000" height="600" class="absolute top-0 left-0">
        <g transform="translate(100, 50)">
          <image 
            href="/windsurf.png" 
            x="510" 
            y="80" 
            width="80" 
            height="80"
            class="point rounded-lg shadow-xl"
          />
          <text 
            class="point-label" 
            x="550" 
            y="420" 
            text-anchor="middle" 
            style="font-size: 16px"
          >Windsurf</text>
      </g>
      </svg>
  </div>


<PageFooter />


---
theme: default
layout: default
transition: none
---

<div class="main-title">AI 辅助开发指北</div>
<div class="sub-title">AI 辅助开发实践</div>

<PageFooter />

---
theme: default
layout: cover
transition: none
---

<h2 class="absolute top-1/2 left-1/12 transform -translate-x-1/2 -translate-y-1/2">Chat</h2>


<SecondPartHeader />

<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧视频部分 -->
  <div v-click class="absolute" style="left: 400px; top: 150px;">
    <video 
      ref="video"
      src="/qwen.mov"
      width="500"
      height="375"
      muted
      loop
      autoplay
      class="rounded-lg shadow-xl"
      @click="$refs.video.play()"
    ></video>
    <div class="absolute top-1/1.6 left-0 w-full h-full flex items-center justify-center">
      Qwen 官网使用
    </div>
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover
transition: none
---

<h2 class="absolute top-1/2 left-1/12 transform -translate-x-1/2 -translate-y-1/2">Chat</h2>


<SecondPartHeader />

<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧视频部分 -->
  <div v-click class="absolute" style="left: 400px; top: 100px;">
    <video 
      ref="video"
      src="/chatwise.mov"
      width="500"
      height="375"
      muted
      loop
      autoplay
      class="rounded-lg shadow-xl"
      @click="$refs.video.play()"
    ></video>
    <div class="absolute top-1/1.6 left-0 w-full h-full flex items-center justify-center">
      ChatWise 客户端（API）
    </div>
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover 
transition: none
---


<h2 class="absolute top-1/2 left-1/12 transform -translate-x-1/2 -translate-y-1/2">Tab</h2>

<SecondPartHeader />


<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧视频部分 -->
  <div v-click class="absolute" style="left: 400px; top: 100px;">
    <video 
      ref="video"
      src="/tab1.mov"
      width="500"
      height="375"
      muted
      loop
      autoplay
      class="rounded-lg shadow-xl"
      @click="$refs.video.play()"
    ></video>
    <div class="absolute top-1/1.6 left-0 w-full h-full flex items-center justify-center">
      Windsurf Tab 补全
    </div>
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover 
transition: none
---


<h2 class="absolute top-1/2 left-1/12 transform -translate-x-1/2 -translate-y-1/2">Tab</h2>

<SecondPartHeader />


<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧视频部分 -->
  <div v-click class="absolute" style="left: 400px; top: 100px;">
    <video 
      ref="video"
      src="/tab2.mov"
      width="500"
      height="375"
      muted
      loop
      autoplay
      class="rounded-lg shadow-xl"
      @click="$refs.video.play()"
    ></video>
    <div class="absolute top-1/1.6 left-0 w-full h-full flex items-center justify-center">
      Windsurf Tab 预测下一步
    </div>
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover 
transition: none
---

<h2 class="absolute top-1/2 left-1/10 transform -translate-x-1/2 -translate-y-1/2">Agent</h2>


<SecondPartHeader />

<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧视频部分 -->
  <div v-click class="absolute" style="left: 400px; top: 150px;">
    <video 
      ref="video"
      src="/agent.mov"
      width="500"
      height="375"
      muted
      loop
      autoplay
      class="rounded-lg shadow-xl"
      @click="$refs.video.play()"
    ></video>
    <div class="absolute top-1/1.4 left-0 w-full h-full flex items-center justify-center">
      Augment Code Agent
    </div>
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover 
transition: none
---

<h2 class="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2">MCP and More</h2>

<SecondPartHeader />

<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧视频部分 -->
  <div v-click class="absolute" style="left: 400px; top: 130px;">
    <video 
      ref="video"
      src="/mcp4.mov"
      width="500"
      height="400"
      muted
      autoplay
      class="rounded-lg shadow-xl"
      @click="$refs.video.play()"
    ></video>
    <div class="absolute top-1/1.4 left-0 w-full h-full flex items-center justify-center">
      MCP 连接 Github
    </div>
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover 
transition: none
---

<h2 class="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2">MCP and More</h2>

<SecondPartHeader />

<div v-click class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧图片部分 -->
  <div class="flex items-center justify-center">
    <img src="/deepwiki.png" alt="DeepWiki" class="max-w-[125%] h-auto rounded-lg shadow-xl">
  </div>
  <div class="absolute top-1/3 left-1/6 w-full h-full flex items-center justify-center">
    DeepWiki
  </div>
</div>

<PageFooter />


---
theme: default
layout: cover
transition: none
---

<h2 class="absolute top-1/2 left-1/8.5 transform -translate-x-1/2 -translate-y-1/2">使用推荐</h2>


<div class="flex flex-col gap-[2rem] mt-1 ml-auto mr-26 max-w-sm">
  <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
    <h3 class="text-lg mb-2 font-semibold">🤖 常用模型</h3>
    <ul class="space-y-2">
      <li class="flex items-center gap-2 text-sm">
        <div class="i-carbon-dot-mark text-blue-500"></div>
        <span>GPT-4o / Qwen3 / DeepSeek v3</span>
      </li>
      <li class="flex items-center gap-2 text-sm">
        <div class="i-carbon-dot-mark text-purple-500"></div>
        <span>Claude-3.7 Sonnet / Gemini-Pro 2.5</span>
      </li>
      <li class="flex items-center gap-2 text-sm">
        <div class="i-carbon-dot-mark text-green-500"></div>
        <span>Cluade-3.7 Sonnet Thinking / o4 mini-high </span>
      </li>
    </ul>
  </div>

  <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
    <h3 class="text-lg mb-2 font-semibold">🛠️ 开发工具</h3>
    <li class="flex items-center gap-2 text-sm">
        <div class="i-carbon-dot-mark text-blue-500"></div>
        <span>
          <a href="https://chatwise.app/" target="_blank" class="hover:text-blue-500">Chatwise</a> / 
          <a href="https://github.com/CherryHQ/cherry-studio" target="_blank" class="hover:text-blue-500">Cherry Studio</a>
        </span>
      </li>
      <li class="flex items-center gap-2 text-sm">
        <div class="i-carbon-dot-mark text-purple-500"></div>
        <span>
          <a href="https://lingma.aliyun.com/" target="_blank" class="hover:text-purple-500">通义灵码</a> / 
          <a href="https://www.augmentcode.com/" target="_blank" class="hover:text-purple-500">Augment Code</a>
        </span>
      </li>
      <li class="flex items-center gap-2 text-sm">
        <div class="i-carbon-dot-mark text-green-500"></div>
        <span>
          <a href="https://windsurf.com/editor" target="_blank" class="hover:text-green-500">Windsurf</a> / 
          <a href="https://www.cursor.com/cn" target="_blank" class="hover:text-green-500">Cursor</a> / 
          <a href="https://trae.ai" target="_blank" class="hover:text-green-500">Trae</a>
        </span>
      </li>
  </div>
</div>

<SecondPartHeader />


<PageFooter />

---
theme: default
layout: default
transition: none
---


<div class="main-title">AI 辅助开发指北</div>
<div class="sub-title">代码之外</div>

<PageFooter />

---
theme: default
layout: cover 
transition: none
---

<h2 class="absolute top-1/2 left-1/7.5 transform -translate-x-1/2 -translate-y-1/2">沉浸式翻译</h2>


<ThirdPartHeader />

<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧图片部分 -->
  <div class="flex items-center justify-center">
    <img src="/dualTranslate.png" alt="双语翻译" class="max-w-[150%] h-auto rounded-lg shadow-xl">
  </div>
</div>

<PageFooter />

---
theme: default
layout: cover
transition: none
---

<h2 class="absolute top-1/2 left-1/7.5 transform -translate-x-1/2 -translate-y-1/2">Gyroscope</h2>


<ThirdPartHeader />

<div class="grid grid-cols-2 gap-2 mr-16">
  <!-- 左侧列表部分 -->
  <div class="">
  </div>
  
  <!-- 右侧图片部分 -->
  <div class="flex items-center justify-center">
    <img src="/gyroscope.png" alt="Gyroscope" class="max-w-[150%] h-auto rounded-lg shadow-2xl">
  </div>
</div>

<PageFooter />


---
theme: default
layout: center
transition: none
---

<div class="flex flex-col items-center thank-you-section">
  <h1 class="text-3xl font-normal mb-8">Thanks for listening</h1>
  <PoweredBySlidev />
</div>

<Contact />
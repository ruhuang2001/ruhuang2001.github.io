# 从 Chat 到 Agent AI 研发实践与探索

面向内部技术分享的 Slidev 模板。已经提供封面、目录、章节页、观点页、流程页、案例页、代码页、复盘页、行动计划和结束页。

## 开始使用

```bash
pnpm install
pnpm dev
```

浏览器会打开 <http://localhost:3030>。主要编辑入口是 [`slides.md`](./slides.md)，全局视觉样式位于 [`styles/index.css`](./styles/index.css)。

## 写作约定

- 搜索 `TODO` 可以找到所有待替换内容。
- 一页只表达一个核心观点，标题尽量写成结论。
- `<!-- -->` 中的内容是演讲者备注，不会显示在主画面。
- 使用 `<DeckFooter section="章节名" />` 保持页脚一致。
- 使用 `v-click` 控制信息逐步出现，避免一次性堆满内容。
- 图片、视频等素材放入 `public/`，在幻灯片中用 `/文件名` 引用。

## 构建与导出

```bash
pnpm build
pnpm export
```

## 更换封面图片

封面图片位于 [`public/cover.jpg`](./public/cover.jpg)。直接用另一张图片覆盖它即可，文件名保持为 `cover.jpg`。

当前封面图片暂未提供原始作者信息，因此致谢中标记为“来源待补充”。

历史版本：

- Fotis Fotopoulos 版本：[`public/cover-fotis-fotopoulos.jpg`](./public/cover-fotis-fotopoulos.jpg)
- Christopher Gower 版本：[`public/cover-christopher-gower.jpg`](./public/cover-christopher-gower.jpg)

建议图片：

- 横向构图，推荐尺寸 1920×1080 或更大。
- 主体尽量位于画面右侧，左侧留给演讲标题。
- 选择偏暗或容易叠加深色遮罩的技术、办公、设备或抽象场景。
- 修改后开发服务会自动刷新，无需重新启动。

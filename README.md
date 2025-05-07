# ruhuang2001 演示文稿集合

这个仓库包含了我的各种技术演示文稿，使用 [Slidev](https://sli.dev/) 构建，并通过 GitHub Pages 部署。

## 项目结构

```
ruhuang2001.github.io/
├── index.html         # 主页，列出所有演示文稿
├── talks/             # 所有演示文稿的根目录
│   └── aigc-dev/      # AIGC辅助开发指北演示文稿
└── .github/workflows/ # GitHub Actions工作流配置
```

## 如何添加新的演示文稿

1. 在 `talks` 目录下创建一个新的子目录
2. 在新目录中初始化一个新的 Slidev 项目
3. 在 `.github/workflows/deploy.yml` 文件中添加构建新演示文稿的步骤
4. 在 `index.html` 中添加新演示文稿的链接

## 本地开发

要在本地预览某个演示文稿：

```bash
cd talks/[演示文稿名称]
npm install
npm run dev
```

## 部署

该仓库使用 GitHub Actions 自动部署到 GitHub Pages。每当推送到主分支时，都会触发构建和部署过程。

# 王伟个人网站

这是一个基于 React + Vite 的个人作品集网站，静态资源已经整理在 `public/assets` 中，适合上传到 GitHub 并通过 GitHub Pages 部署。

## 本地运行

```bash
npm ci
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `dist` 目录。

## GitHub Pages 部署

1. 将本目录所有文件上传到 GitHub 仓库。
2. 在仓库 `Settings > Pages` 中，将 Source 设置为 `GitHub Actions`。
3. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布网站。

# SeekMind Web - 智能思维助手APP官网

一个使用 Vue 3 + Vite + Tailwind CSS 构建的现代化APP介绍网站，专为SeekMind智能思维助手APP设计。

## 🚀 项目特性

- **现代化技术栈**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **响应式设计**: 移动端优先，完美适配320px-768px移动端和768px+桌面端
- **性能优化**: 图片懒加载、代码分割、性能监控
- **SEO友好**: 完整的meta标签、结构化数据、Open Graph支持
- **社交分享**: 支持微信、微博、QQ等平台分享
- **主题切换**: 支持浅色/深色/跟随系统三种主题模式
- **页面过渡**: 流畅的页面切换动画
- **组件化开发**: 可复用的UI组件库

## 📱 页面结构

### 主页 (`/`)
- APP功能特性介绍
- 产品截图展示
- 用户评价展示
- 下载区域（iOS/Android）
- 统计数据展示

### 内容分享页面 (`/share/:id?`)
- 支持URL参数传递内容ID
- 动态内容展示
- 社交媒体分享功能
- 返回主页和下载引导

### 主题演示页面 (`/theme-demo`) - 仅开发环境
- 主题切换功能演示
- 各种组件在不同主题下的效果展示

## 🎨 主题系统

### 支持的主题模式
- **浅色模式**: 经典的白色背景主题
- **深色模式**: 护眼的深色背景主题  
- **跟随系统**: 自动跟随操作系统主题设置

### 主题特性
- 🔄 平滑的主题切换动画
- 💾 主题设置持久化存储
- 🖥️ 自动检测系统主题偏好
- 📱 移动端友好的主题切换界面
- 🎯 所有组件完整的dark mode支持

## 🛠️ 技术栈

- **前端框架**: Vue 3 (Composition API + TypeScript)
- **构建工具**: Vite 5
- **样式框架**: Tailwind CSS v3 (支持dark mode)
- **路由管理**: Vue Router
- **状态管理**: Pinia
- **代码规范**: ESLint + Prettier

## 📦 安装和运行

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev          # 启动开发服务器 (http://localhost:5173)
```

### 构建生产版本
```bash
npm run build        # 构建生产版本
```

### 预览构建结果
```bash
npm run preview      # 预览构建结果 (http://localhost:4173)
```

### 类型检查
```bash
npm run type-check   # TypeScript类型检查
```

## 🎨 设计系统

### 颜色主题
- **主色调**: Blue (#2563eb)
- **辅助色**: Gray (#64748b)
- **成功色**: Green (#10b981)
- **警告色**: Yellow (#f59e0b)
- **错误色**: Red (#ef4444)

### 响应式断点
- **xs**: 320px (超小屏幕)
- **sm**: 640px (小屏幕)
- **md**: 768px (中等屏幕)
- **lg**: 1024px (大屏幕)
- **xl**: 1280px (超大屏幕)

## 📁 项目结构

```
src/
├── components/          # 组件目录
│   ├── layout/         # 布局组件
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   └── ui/             # UI组件
│       ├── DownloadButton.vue
│       ├── FeatureCard.vue
│       ├── LazyImage.vue
│       ├── SocialShare.vue
│       └── ThemeToggle.vue
├── views/              # 页面组件
│   ├── HomeView.vue
│   ├── ShareView.vue
│   └── ThemeDemo.vue
├── stores/             # Pinia状态管理
│   └── theme.ts        # 主题管理store
├── router/             # 路由配置
├── utils/              # 工具函数
│   └── performance.ts  # 性能监控
├── assets/             # 静态资源
└── main.ts            # 应用入口
```

## 🚀 部署

### Netlify
项目包含 `netlify.toml` 配置文件，支持一键部署到Netlify。

### Vercel
项目包含 `vercel.json` 配置文件，支持一键部署到Vercel。

### 其他平台
构建后的 `dist` 目录可以部署到任何静态文件托管服务。

## 📊 性能优化

- **代码分割**: 路由级别的懒加载
- **图片优化**: 懒加载和响应式图片
- **缓存策略**: 静态资源长期缓存
- **压缩优化**: Gzip压缩和资源压缩
- **性能监控**: 内置性能指标收集

## 🔧 开发指南

### 添加新页面
1. 在 `src/views/` 创建新的Vue组件
2. 在 `src/router/index.ts` 添加路由配置
3. 更新导航菜单（如需要）

### 添加新组件
1. 在 `src/components/ui/` 创建组件
2. 使用TypeScript定义Props接口
3. 添加响应式样式类和dark mode支持

### 样式规范
- 使用Tailwind CSS工具类
- 遵循移动端优先原则
- 为所有组件添加dark mode支持
- 使用语义化的组件类名

### 主题开发
- 使用 `dark:` 前缀为深色模式添加样式
- 通过 `useThemeStore()` 访问主题状态
- 确保颜色对比度符合无障碍标准

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目。

## 📞 联系方式

- 邮箱: support@seekmind.com
- 官网: https://seekmind.app

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

// 页面加载时的初始化
onMounted(() => {
  // 添加页面加载动画类
  document.body.classList.add('loaded')
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- 路由视图带过渡动画 -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

body.loaded {
  opacity: 1;
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.98);
}

/* 选择文本时的背景色 */
::selection {
  background-color: rgba(254, 69, 2, 0.2);
  color: #c2410c;
}

::-moz-selection {
  background-color: rgba(254, 69, 2, 0.2);
  color: #c2410c;
}

/* 焦点样式 */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid #fe4502;
  outline-offset: 2px;
}

/* 字体渲染优化 */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 图片优化 */
img {
  max-width: 100%;
  height: auto;
}

/* 链接样式重置 */
a {
  color: inherit;
  text-decoration: none;
}

/* 按钮样式重置 */
button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

/* 输入框样式重置 */
input,
textarea {
  font-family: inherit;
  border: none;
  outline: none;
}

/* 页面加载指示器 */
.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #fe4502, #ea580c);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 9999;
}

.loading-bar.loading {
  animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>

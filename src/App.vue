<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

// 页面加载时的初始化
onMounted(() => {
  // 添加页面加载动画类
  document.body.classList.add('loaded')
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
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
  transition: opacity 0.3s ease-in-out;
}

body.loaded {
  opacity: 1;
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>

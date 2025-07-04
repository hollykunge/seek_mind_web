<template>
  <div class="lazy-image-container" :class="containerClass">
    <!-- 占位符 -->
    <div
      v-if="!imageLoaded && !imageError"
      class="placeholder"
      :class="placeholderClass"
    >
      <div class="placeholder-content">
        <svg
          class="w-8 h-8 text-gray-400 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span v-if="showLoadingText" class="text-sm text-gray-500 mt-2">加载中...</span>
      </div>
    </div>

    <!-- 错误状态 -->
    <div
      v-else-if="imageError"
      class="error-placeholder"
      :class="placeholderClass"
    >
      <div class="error-content">
        <svg
          class="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="text-sm text-gray-500 mt-2">加载失败</span>
      </div>
    </div>

    <!-- 实际图片 -->
    <img
      v-show="imageLoaded && !imageError"
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Props {
  src: string
  alt: string
  placeholder?: string
  containerClass?: string
  imageClass?: string
  placeholderClass?: string
  showLoadingText?: boolean
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  containerClass: '',
  imageClass: 'w-full h-full object-cover',
  placeholderClass: 'w-full h-full bg-gray-200 flex items-center justify-center',
  showLoadingText: false,
  threshold: 0.1
})

const imageRef = ref<HTMLImageElement>()
const imageLoaded = ref(false)
const imageError = ref(false)
const inView = ref(false)

// 当前使用的图片源
const currentSrc = computed(() => {
  if (inView.value) {
    return props.src
  }
  return props.placeholder || ''
})

// Intersection Observer 实例
let observer: IntersectionObserver | null = null

// 图片加载成功
const onImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}

// 图片加载失败
const onImageError = () => {
  imageLoaded.value = false
  imageError.value = true
}

// 初始化 Intersection Observer
const initObserver = () => {
  if (!('IntersectionObserver' in window)) {
    // 不支持 IntersectionObserver 的浏览器直接加载
    inView.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inView.value = true
          // 开始加载后就不需要继续观察了
          if (observer) {
            observer.disconnect()
          }
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: '50px'
    }
  )

  // 开始观察容器元素
  const container = imageRef.value?.parentElement
  if (container) {
    observer.observe(container)
  }
}

onMounted(() => {
  initObserver()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.lazy-image-container {
  @apply relative overflow-hidden;
}

.placeholder,
.error-placeholder {
  @apply absolute inset-0;
}

.placeholder-content,
.error-content {
  @apply flex flex-col items-center justify-center h-full;
}

.placeholder {
  @apply bg-gray-100;
}

.error-placeholder {
  @apply bg-gray-50;
}

/* 图片淡入动画 */
img {
  @apply transition-opacity duration-300;
  opacity: 0;
}

img[src] {
  opacity: 1;
}

/* 响应式处理 */
@media (max-width: 640px) {
  .placeholder-content svg,
  .error-content svg {
    @apply w-6 h-6;
  }
  
  .placeholder-content span,
  .error-content span {
    @apply text-xs;
  }
}
</style>

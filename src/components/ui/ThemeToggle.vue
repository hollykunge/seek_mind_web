<template>
  <div class="relative">
    <!-- 简单切换按钮 -->
    <button
      v-if="!showDropdown"
      @click="themeStore.toggleTheme()"
      class="theme-toggle-btn"
      :aria-label="`当前主题: ${themeStore.getThemeLabel()}，点击切换`"
    >
      <transition name="icon-fade" mode="out-in">
        <SunIcon v-if="currentIconType === 'sun'" class="w-5 h-5" />
        <MoonIcon v-else-if="currentIconType === 'moon'" class="w-5 h-5" />
        <ComputerDesktopIcon v-else class="w-5 h-5" />
      </transition>
    </button>

    <!-- 下拉菜单切换 -->
    <div v-else class="relative">
      <button
        @click="isDropdownOpen = !isDropdownOpen"
        @blur="handleBlur"
        class="theme-toggle-btn"
        :aria-label="`当前主题: ${themeStore.getThemeLabel()}，点击选择主题`"
        :aria-expanded="isDropdownOpen"
      >
        <SunIcon v-if="currentIconType === 'sun'" class="w-5 h-5" />
        <MoonIcon v-else-if="currentIconType === 'moon'" class="w-5 h-5" />
        <ComputerDesktopIcon v-else class="w-5 h-5" />
        <ChevronDownIcon
          class="w-3 h-3 ml-1 transition-transform duration-200"
          :class="{ 'rotate-180': isDropdownOpen }"
        />
      </button>

      <!-- 下拉菜单 -->
      <transition name="dropdown">
        <div v-if="isDropdownOpen" class="dropdown-menu" @click="isDropdownOpen = false">
          <button
            v-for="option in themeOptions"
            :key="option.value"
            @click="themeStore.setTheme(option.value)"
            class="dropdown-item"
            :class="{ active: themeStore.theme === option.value }"
          >
            <component :is="option.icon" class="w-4 h-4" />
            <span>{{ option.label }}</span>
            <CheckIcon
              v-if="themeStore.theme === option.value"
              class="w-4 h-4 text-primary-500 dark:text-primary-400"
            />
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Theme } from '@/stores/theme'
import { useThemeStore } from '@/stores/theme'
import {
  CheckIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/vue/24/outline'
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Props {
  showDropdown?: boolean
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  showDropdown: false,
  size: 'md',
})

const themeStore = useThemeStore()
const isDropdownOpen = ref(false)

// 主题选项
const themeOptions = [
  { value: 'light' as Theme, label: '浅色模式', icon: SunIcon },
  { value: 'dark' as Theme, label: '深色模式', icon: MoonIcon },
  { value: 'system' as Theme, label: '跟随系统', icon: ComputerDesktopIcon },
]

// 当前图标类型
const currentIconType = computed(() => {
  const iconName = themeStore.getThemeIcon()
  switch (iconName) {
    case 'sun':
      return 'sun'
    case 'moon':
      return 'moon'
    case 'computer':
      return 'computer'
    default:
      return 'sun'
  }
})

// 处理下拉菜单失焦
const handleBlur = (event: FocusEvent) => {
  // 延迟关闭，允许点击菜单项
  setTimeout(() => {
    if (!event.relatedTarget || !(event.relatedTarget as Element).closest('.dropdown-menu')) {
      isDropdownOpen.value = false
    }
  }, 150)
}

// 键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.theme-toggle-btn {
  @apply flex items-center justify-center p-2 rounded-xl transition-all duration-200;
  @apply text-gray-600 hover:text-gray-900 hover:bg-gray-100;
  @apply dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  @apply dark:focus:ring-offset-gray-800;
}

.dropdown-menu {
  @apply absolute right-0 top-full mt-2 w-48 py-2 bg-white rounded-xl shadow-strong border border-gray-200;
  @apply dark:bg-gray-800 dark:border-gray-600;
  @apply z-50;
}

.dropdown-item {
  @apply w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700;
  @apply hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700;
  @apply transition-colors duration-150 font-medium;
}

.dropdown-item.active {
  @apply bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300;
}

/* 过渡动画 */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.2s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
  transform-origin: top right;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
</style>

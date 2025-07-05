<template>
  <header
    class="glass sticky top-0 z-50 transition-all duration-300"
    :class="{ 'shadow-lg': isScrolled }"
  >
    <div class="container-max section-padding">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-1 touch-target group">
          <div
            class="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
          >
            <img src="@/assets/logo.svg" alt="索智AI Logo" class="w-12 h-12 object-contain" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-gray-900 dark:text-white">索智AI</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 leading-none">SeekMind</span>
          </div>
        </router-link>

        <!-- 右侧导航区域 -->
        <div class="flex items-center space-x-4">
          <!-- 桌面端导航菜单 -->
          <nav class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="nav-link" active-class="active"> 首页 </router-link>
            <a href="#features" class="nav-link" @click="scrollToSection('features')"> 功能特性 </a>
            <a href="#download" class="nav-link" @click="scrollToSection('download')"> 下载APP </a>
            <a href="#contact" class="nav-link" @click="scrollToSection('contact')"> 联系我们 </a>
          </nav>

          <!-- 主题切换按钮 -->
          <ThemeToggle />

          <!-- 移动端菜单按钮 -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden touch-target p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-200"
            :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'"
            :aria-expanded="isMobileMenuOpen"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden py-6 border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <nav class="flex flex-col space-y-2">
            <router-link
              to="/"
              class="nav-mobile-item"
              active-class="active"
              @click="closeMobileMenu"
            >
              <HomeIcon class="w-5 h-5" />
              <span>首页</span>
            </router-link>
            <a
              href="#features"
              class="nav-mobile-item"
              @click="
                () => {
                  scrollToSection('features')
                  closeMobileMenu()
                }
              "
            >
              <StarIcon class="w-5 h-5" />
              <span>功能特性</span>
            </a>
            <a
              href="#download"
              class="nav-mobile-item"
              @click="
                () => {
                  scrollToSection('download')
                  closeMobileMenu()
                }
              "
            >
              <ArrowDownTrayIcon class="w-5 h-5" />
              <span>下载APP</span>
            </a>
            <a
              href="#contact"
              class="nav-mobile-item"
              @click="
                () => {
                  scrollToSection('contact')
                  closeMobileMenu()
                }
              "
            >
              <ChatBubbleLeftRightIcon class="w-5 h-5" />
              <span>联系我们</span>
            </a>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import {
  ArrowDownTrayIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted, ref } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-mobile-item {
  @apply flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-xl transition-all duration-200 font-medium;
}

.nav-mobile-item.active {
  @apply text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-semibold;
}
</style>

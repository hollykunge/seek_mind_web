<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-max section-padding">
      <div class="flex items-center justify-between h-14 sm:h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 touch-target">
          <div
            class="w-7 h-7 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-lg sm:text-xl font-bold text-gray-900">SeekMind</span>
        </router-link>

        <!-- 导航菜单 -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            active-class="text-primary-600 font-semibold"
          >
            首页
          </router-link>
          <a
            href="#features"
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            @click="scrollToSection('features')"
          >
            功能特性
          </a>
          <a
            href="#download"
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            @click="scrollToSection('download')"
          >
            下载APP
          </a>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden touch-target p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'"
          :aria-expanded="isMobileMenuOpen"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 animate-slide-up">
        <nav class="flex flex-col space-y-1">
          <router-link
            to="/"
            class="touch-target px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            active-class="text-primary-600 font-semibold bg-primary-50"
            @click="closeMobileMenu"
          >
            首页
          </router-link>
          <a
            href="#features"
            class="touch-target px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            @click="
              () => {
                scrollToSection('features')
                closeMobileMenu()
              }
            "
          >
            功能特性
          </a>
          <a
            href="#download"
            class="touch-target px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            @click="
              () => {
                scrollToSection('download')
                closeMobileMenu()
              }
            "
          >
            下载APP
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

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
</script>

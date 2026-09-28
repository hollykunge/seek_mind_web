<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
const route = useRoute()
const isHome = computed(() => route.name === 'home')
const menuOpen = ref(false)
const scrolled = ref(false)
const links = [
  { id: 'memories', label: '了解你' },
  { id: 'proactive', label: '启发你' },
  { id: 'capabilities', label: '功能特性' },
  { id: 'use-cases', label: '使用场景' },
]
const onScroll = () => {
  scrolled.value = window.scrollY > 32
}
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') menuOpen.value = false
}
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="portal-header"
    :class="{ 'is-scrolled': scrolled, 'is-home': isHome, 'menu-open': menuOpen }"
  >
    <div class="header-inner">
      <RouterLink to="/" class="portal-brand" aria-label="索智AI首页" @click="menuOpen = false">
        <img src="@/assets/logo.svg" alt="" width="32" height="32" />
        <span>SeekMind<span class="brand-dot">:</span></span>
      </RouterLink>
      <nav class="desktop-navigation" aria-label="主导航">
        <RouterLink v-for="link in links" :key="link.id" :to="{ path: '/', hash: `#${link.id}` }">{{
          link.label
        }}</RouterLink>
      </nav>
      <div class="header-actions">
        <ThemeToggle v-if="!isHome" />
        <RouterLink class="contact-link" to="/#contact">联系我们</RouterLink>
        <RouterLink class="header-download" to="/#download" @click="menuOpen = false"
          >下载 APP</RouterLink
        >
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          :aria-label="menuOpen ? '关闭菜单' : '打开菜单'"
          @click="menuOpen = !menuOpen"
        >
          <XMarkIcon v-if="menuOpen" /><Bars3Icon v-else />
        </button>
      </div>
    </div>
    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-navigation" aria-label="移动端导航">
      <RouterLink
        v-for="link in links"
        :key="link.id"
        :to="{ path: '/', hash: `#${link.id}` }"
        @click="menuOpen = false"
        >{{ link.label }}</RouterLink
      >
      <RouterLink to="/#contact" @click="menuOpen = false">联系我们</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.portal-header {
  position: sticky;
  top: 16px;
  z-index: 50;
  margin: 16px 32px 0;
  color: #252826;
  font-family: Figtree, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  border-radius: 30px;
  transition:
    background 0.3s,
    box-shadow 0.3s;
}
.portal-header.is-home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 56px;
  padding: 8px 20px;
  max-width: 1440px;
  margin: auto;
}
.is-scrolled,
.menu-open {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 24px #18232909;
}
.portal-brand {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.8px;
  color: inherit;
  text-decoration: none;
}
.portal-brand img {
  width: 32px;
  height: 32px;
}
.brand-dot {
  margin-left: 2px;
}
.desktop-navigation {
  display: flex;
  gap: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.desktop-navigation a,
.contact-link {
  color: #656967;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;
}
.desktop-navigation a:hover,
.contact-link:hover {
  color: #121715;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.header-download {
  white-space: nowrap;
  background: linear-gradient(#252826, #343835);
  padding: 9px 21px;
  border-radius: 24px;
  color: white;
  font-size: 14px;
  text-decoration: none;
  box-shadow: inset 0 1px 2px #ffffff24;
  transition: transform 0.2s;
}
.header-download:hover {
  transform: translateY(-2px);
}
.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  padding: 8px;
  color: inherit;
}
.menu-toggle svg {
  width: 22px;
  height: 22px;
}
.mobile-navigation {
  display: grid;
  gap: 4px;
  padding: 10px 20px 20px;
}
.mobile-navigation a {
  color: #4a514d;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 15px;
}
.mobile-navigation a:hover {
  background: #eff3f1;
}
@media (max-width: 1000px) {
  .desktop-navigation {
    gap: 18px;
  }
  .contact-link {
    display: none;
  }
}
@media (max-width: 760px) {
  .portal-header {
    margin: 14px 14px 0;
    background: #ffffffbf;
    backdrop-filter: blur(20px);
  }
  .header-inner {
    gap: 8px;
    padding: 6px 10px 6px 16px;
    min-height: 52px;
  }
  .portal-brand {
    font-size: 21px;
  }
  .portal-brand img {
    width: 27px;
    height: 27px;
  }
  .desktop-navigation {
    display: none;
  }
  .header-actions {
    gap: 4px;
  }
  .header-download {
    font-size: 12px;
    padding: 9px 14px;
  }
  .menu-toggle {
    display: block;
  }
}
@media (max-width: 360px) {
  .header-inner {
    padding-inline: 12px 8px;
    gap: 6px;
  }
  .portal-brand {
    font-size: 19px;
    gap: 5px;
  }
  .portal-brand img {
    width: 24px;
    height: 24px;
  }
  .header-download {
    padding-inline: 12px;
  }
  .portal-header:not(.is-home) .portal-brand img {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>

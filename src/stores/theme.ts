import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export const useThemeStore = defineStore('theme', () => {
  // 状态
  const theme = ref<Theme>('system')
  const isDark = ref(false)

  // 获取系统主题偏好
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  // 应用主题到DOM
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    
    if (newTheme === 'system') {
      const systemTheme = getSystemTheme()
      isDark.value = systemTheme === 'dark'
    } else {
      isDark.value = newTheme === 'dark'
    }

    // 更新DOM类名
    if (isDark.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // 更新meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark.value ? '#1f2937' : '#2563eb')
    }
  }

  // 设置主题
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    applyTheme(newTheme)
    
    // 保存到localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  // 切换主题
  const toggleTheme = () => {
    if (theme.value === 'light') {
      setTheme('dark')
    } else if (theme.value === 'dark') {
      setTheme('light')
    } else {
      // 如果当前是system，根据当前实际显示的主题切换
      setTheme(isDark.value ? 'light' : 'dark')
    }
  }

  // 初始化主题
  const initTheme = () => {
    if (typeof window === 'undefined') return

    // 从localStorage读取保存的主题
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    } else {
      theme.value = 'system'
    }

    applyTheme(theme.value)

    // 监听系统主题变化
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        if (theme.value === 'system') {
          applyTheme('system')
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
      
      // 返回清理函数
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }

  // 监听主题变化
  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  // 获取主题图标
  const getThemeIcon = () => {
    switch (theme.value) {
      case 'light':
        return 'sun'
      case 'dark':
        return 'moon'
      case 'system':
        return 'computer'
      default:
        return 'sun'
    }
  }

  // 获取主题标签
  const getThemeLabel = () => {
    switch (theme.value) {
      case 'light':
        return '浅色模式'
      case 'dark':
        return '深色模式'
      case 'system':
        return '跟随系统'
      default:
        return '浅色模式'
    }
  }

  return {
    // 状态
    theme,
    isDark,
    
    // 方法
    setTheme,
    toggleTheme,
    initTheme,
    getThemeIcon,
    getThemeLabel,
    getSystemTheme
  }
})

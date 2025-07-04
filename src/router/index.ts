import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'SeekMind - 智能思维助手',
        description: '一款革命性的智能思维助手APP，帮助您提升思维能力，激发创造力',
      },
    },
    {
      path: '/share/:id?',
      name: 'share',
      component: () => import('../views/ShareView.vue'),
      meta: {
        title: '内容分享 - SeekMind',
        description: '分享精彩内容，探索无限可能',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// 路由守卫，用于设置页面标题和meta信息
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }

  // 设置meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description as string)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = to.meta.description as string
      document.getElementsByTagName('head')[0].appendChild(meta)
    }
  }

  next()
})

export default router

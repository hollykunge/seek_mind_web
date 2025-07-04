<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import DownloadButton from '@/components/ui/DownloadButton.vue'
import SocialShare from '@/components/ui/SocialShare.vue'

const route = useRoute()
const router = useRouter()

// 响应式数据
const isLoading = ref(true)
const content = ref<any>(null)
const error = ref<string | null>(null)

// 获取内容ID
const contentId = computed(() => route.params.id as string)

// 模拟内容数据
const mockContents = {
  '1': {
    id: '1',
    title: '提升逻辑思维的5个实用技巧',
    description:
      '通过这些简单而有效的方法，您可以显著提升自己的逻辑思维能力，让思考更加清晰有条理。',
    content: `
      <h2>1. 学会分解复杂问题</h2>
      <p>当面对复杂问题时，不要试图一次性解决所有问题。将大问题分解成若干个小问题，逐一解决。这样不仅能降低问题的复杂度，还能让思路更加清晰。</p>
      
      <h2>2. 使用逻辑框架</h2>
      <p>掌握一些基本的逻辑框架，如MECE原则（相互独立，完全穷尽）、5W1H分析法等，可以帮助您更系统地思考问题。</p>
      
      <h2>3. 培养质疑精神</h2>
      <p>对任何信息都保持适度的质疑态度，问自己"这个结论是如何得出的？"、"有没有其他可能的解释？"等问题。</p>
      
      <h2>4. 练习逻辑推理</h2>
      <p>定期进行逻辑推理练习，如数独、逻辑谜题等，可以有效锻炼您的逻辑思维能力。</p>
      
      <h2>5. 学会归纳总结</h2>
      <p>在学习或工作中，要善于从具体事例中归纳出一般规律，这是提升逻辑思维的重要方法。</p>
    `,
    author: '思维导师',
    publishDate: '2024-01-15',
    readTime: '5分钟',
    tags: ['逻辑思维', '思维技巧', '认知提升'],
    image: '/images/logic-thinking.jpg',
  },
  '2': {
    id: '2',
    title: '创造性思维训练：突破思维定势',
    description: '了解如何突破传统思维模式，激发创新灵感，让您的创造力得到充分释放。',
    content: `
      <h2>什么是思维定势？</h2>
      <p>思维定势是指人们在思考问题时，习惯性地按照固定的模式或方向进行思考，难以跳出既有的框架。</p>
      
      <h2>突破思维定势的方法</h2>
      <h3>1. 逆向思维</h3>
      <p>尝试从相反的角度思考问题，问自己"如果反过来会怎样？"</p>
      
      <h3>2. 联想思维</h3>
      <p>通过自由联想，将看似无关的事物联系起来，往往能产生意想不到的创意。</p>
      
      <h3>3. 换位思考</h3>
      <p>站在不同的角度和立场思考同一个问题，可以获得全新的视角。</p>
    `,
    author: '创新专家',
    publishDate: '2024-01-20',
    readTime: '7分钟',
    tags: ['创造性思维', '创新', '思维突破'],
    image: '/images/creative-thinking.jpg',
  },
}

// 获取内容数据
const fetchContent = async () => {
  try {
    isLoading.value = true
    error.value = null

    // 模拟API调用延迟
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (contentId.value && mockContents[contentId.value as keyof typeof mockContents]) {
      content.value = mockContents[contentId.value as keyof typeof mockContents]
    } else {
      // 如果没有指定ID或ID不存在，显示默认内容
      content.value = {
        id: 'default',
        title: '欢迎来到SeekMind内容分享',
        description: '这里是SeekMind的内容分享页面，您可以在这里发现更多有趣的思维训练内容。',
        content: `
          <h2>SeekMind - 您的智能思维伙伴</h2>
          <p>SeekMind致力于帮助用户提升思维能力，我们提供：</p>
          <ul>
            <li>科学的思维训练方法</li>
            <li>个性化的学习路径</li>
            <li>丰富的思维练习</li>
            <li>活跃的学习社区</li>
          </ul>
          <p>立即下载APP，开始您的思维提升之旅！</p>
        `,
        author: 'SeekMind团队',
        publishDate: '2024-01-01',
        readTime: '2分钟',
        tags: ['SeekMind', '思维训练', 'APP介绍'],
        image: '/images/seekmind-intro.jpg',
      }
    }
  } catch (err) {
    error.value = '加载内容失败，请稍后重试'
    console.error('获取内容失败:', err)
  } finally {
    isLoading.value = false
  }
}

// 分享功能
const shareContent = () => {
  if (navigator.share && content.value) {
    navigator
      .share({
        title: content.value.title,
        text: content.value.description,
        url: window.location.href,
      })
      .catch((err) => console.log('分享失败:', err))
  } else {
    // 降级方案：复制链接到剪贴板
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert('链接已复制到剪贴板')
      })
      .catch(() => {
        alert('分享功能暂不可用')
      })
  }
}

// 返回主页
const goHome = () => {
  router.push('/')
}

// 页面加载时获取内容
onMounted(() => {
  fetchContent()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 头部导航 -->
    <AppHeader />

    <!-- 主要内容 -->
    <main class="py-8">
      <div class="container-max section-padding">
        <!-- 加载状态 -->
        <div v-if="isLoading" class="text-center py-20">
          <div
            class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"
          ></div>
          <p class="mt-4 text-gray-600">正在加载内容...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="text-center py-20">
          <div class="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">加载失败</h2>
          <p class="text-gray-600 mb-8">{{ error }}</p>
          <button @click="fetchContent" class="btn-primary">重试</button>
        </div>

        <!-- 内容展示 -->
        <div v-else-if="content" class="max-w-4xl mx-auto">
          <!-- 内容头部 -->
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div class="flex-1">
                <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {{ content.title }}
                </h1>
                <p class="text-xl text-gray-600 mb-6">
                  {{ content.description }}
                </p>

                <!-- 元信息 -->
                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {{ content.author }}
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {{ content.publishDate }}
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    阅读时间 {{ content.readTime }}
                  </div>
                </div>

                <!-- 标签 -->
                <div class="flex flex-wrap gap-2 mt-4">
                  <span
                    v-for="tag in content.tags"
                    :key="tag"
                    class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- 操作按钮 -->
              <div class="flex flex-col gap-3 mt-6 lg:mt-0 lg:ml-8">
                <button @click="shareContent" class="btn-secondary">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  分享内容
                </button>
                <button @click="goHome" class="btn-primary">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  返回主页
                </button>
              </div>
            </div>
          </div>

          <!-- 内容正文 -->
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div class="prose prose-lg max-w-none" v-html="content.content"></div>

            <!-- 社交分享 -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <SocialShare
                :title="content.title"
                :description="content.description"
                :show-title="true"
              />
            </div>
          </div>

          <!-- 下载引导 -->
          <div
            class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center"
          >
            <h3 class="text-2xl font-bold mb-4">想要更多精彩内容？</h3>
            <p class="text-lg mb-6 opacity-90">
              下载SeekMind APP，获取更多思维训练内容和个性化学习体验
            </p>
            <DownloadButton />
          </div>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>

<style scoped>
/* 内容样式 */
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-6 mb-3;
}

.prose p {
  @apply text-gray-700 leading-relaxed mb-4;
}

.prose ul {
  @apply list-disc list-inside text-gray-700 mb-4;
}

.prose li {
  @apply mb-2;
}
</style>

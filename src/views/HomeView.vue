<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import DownloadButton from '@/components/ui/DownloadButton.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import { ref, onMounted } from 'vue'

// 响应式数据
const isVisible = ref(false)

// 功能特性数据
const features = [
  {
    icon: 'brain',
    title: '智能思维训练',
    description:
      '基于认知科学的思维训练体系，帮助您系统性提升逻辑思维、创造性思维和批判性思维能力。',
  },
  {
    icon: 'lightbulb',
    title: '创意激发引擎',
    description: '独创的创意激发算法，结合多种思维技巧，帮助您在工作和生活中产生更多创新想法。',
  },
  {
    icon: 'chart',
    title: '个性化学习路径',
    description: 'AI智能分析您的思维特点，定制专属学习计划，让每一次练习都更有针对性和效果。',
  },
  {
    icon: 'users',
    title: '思维社区交流',
    description: '与全球思维爱好者交流心得，分享思维成果，在互动中不断提升自己的思维水平。',
  },
  {
    icon: 'shield',
    title: '科学验证方法',
    description: '所有训练方法均基于最新的脑科学研究成果，确保训练的科学性和有效性。',
  },
  {
    icon: 'rocket',
    title: '快速能力提升',
    description: '经过优化的训练流程，让您在短时间内感受到思维能力的显著提升和改变。',
  },
]

// 用户评价数据
const testimonials = [
  {
    name: '张小明',
    role: '产品经理',
    content: 'SeekMind让我的思维更加清晰有条理，工作效率提升了30%，强烈推荐给所有职场人士！',
    avatar: '👨‍💼',
  },
  {
    name: '李小红',
    role: '创业者',
    content: '使用SeekMind三个月，我的创新思维得到了极大提升，现在能够更快地找到解决问题的方法。',
    avatar: '👩‍💼',
  },
  {
    name: '王小强',
    role: '学生',
    content: '作为一名学生，SeekMind帮助我提高了学习效率，思考问题的角度也更加多元化了。',
    avatar: '👨‍🎓',
  },
]

// 页面加载动画
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- 头部导航 -->
    <AppHeader />

    <!-- 主要内容 -->
    <main>
      <!-- 英雄区域 -->
      <section class="bg-gradient-to-br from-primary-50 to-blue-50 py-20 lg:py-32">
        <div class="container-max section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- 左侧内容 -->
            <div class="text-center lg:text-left" :class="{ 'animate-slide-up': isVisible }">
              <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                开启您的
                <span class="text-primary-600">智慧人生</span>
                新篇章
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                SeekMind是一款革命性的智能思维助手APP，运用前沿的认知科学理论，
                帮助您系统性提升思维能力，激发无限创造力，成就更好的自己。
              </p>
              <div class="mb-8">
                <DownloadButton />
              </div>
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-500"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  免费下载使用
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  科学训练方法
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  个性化定制
                </div>
              </div>
            </div>

            <!-- 右侧图片/演示 -->
            <div
              class="flex justify-center lg:justify-end"
              :class="{ 'animate-fade-in': isVisible }"
            >
              <div class="relative">
                <!-- 手机模型 -->
                <div
                  class="w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                  <div class="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <!-- 模拟APP界面 -->
                    <div class="bg-primary-600 h-20 flex items-center justify-center">
                      <span class="text-white font-bold text-lg">SeekMind</span>
                    </div>
                    <div class="p-4 space-y-4">
                      <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div class="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                      <div class="h-20 bg-primary-100 rounded-lg"></div>
                      <div class="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      <div class="h-16 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <!-- 装饰元素 -->
                <div
                  class="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow"
                ></div>
                <div
                  class="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce-slow"
                  style="animation-delay: 0.5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 功能特性区域 -->
      <section id="features" class="py-20 bg-white">
        <div class="container-max section-padding">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              强大功能，助您思维升级
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              SeekMind集成了多种先进的思维训练技术，为您提供全方位的智能思维提升解决方案
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              v-for="feature in features"
              :key="feature.title"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
            />
          </div>
        </div>
      </section>

      <!-- 产品截图展示区域 -->
      <section class="py-20 bg-gray-50">
        <div class="container-max section-padding">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">直观体验，一目了然</h2>
            <p class="text-xl text-gray-600">精心设计的用户界面，让思维训练变得简单有趣</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 截图1 -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div class="aspect-w-9 aspect-h-16 bg-gradient-to-br from-primary-100 to-primary-200">
                <div class="flex items-center justify-center">
                  <div class="text-center p-8">
                    <div
                      class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">思维训练</h3>
                    <p class="text-gray-600 text-sm">个性化训练计划</p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-semibold text-gray-900 mb-2">智能训练模块</h4>
                <p class="text-gray-600 text-sm">根据您的能力水平，智能推荐最适合的训练内容</p>
              </div>
            </div>

            <!-- 截图2 -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div class="aspect-w-9 aspect-h-16 bg-gradient-to-br from-green-100 to-green-200">
                <div class="flex items-center justify-center">
                  <div class="text-center p-8">
                    <div
                      class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">进度追踪</h3>
                    <p class="text-gray-600 text-sm">可视化学习进度</p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-semibold text-gray-900 mb-2">学习分析</h4>
                <p class="text-gray-600 text-sm">详细的学习报告，帮您了解自己的进步情况</p>
              </div>
            </div>

            <!-- 截图3 -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div class="aspect-w-9 aspect-h-16 bg-gradient-to-br from-purple-100 to-purple-200">
                <div class="flex items-center justify-center">
                  <div class="text-center p-8">
                    <div
                      class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                        />
                      </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">社区交流</h3>
                    <p class="text-gray-600 text-sm">与他人分享心得</p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-semibold text-gray-900 mb-2">思维社区</h4>
                <p class="text-gray-600 text-sm">与全球用户交流思维技巧，共同成长</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 用户评价区域 -->
      <section class="py-20 bg-white">
        <div class="container-max section-padding">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">用户真实反馈</h2>
            <p class="text-xl text-gray-600">来自全球用户的真实使用体验分享</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl mr-4"
                >
                  {{ testimonial.avatar }}
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
              <p class="text-gray-700 italic">"{{ testimonial.content }}"</p>
              <div class="flex text-yellow-400 mt-4">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 下载区域 -->
      <section
        id="download"
        class="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
      >
        <div class="container-max section-padding text-center">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">立即开始您的思维提升之旅</h2>
          <p class="text-xl mb-8 opacity-90">免费下载SeekMind，体验智能思维训练的魅力</p>
          <DownloadButton :show-q-r-code="true" />

          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold mb-2">100万+</div>
              <div class="opacity-80">全球用户</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">4.8分</div>
              <div class="opacity-80">用户评分</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">50+</div>
              <div class="opacity-80">训练模块</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>

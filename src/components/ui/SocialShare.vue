<template>
  <div class="social-share">
    <h3 v-if="showTitle" class="text-lg font-semibold text-gray-900 mb-4">分享到</h3>
    
    <div class="flex flex-wrap gap-3">
      <!-- 微信分享 -->
      <button
        @click="shareToWechat"
        class="share-btn bg-green-500 hover:bg-green-600 text-white"
        :aria-label="'分享到微信'"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.181-.556c1.52-1.186 2.506-2.952 2.506-4.992-.001-3.404-2.998-6.17-6.069-5.747zm-2.638 3.228c.523 0 .947.433.947.968 0 .535-.424.968-.947.968-.523 0-.947-.433-.947-.968 0-.535.424-.968.947-.968zm4.69 0c.523 0 .947.433.947.968 0 .535-.424.968-.947.968-.523 0-.947-.433-.947-.968 0-.535.424-.968.947-.968z"/>
        </svg>
        <span class="ml-2">微信</span>
      </button>

      <!-- 微博分享 -->
      <button
        @click="shareToWeibo"
        class="share-btn bg-red-500 hover:bg-red-600 text-white"
        :aria-label="'分享到微博'"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.31 8.17c-2.73-.13-5.12 1.66-5.33 4.04-.22 2.4 1.85 4.48 4.61 4.65 2.75.17 5.15-1.62 5.37-4.02.21-2.4-1.87-4.54-4.65-4.67zm-.14 7.28c-1.35.1-2.56-.7-2.69-1.79-.14-1.1.9-2.12 2.31-2.28 1.4-.16 2.62.64 2.75 1.8.13 1.15-.96 2.17-2.37 2.27zM20.5 5.72c-.39-.56-1.08-.84-1.54-.63-.21.1-.29.32-.21.49.08.17.29.21.47.1.26-.15.61-.02.78.29.17.31.1.65-.15.85-.21.17-.08.5.18.4.48-.18.68-.62.47-1.5zm-2.21.5c-.18-.26-.5-.4-.71-.31-.1.04-.13.15-.07.24.06.09.17.11.26.07.14-.06.32.01.4.16.08.15.05.31-.07.4-.1.08-.04.24.08.19.22-.09.32-.29.22-.75zm-1.37 1.27c-1.77-.83-4.25-.3-5.56 1.18-1.3 1.48-1.06 3.44.54 4.37 1.7.99 4.4.39 5.92-1.34 1.52-1.73 1.12-3.38-.9-4.21zm-2.03 5.42c-1.8 1.37-3.91 1.14-4.69-.52-.78-1.65.21-3.64 2.21-4.44 2.01-.8 4.07-.12 4.61 1.52.54 1.64-.33 2.07-2.13 3.44z"/>
        </svg>
        <span class="ml-2">微博</span>
      </button>

      <!-- QQ分享 -->
      <button
        @click="shareToQQ"
        class="share-btn bg-blue-500 hover:bg-blue-600 text-white"
        :aria-label="'分享到QQ'"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
        </svg>
        <span class="ml-2">QQ</span>
      </button>

      <!-- 复制链接 -->
      <button
        @click="copyLink"
        class="share-btn bg-gray-500 hover:bg-gray-600 text-white"
        :aria-label="'复制链接'"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        <span class="ml-2">复制链接</span>
      </button>
    </div>

    <!-- 分享成功提示 -->
    <div
      v-if="showSuccessMessage"
      class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in"
    >
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title?: string
  description?: string
  url?: string
  showTitle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'SeekMind - 智能思维助手APP',
  description: '一款革命性的智能思维助手APP，帮助您提升思维能力，激发创造力',
  url: '',
  showTitle: true
})

const showSuccessMessage = ref(false)
const successMessage = ref('')

// 获取当前页面URL
const getCurrentUrl = () => {
  return props.url || window.location.href
}

// 显示成功消息
const showSuccess = (message: string) => {
  successMessage.value = message
  showSuccessMessage.value = true
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

// 微信分享（显示二维码或提示）
const shareToWechat = () => {
  // 由于微信分享需要特殊处理，这里提供复制链接的降级方案
  copyLink()
  showSuccess('链接已复制，请在微信中粘贴分享')
}

// 微博分享
const shareToWeibo = () => {
  const url = getCurrentUrl()
  const text = `${props.title} - ${props.description}`
  const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`
  window.open(weiboUrl, '_blank', 'width=600,height=400')
}

// QQ分享
const shareToQQ = () => {
  const url = getCurrentUrl()
  const qqUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(props.title)}&summary=${encodeURIComponent(props.description)}`
  window.open(qqUrl, '_blank', 'width=600,height=400')
}

// 复制链接
const copyLink = async () => {
  try {
    const url = getCurrentUrl()
    await navigator.clipboard.writeText(url)
    showSuccess('链接已复制到剪贴板')
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = getCurrentUrl()
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    showSuccess('链接已复制到剪贴板')
  }
}
</script>

<style scoped>
.share-btn {
  @apply flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg;
}

.social-share {
  @apply max-w-md;
}

@media (max-width: 640px) {
  .share-btn {
    @apply flex-1 justify-center;
  }
  
  .social-share .flex {
    @apply grid grid-cols-2 gap-2;
  }
}
</style>

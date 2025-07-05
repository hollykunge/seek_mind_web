<template>
  <div class="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
    <!-- iOS下载按钮 -->
    <a
      :href="iosUrl"
      class="download-btn ios-btn group w-full xs:w-auto"
      @click="trackDownload('ios')"
    >
      <div class="flex items-center justify-center space-x-2 sm:space-x-3">
        <svg class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
          />
        </svg>
        <div class="text-left">
          <div class="text-xs text-gray-600 group-hover:text-gray-700">Download on the</div>
          <div class="text-sm sm:text-lg font-semibold -mt-1">App Store</div>
        </div>
      </div>
    </a>

    <!-- Android下载按钮 -->
    <a
      :href="androidUrl"
      class="download-btn android-btn group w-full xs:w-auto"
      @click="trackDownload('android')"
    >
      <div class="flex items-center justify-center space-x-2 sm:space-x-3">
        <svg class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5046C15.5889 8.2231 13.8588 7.8098 12 7.8098s-3.5889.4133-5.1879 1.0316L4.7898 5.3368a.4161.4161 0 00-.5972-.1518.416.416 0 00-.1518.5972L6.0381 9.3214C2.7477 10.9849 0.6 13.6686 0 16.9996h24c-.6 -3.331-2.7477-6.0147-6.0455-7.6782z"
          />
        </svg>
        <div class="text-left">
          <div class="text-xs text-gray-600 group-hover:text-gray-700">GET IT ON</div>
          <div class="text-sm sm:text-lg font-semibold -mt-1">Google Play</div>
        </div>
      </div>
    </a>
  </div>

  <!-- 二维码下载区域 -->
  <div v-if="showQRCode" class="mt-6 sm:mt-8 text-center">
    <p class="text-gray-600 mb-4 text-sm sm:text-base">扫描二维码下载</p>
    <div class="flex flex-col xs:flex-row justify-center items-center gap-6 sm:gap-8">
      <!-- iOS二维码 -->
      <div class="text-center">
        <div
          class="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2"
        >
          <svg
            class="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </div>
        <p class="text-xs sm:text-sm text-gray-500">iOS版本</p>
      </div>

      <!-- Android二维码 -->
      <div class="text-center">
        <div
          class="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2"
        >
          <svg
            class="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </div>
        <p class="text-xs sm:text-sm text-gray-500">Android版本</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  iosUrl?: string
  androidUrl?: string
  showQRCode?: boolean
}

withDefaults(defineProps<Props>(), {
  iosUrl: 'https://apps.apple.com/app/seekmind',
  androidUrl: 'https://play.google.com/store/apps/details?id=com.seekmind.app',
  showQRCode: false,
})

// 下载追踪
const trackDownload = (platform: 'ios' | 'android') => {
  // 这里可以添加下载统计逻辑
  console.log(`用户点击了${platform}下载按钮`)

  // 可以集成Google Analytics或其他统计工具
  if (typeof (window as any).gtag !== 'undefined') {
    ;(window as any).gtag('event', 'download_click', {
      platform: platform,
      event_category: 'app_download',
    })
  }
}
</script>

<style scoped>
.download-btn {
  @apply bg-gray-900 dark:bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl;
  min-width: 180px;
}

@media (min-width: 640px) {
  .download-btn {
    min-width: 220px;
    @apply px-8 py-4;
  }
}

.download-btn:hover {
  box-shadow:
    0 10px 25px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.ios-btn {
  @apply bg-gray-900 dark:bg-gray-800;
}

.ios-btn:hover {
  @apply bg-gray-800 dark:bg-gray-700;
}

.android-btn {
  @apply bg-gray-900 dark:bg-gray-800;
}

.android-btn:hover {
  @apply bg-gray-800 dark:bg-gray-700;
}

/* 增强二维码区域样式 */
.download-btn + div {
  @apply animate-fade-in;
}
</style>

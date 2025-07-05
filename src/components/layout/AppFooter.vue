<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-max section-padding py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 品牌信息 -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-9 h-9 flex items-center justify-center">
              <img src="@/assets/logo.svg" alt="索智AI Logo" class="w-9 h-9 object-contain" />
            </div>
            <div>
              <span class="text-xl font-bold">索智AI</span>
              <div class="text-xs text-gray-400">SeekMind</div>
            </div>
          </div>
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            索智AI是一款革命性的智能思维助手APP，致力于帮助用户提升思维能力，激发无限创造力，开启智慧人生新篇章。
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.23 5.924a8.212 8.212 0 0 1-2.357.646 4.115 4.115 0 0 0 1.804-2.27 8.221 8.221 0 0 1-2.606.996 4.103 4.103 0 0 0-6.993 3.743 11.647 11.647 0 0 1-8.457-4.287 4.103 4.103 0 0 0 1.27 5.477A4.072 4.072 0 0 1 3.04 9.13v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0 0 22.46 6c-.77.35-1.6.58-2.46.69a4.115 4.115 0 0 0 1.804-2.27"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
            >
              <ChatBubbleLeftRightIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">快速链接</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#features"
                class="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                />
                功能特性
              </a>
            </li>
            <li>
              <a
                href="#download"
                class="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                />
                下载APP
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                />
                联系我们
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
              >
                <ChevronRightIcon
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                />
                用户指南
              </a>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">联系我们</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="mailto:contact@seekmind.ai"
                class="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
              >
                <EnvelopeIcon class="w-4 h-4 mr-2 text-primary-400" />
                contact@seekmind.ai
              </a>
            </li>
            <li>
              <a
                href="tel:400-123-4567"
                class="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
              >
                <PhoneIcon class="w-4 h-4 mr-2 text-primary-400" />
                400-123-4567
              </a>
            </li>
            <li>
              <div class="text-gray-300 flex items-center">
                <MapPinIcon class="w-4 h-4 mr-2 text-primary-400" />
                北京市朝阳区
              </div>
            </li>
            <li>
              <div class="text-gray-300 flex items-center">
                <BuildingOfficeIcon class="w-4 h-4 mr-2 text-primary-400" />
                北京图存科技有限公司
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div
        class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <div class="text-gray-400 text-sm">
          <p class="mb-1">© 2024 北京图存科技有限公司. 保留所有权利。</p>
          <p>索智AI - 让思维更智慧</p>
        </div>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >隐私政策</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >服务条款</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >Cookie政策</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="card-feature group">
    <!-- 图标 -->
    <div class="flex justify-center mb-6">
      <div
        class="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110"
      >
        <div class="w-8 h-8 text-primary-500 dark:text-primary-400">
          <!-- 根据图标类型显示不同的图标 -->
          <img
            v-if="icon === 'brain'"
            src="@/assets/logo.svg"
            alt="索智AI"
            class="w-full h-full object-contain"
          />
          <SparklesIcon v-else-if="icon === 'lightbulb'" class="w-full h-full" />
          <ChartBarIcon v-else-if="icon === 'chart'" class="w-full h-full" />
          <UsersIcon v-else-if="icon === 'users'" class="w-full h-full" />
          <ShieldCheckIcon v-else-if="icon === 'shield'" class="w-full h-full" />
          <RocketLaunchIcon v-else-if="icon === 'rocket'" class="w-full h-full" />
          <!-- 默认图标 -->
          <SparklesIcon v-else class="w-full h-full" />
        </div>
      </div>
    </div>

    <!-- 标题 -->
    <h3
      class="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
    >
      {{ title }}
    </h3>

    <!-- 描述 -->
    <p class="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
      {{ description }}
    </p>

    <!-- 可选的额外内容 -->
    <div v-if="$slots.extra" class="mt-6">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

interface Props {
  title: string
  description: string
  icon: string
}

defineProps<Props>()
</script>

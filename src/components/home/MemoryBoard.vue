<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon, LightBulbIcon, BookOpenIcon, FlagIcon } from '@heroicons/vue/24/outline'
const active = ref(0)
const profiles = [
  {
    label: '创意探索者',
    title: '每一个灵感，都值得留下',
    image: '/images/creative-moodboard.jpg',
    imageAlt: '温暖的创意空间和设计灵感',
    notes: ['品牌创意方向', '产品设计灵感', '有趣的新发现'],
    goal: '让想法变成作品',
    tasks: ['整理灵感素材', '尝试新的视角', '记录今日想法'],
  },
  {
    label: '终身学习者',
    title: '把每一点进步，串成成长',
    image: '/images/quiet-workspace.jpg',
    imageAlt: '自然光下专注学习与创作的探索者',
    notes: ['我的阅读笔记', '新的知识连接', '待探索的问题'],
    goal: '每天学习一点',
    tasks: ['阅读一个章节', '练习逻辑推理', '回顾学习笔记'],
  },
  {
    label: '生活观察家',
    title: '从日常里，发现新的可能',
    image: '/images/weekend-hiking.png',
    imageAlt: '山间的户外徒步风景',
    notes: ['周末探索计划', '生活中的小灵感', '想尝试的新事物'],
    goal: '保持对生活的好奇',
    tasks: ['去户外走走', '记录一个发现', '分享新的想法'],
  },
]
</script>

<template>
  <div class="memory-board">
    <div class="memory-composition">
      <Transition name="memory" mode="out-in"
        ><img
          :key="active"
          class="memory-main-image"
          :src="profiles[active]!.image"
          :alt="profiles[active]!.imageAlt"
          loading="lazy"
          width="420"
          height="500"
      /></Transition>
      <div class="memory-float memory-notes">
        <span class="float-label lavender-label"><LightBulbIcon />灵感收藏</span>
        <ul>
          <li v-for="note in profiles[active]!.notes" :key="note">{{ note }}</li>
        </ul>
        <span class="float-meta">让想法，慢慢生长</span>
      </div>
      <div class="memory-float memory-todos">
        <span class="float-label rose-label"><CheckIcon />我的日常</span>
        <div v-for="(task, index) in profiles[active]!.tasks" :key="task">
          <span class="todo-dot" :class="{ checked: index === 0 }"
            ><CheckIcon v-if="index === 0" /></span
          ><span
            >{{ task }}<small>{{ ['09:00', '14:00', '20:00'][index] }}</small></span
          >
        </div>
      </div>
      <div class="memory-float memory-goal">
        <span class="float-label mint-label"><FlagIcon />成长目标</span><BookOpenIcon />
        <p>{{ profiles[active]!.goal }}</p>
        <span class="float-meta">每一小步，都算数</span>
      </div>
      <div class="memory-photo-caption">{{ profiles[active]!.title }}</div>
    </div>
    <div class="profile-picker" role="group" aria-label="切换探索场景">
      <button
        v-for="(profile, index) in profiles"
        :key="profile.label"
        :aria-pressed="active === index"
        :class="{ active: active === index }"
        @click="active = index"
      >
        <img :src="profile.image" alt="" loading="lazy" width="30" height="30" /><span>{{
          profile.label
        }}</span>
      </button>
    </div>
  </div>
</template>

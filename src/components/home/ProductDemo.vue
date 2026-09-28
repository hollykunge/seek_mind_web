<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import {
  ArrowUpIcon,
  CheckIcon,
  ChevronRightIcon,
  SparklesIcon,
  SunIcon,
  LightBulbIcon,
  ChartBarIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
} from '@heroicons/vue/24/outline'

const tabs = ['今天', '训练', '灵感', '成长']
const activeTab = ref(0)
const mobileChat = ref(true)
const selected = ref<string[]>([])
const message = ref('')
const response = ref('')
const lastQuestion = ref('')
const options = ['把复杂问题想清楚', '发现一个新的创意', '建立我的学习计划', '练习逻辑思维']
const completed = ref([false, true, false])
const completedCount = computed(() => completed.value.filter(Boolean).length)
const trainingCompleted = ref([false, true, false])
const trainingCompletedCount = computed(() => trainingCompleted.value.filter(Boolean).length)
const toggleOption = (option: string) => {
  selected.value = selected.value.includes(option)
    ? selected.value.filter((item) => item !== option)
    : [...selected.value, option]
}
const send = () => {
  const question = message.value.trim() || selected.value.join('、')
  if (!question) return
  lastQuestion.value = question
  if (/学习|计划/.test(question)) {
    response.value =
      '我们从一个小目标开始：每天留出 15 分钟，先回顾一个知识点，再用自己的话解释它。你可以在「训练」中试试今天的学习任务。'
    activeTab.value = 1
  } else if (/创意|灵感/.test(question)) {
    response.value =
      '试着换一个视角：如果去掉最习以为常的限制，这个问题还可以怎么解决？我为你准备了三个灵感方向，点击「灵感」就能看到。'
    activeTab.value = 2
  } else {
    response.value =
      '先把问题分成三步：明确你想达成的目标，列出已经知道的事实，再找出需要验证的假设。你可以从今天的「问题拆解」练习开始。'
    activeTab.value = 0
  }
  message.value = ''
}
const chooseTab = (index: number) => {
  activeTab.value = index
  mobileChat.value = false
}
const resetChat = () => {
  response.value = ''
  selected.value = []
  lastQuestion.value = ''
}
const onTabKey = async (event: KeyboardEvent, index: number) => {
  let target = index
  if (event.key === 'ArrowRight') target = (index + 1) % tabs.length
  else if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length
  else if (event.key === 'Home') target = 0
  else if (event.key === 'End') target = tabs.length - 1
  else return
  event.preventDefault()
  chooseTab(target)
  await nextTick()
  document.getElementById(`demo-tab-${target}`)?.focus()
}
</script>

<template>
  <div class="product-demo" aria-label="索智AI产品交互演示">
    <div class="mobile-demo-switch">
      <button :class="{ active: mobileChat }" :aria-pressed="mobileChat" @click="mobileChat = true">
        <ChatBubbleLeftRightIcon />对话</button
      ><button
        :class="{ active: !mobileChat }"
        :aria-pressed="!mobileChat"
        @click="mobileChat = false"
      >
        <SunIcon />我的一天
      </button>
    </div>
    <div class="demo-chat" :class="{ 'mobile-hidden': !mobileChat }">
      <div class="assistant-avatar"><img src="@/assets/logo.svg" alt="索智AI" /></div>
      <div class="assistant-status">
        <span>索智AI</span><span class="status-divider"></span><span>陪你开启新的思考</span
        ><ChevronRightIcon />
      </div>
      <div class="chat-scroll">
        <p class="chat-bubble">你好，我是索智AI。<br />每一个好想法，都从这里开始。</p>
        <p class="chat-bubble">从想法到行动，我陪你一起。<br />今天，想从哪件事开始？</p>
        <div v-if="!response" class="chat-bubble options-bubble">
          <h2>你希望索智AI帮你做些什么？</h2>
          <button
            v-for="option in options"
            :key="option"
            class="topic-option"
            :class="{ selected: selected.includes(option) }"
            :aria-pressed="selected.includes(option)"
            @click="toggleOption(option)"
          >
            <span>{{ option }}</span
            ><span class="option-check"><CheckIcon v-if="selected.includes(option)" /></span>
          </button>
        </div>
        <template v-else
          ><p class="chat-bubble user-bubble">{{ lastQuestion }}</p>
          <p class="chat-bubble response-bubble" role="status">{{ response }}</p>
          <button class="demo-reset" @click="resetChat">试试其他方向 <ChevronRightIcon /></button
        ></template>
      </div>
      <form class="demo-composer" @submit.prevent="send">
        <label for="demo-message" class="sr-only">告诉索智AI你想探索的问题</label>
        <input
          id="demo-message"
          v-model="message"
          placeholder="说说你想探索的事…"
          maxlength="300"
        />
        <button
          type="submit"
          aria-label="发送演示消息"
          :disabled="!message.trim() && !selected.length"
        >
          <ArrowUpIcon />
        </button>
      </form>
      <span class="demo-caption">产品交互演示 · 探索一种更好的思考方式</span>
    </div>
    <div class="demo-dashboard" :class="{ 'mobile-hidden': mobileChat }">
      <div class="dashboard-tabs" role="tablist" aria-label="产品演示内容">
        <button
          v-for="(tab, index) in tabs"
          :id="`demo-tab-${index}`"
          :key="tab"
          role="tab"
          :aria-selected="activeTab === index"
          :aria-controls="`demo-panel-${index}`"
          :tabindex="activeTab === index ? 0 : -1"
          :class="{ active: activeTab === index }"
          @click="chooseTab(index)"
          @keydown="onTabKey($event, index)"
        >
          {{ tab }}
        </button>
      </div>
      <div
        :id="`demo-panel-${activeTab}`"
        class="dashboard-content"
        role="tabpanel"
        :aria-labelledby="`demo-tab-${activeTab}`"
        tabindex="0"
      >
        <template v-if="activeTab === 0">
          <div class="daily-greeting">
            <SunIcon /><span>新的思考，从今天开始</span>
            <h2>早安，探索者</h2>
          </div>
          <article class="dashboard-card thinking-card">
            <h3><SparklesIcon />今日思维状态</h3>
            <div class="thinking-stats">
              <div>
                <span class="stat-icon mint"><LightBulbIcon /></span
                ><span>创意灵感<strong>保持好奇</strong></span>
              </div>
              <div>
                <span class="stat-icon lavender"><ChartBarIcon /></span
                ><span>专注时间<strong>15 分钟</strong></span>
              </div>
              <div>
                <span class="stat-icon sand"><BookOpenIcon /></span
                ><span>学习节奏<strong>每天一点</strong></span>
              </div>
              <div>
                <span class="stat-icon rose"><BoltIcon /></span
                ><span>思维成长<strong>持续探索</strong></span>
              </div>
            </div>
          </article>
          <article class="dashboard-card daily-task">
            <h3><CheckCircleIcon />把一个复杂问题，变简单</h3>
            <p>选一个正在困扰你的问题，试着拆解成三个可以行动的小步骤。</p>
            <div class="task-meta">
              <span><ClockIcon />建议用时 5 分钟</span><span>今日练习</span>
            </div>
            <div class="mini-progress">
              <span :style="{ width: `${(completedCount / 3) * 100}%` }"></span>
            </div>
            <label
              v-for="(task, index) in [
                '写下你真正想达成的目标',
                '列出已知事实和未知条件',
                '找到最小的下一步行动',
              ]"
              :key="task"
              class="task-check"
              ><input v-model="completed[index]" type="checkbox" /><span>{{ task }}</span></label
            >
          </article>
          <div class="dashboard-note">
            <LightBulbIcon />
            <p>不急着找到答案。<br /><strong>问对问题，就是一个很好的开始。</strong></p>
          </div>
        </template>
        <template v-else-if="activeTab === 1">
          <div class="daily-greeting">
            <AcademicCapIcon /><span>为你定制的学习节奏</span>
            <h2>每天一点，慢慢进步</h2>
          </div>
          <article class="dashboard-card">
            <h3><BookOpenIcon />今天的训练计划</h3>
            <p>从一个小练习开始，把思考变成日常习惯。</p>
            <label
              v-for="(task, index) in [
                '逻辑推理 · 分清事实与观点',
                '创意联想 · 找到三种新用途',
                '每日复盘 · 记录一个新发现',
              ]"
              :key="task"
              class="training-task"
              ><input v-model="trainingCompleted[index]" type="checkbox" /><span>{{ task }}</span
              ><small>5 min</small></label
            >
            <div class="mini-progress">
              <span :style="{ width: `${(trainingCompletedCount / 3) * 100}%` }"></span>
            </div>
            <span class="completion-note">已完成 {{ trainingCompletedCount }} / 3 个练习</span>
          </article>
          <article class="dashboard-card soft-card">
            <h3>今天的小提醒</h3>
            <p>不必一次做完所有训练。选择你最感兴趣的一个，保持好奇就好。</p>
          </article>
        </template>
        <template v-else-if="activeTab === 2">
          <div class="daily-greeting">
            <LightBulbIcon /><span>给习以为常的事，一个新视角</span>
            <h2>让灵感自然发生</h2>
          </div>
          <article
            v-for="(idea, index) in [
              { title: '换一个角色', text: '如果你是第一次遇到这个问题的人，你会先问什么？' },
              { title: '拿掉一个限制', text: '如果时间、工具或经验不再是限制，你会尝试什么？' },
              { title: '连接两个想法', text: '把今天学到的知识，和你正在做的事情联系起来。' },
            ]"
            :key="idea.title"
            class="dashboard-card idea-card"
          >
            <span class="idea-number">0{{ index + 1 }}</span>
            <div>
              <h3>{{ idea.title }}</h3>
              <p>{{ idea.text }}</p>
            </div>
          </article>
        </template>
        <template v-else>
          <div class="daily-greeting">
            <ChartBarIcon /><span>每一步，都值得被看见</span>
            <h2>和昨天的自己比一比</h2>
          </div>
          <article class="dashboard-card">
            <h3><SparklesIcon />这一周的探索</h3>
            <div class="growth-summary">
              <div>
                <strong>5<span>天</span></strong>
                <p>保持思考</p>
              </div>
              <div>
                <strong>12<span>个</span></strong>
                <p>记录灵感</p>
              </div>
              <div>
                <strong>35<span>分钟</span></strong>
                <p>专注训练</p>
              </div>
            </div>
            <div class="week-activity">
              <span
                v-for="(day, index) in ['一', '二', '三', '四', '五', '六', '日']"
                :key="day"
                :class="{ done: index < 5 }"
                ><CheckIcon v-if="index < 5" /><span v-else></span><small>{{ day }}</small></span
              >
            </div>
          </article>
          <article class="dashboard-card soft-card">
            <h3>给自己的成长笔记</h3>
            <p>「开始把问题拆开来看之后，原来觉得复杂的事情，慢慢有了方向。」</p>
            <span class="completion-note">示例成长记录</span>
          </article>
        </template>
      </div>
    </div>
  </div>
</template>

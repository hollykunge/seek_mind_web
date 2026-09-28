<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ProductDemo from '@/components/home/ProductDemo.vue'
import MemoryBoard from '@/components/home/MemoryBoard.vue'
import DownloadButton from '@/components/ui/DownloadButton.vue'
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  BookOpenIcon,
  SparklesIcon,
  LightBulbIcon,
  ChartBarIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PencilSquareIcon,
} from '@heroicons/vue/24/outline'
import '@/assets/landing.css'

const planCreated = ref(false)
const scenario = ref(0)
const scenarios = [
  {
    label: '工作与创造',
    icon: BriefcaseIcon,
    heading: '把模糊的想法，变成清晰的方向。',
    text: '从整理需求到探索创意，从分析问题到做出决策。让索智AI陪你拆解复杂任务，把精力留给真正重要的创造。',
    image: '/images/creative-moodboard.jpg',
    alt: '充满灵感的创意工作空间',
    quote: '一个好问题，往往是好作品的开始。',
    tags: ['创意探索', '问题拆解', '高效决策'],
  },
  {
    label: '学习与成长',
    icon: AcademicCapIcon,
    heading: '让每一点新知，都成为你的能力。',
    text: '找到适合自己的学习节奏，建立知识之间的连接。通过日常练习和思考复盘，把学过的知识变成真正的理解。',
    image: '/images/quiet-workspace.jpg',
    alt: '自然光下专注学习与创作的探索者',
    quote: '每天多想一步，慢慢走得更远。',
    tags: ['学习计划', '逻辑训练', '知识连接'],
  },
  {
    label: '生活与探索',
    icon: LightBulbIcon,
    heading: '在日常的小事里，遇见新的可能。',
    text: '为周末做一个计划，为好奇心留一点空间。从生活中的问题出发，发现不同的视角，也发现更丰富的自己。',
    image: '/images/weekend-hiking.png',
    alt: '阳光下开阔的山间徒步风景',
    quote: '带着好奇心，生活处处是灵感。',
    tags: ['生活规划', '探索发现', '习惯养成'],
  },
]
const currentScenario = computed(() => scenarios[scenario.value]!)
const features = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: '智能思维训练',
    text: '从逻辑推理到批判性思考，用日常练习建立更清晰的思维习惯。',
    label: 'Think clearly',
    type: 'thinking',
  },
  {
    icon: LightBulbIcon,
    title: '创意激发引擎',
    text: '跳出熟悉的思路，连接不同的想法，让灵感成为可以行动的方向。',
    label: 'Create freely',
    type: 'creative',
  },
  {
    icon: ChartBarIcon,
    title: '个性化学习路径',
    text: '根据你的目标与节奏，找到适合自己的学习方式，让成长更有方向。',
    label: 'Grow your way',
    type: 'learning',
  },
  {
    icon: UsersIcon,
    title: '思维社区交流',
    text: '分享一个发现，听见不同观点。和同样好奇的人一起拓宽思考的边界。',
    label: 'Explore together',
    type: 'community',
  },
  {
    icon: ShieldCheckIcon,
    title: '科学训练方法',
    text: '结合认知科学的思维方法，将问题拆解、联想与复盘融入每次练习。',
    label: 'Built on science',
    type: 'science',
  },
  {
    icon: RocketLaunchIcon,
    title: '持续能力提升',
    text: '看见每一次练习的积累，在不断尝试中，逐步形成属于自己的思维方式。',
    label: 'A little, every day',
    type: 'growth',
  },
]
let observer: IntersectionObserver | undefined
onMounted(() => {
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  )
    return
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 },
  )
  document.querySelectorAll('.landing-page .reveal').forEach((element) => {
    element.classList.add('will-reveal')
    observer?.observe(element)
  })
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="landing-page">
    <a class="skip-link" href="#main-content">跳转到主要内容</a>
    <AppHeader />
    <main id="main-content">
      <section id="top" class="landing-hero">
        <div class="hero-atmosphere" aria-hidden="true"></div>
        <div class="hero-title">
          <span class="hero-eyebrow">A LITTLE CLARITY. A WORLD OF POSSIBILITY.</span>
          <h1>认识「索智AI」</h1>
          <p>懂你的思考，陪你发现更多可能。</p>
        </div>
        <ProductDemo />
        <a class="explore-link" href="#memories">向下探索，一起成长 <ArrowDownIcon /></a>
      </section>

      <section class="intro-section reveal">
        <p>
          每一个想法，都有生长的可能。<br />索智AI帮你<span class="inline-highlight"
            ><LightBulbIcon />理清思路</span
          >，连接灵感，<br class="desktop-break" />把日常的思考，变成<span class="inline-highlight"
            ><SparklesIcon />更好的自己</span
          >。
        </p>
        <span class="intro-signature">YOUR MIND. MORE POSSIBILITIES.</span>
      </section>

      <section id="memories" class="memory-section landing-section">
        <div class="section-heading reveal">
          <span class="section-pill">了解你</span>
          <h2>每一个想法，都被认真对待。</h2>
          <p>
            你的兴趣、目标和每一次探索，串起独一无二的成长轨迹。<br
              class="desktop-break"
            />从了解你的思考开始，找到适合你的下一步。
          </p>
        </div>
        <div class="reveal"><MemoryBoard /></div>
      </section>

      <section id="proactive" class="proactive-section landing-section">
        <div class="section-heading reveal">
          <span class="section-pill">启发你</span>
          <h2>不止给你答案，还带来新视角。</h2>
          <p>
            卡住的时候，换一种方式想一想。<br />把复杂的问题拆小，让灵感落地，让每一步都更清晰。
          </p>
        </div>
        <div class="proactive-grid page-width reveal">
          <article class="proactive-card perspective-card">
            <div class="card-eyebrow"><span class="tiny-dot"></span>一个新的思考角度</div>
            <div class="perspective-note">
              <LightBulbIcon />
              <p>「如果换一个人的视角，<br />这件事会有什么不同？」</p>
            </div>
            <div class="suggestion-bubble">
              <img src="@/assets/logo.svg" alt="" />
              <p>先别急着给出结论。试着列出三种可能，再选择最值得验证的一种。</p>
            </div>
            <span class="proactive-caption">让思考，多一种可能。</span>
          </article>
          <article class="proactive-card action-card">
            <div class="card-eyebrow"><PencilSquareIcon />从想法到行动</div>
            <div class="action-note">
              <span>我的新目标</span>
              <h3>想提升思维能力，<br />但不知道从哪里开始。</h3>
              <p>不需要一份复杂的计划。<br />先从今天能做的一小步开始。</p>
            </div>
            <button class="small-dark-button" @click="planCreated = !planCreated">
              {{ planCreated ? '重新查看目标' : '帮我拆解目标' }}<ArrowRightIcon /></button
            ><Transition name="plan"
              ><div v-if="planCreated" class="generated-plan" role="status">
                <span><CheckIcon />每天 5 分钟问题拆解</span
                ><span><CheckIcon />记录一个新的想法</span
                ><span><CheckIcon />周末回顾一次收获</span>
              </div></Transition
            ><span v-if="!planCreated" class="action-footnote">点击，试试把目标变成小步骤</span>
          </article>
          <article class="proactive-card rhythm-card">
            <div class="card-eyebrow"><ClockIcon />让成长融入日常</div>
            <h3>属于你的，<br />一点点进步。</h3>
            <div class="rhythm-list">
              <div>
                <span class="rhythm-icon mint"><BookOpenIcon /></span
                ><span>读一点，想一点<small>晨间的 10 分钟</small></span
                ><CheckIcon />
              </div>
              <div>
                <span class="rhythm-icon lavender"><LightBulbIcon /></span
                ><span>捕捉一个新灵感<small>随时随地</small></span
                ><CheckIcon />
              </div>
              <div>
                <span class="rhythm-icon sand"><ChartBarIcon /></span
                ><span>和自己聊聊收获<small>一天结束的时候</small></span
                ><CheckIcon />
              </div>
            </div>
            <span class="proactive-caption">小小的坚持，也有大大的力量。</span>
          </article>
        </div>
      </section>

      <section id="use-cases" class="use-cases-section landing-section">
        <div class="section-heading reveal">
          <span class="section-pill">使用场景</span>
          <h2>陪你探索，生活的更多面。</h2>
          <p>
            认真工作，尽情创造，持续学习，也留一点时间给生活。<br
              class="desktop-break"
            />无论此刻的你正在做什么，都可以找到新的思考方向。
          </p>
        </div>
        <div class="scenario-picker reveal" role="group" aria-label="选择使用场景">
          <button
            v-for="(item, index) in scenarios"
            :key="item.label"
            :class="{ active: scenario === index }"
            :aria-pressed="scenario === index"
            @click="scenario = index"
          >
            <component :is="item.icon" />{{ item.label }}
          </button>
        </div>
        <div class="scenario-panel page-width reveal">
          <div class="scenario-image">
            <Transition name="memory" mode="out-in"
              ><img
                :key="scenario"
                :src="currentScenario.image"
                :alt="currentScenario.alt"
                loading="lazy"
                width="560"
                height="440" /></Transition
            ><span class="scenario-quote">{{ currentScenario.quote }}</span>
          </div>
          <div class="scenario-copy">
            <span class="scenario-number">0{{ scenario + 1 }} / 日常里的无限可能</span>
            <h3>{{ currentScenario.heading }}</h3>
            <p>{{ currentScenario.text }}</p>
            <div class="scenario-tags">
              <span v-for="tag in currentScenario.tags" :key="tag">{{ tag }}</span>
            </div>
            <a href="#download">开启你的探索 <ArrowUpRightIcon /></a>
          </div>
        </div>
      </section>

      <section id="capabilities" class="capabilities-section landing-section">
        <span id="features" class="section-anchor"></span>
        <div class="section-heading reveal">
          <span class="section-pill">功能特性</span>
          <h2>为更好的思考，准备好每一种能力。</h2>
          <p>
            从思维训练到创意探索，从个人成长到社区交流。<br
              class="desktop-break"
            />把实用的工具，变成日常里自然发生的帮助。
          </p>
        </div>
        <div class="capability-grid page-width">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="capability-card reveal"
            :class="feature.type"
          >
            <div class="capability-visual">
              <component :is="feature.icon" /><span>{{ feature.label }}</span>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </article>
        </div>
      </section>

      <section id="download" class="download-section">
        <div class="download-atmosphere" aria-hidden="true"></div>
        <div class="download-content reveal">
          <img
            class="download-logo"
            src="@/assets/logo.svg"
            alt="索智AI"
            width="64"
            height="64"
          /><span class="section-pill">下一步，从这里开始</span>
          <h2>给好奇心，<br />一个新的开始。</h2>
          <p>下载索智AI，让每一天的思考，多一点可能。</p>
          <div class="landing-download-buttons"><DownloadButton /></div>
          <span class="download-note">适用于 iOS 与 Android</span>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

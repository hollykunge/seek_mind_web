<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="portal-footer">
    <div class="footer-top">
      <div class="footer-intro">
        <RouterLink class="footer-brand" to="/"
          ><img src="@/assets/logo.svg" alt="" width="36" height="36" />SeekMind:</RouterLink
        >
        <p>让思考更清晰，让灵感有方向。<br />陪你一起，发现更好的自己。</p>
      </div>
      <nav aria-label="页脚产品导航">
        <h2>探索产品</h2>
        <RouterLink to="/#capabilities">功能特性</RouterLink
        ><RouterLink to="/#use-cases">使用场景</RouterLink
        ><RouterLink to="/#download">下载 APP</RouterLink>
      </nav>
      <div class="footer-contact">
        <h2>保持联系</h2>
        <a href="mailto:contact@seekmind.ai">contact@seekmind.ai <ArrowUpRightIcon /></a
        ><span>北京图存科技有限公司</span><span>北京市朝阳区</span>
      </div>
    </div>
    <div class="footer-wordmark" aria-hidden="true">SeekMind<span>:</span></div>
    <div class="footer-bottom">
      <span>© {{ year }} 北京图存科技有限公司</span><span>索智AI · 智能思维助手</span
      ><span>简体中文</span>
    </div>
  </footer>
</template>

<style scoped>
.portal-footer {
  background: #f7f8f6;
  color: #303632;
  padding: 70px max(28px, calc((100vw - 1120px) / 2)) 24px;
  font-family: Figtree, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.4fr;
  gap: 40px;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 27px;
  font-weight: 600;
  letter-spacing: -1px;
  color: inherit;
  text-decoration: none;
}
.footer-intro p {
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.9;
  color: #777e77;
}
.footer-top h2 {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 19px;
}
.footer-top nav,
.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
.footer-top a:not(.footer-brand),
.footer-contact span {
  color: #787d78;
  font-size: 13px;
  text-decoration: none;
}
.footer-top a:hover {
  color: #252c26;
}
.footer-contact a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.footer-contact svg {
  width: 15px;
}
.footer-wordmark {
  font-size: clamp(64px, 16.7vw, 240px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.065em;
  color: #dce1d9;
  padding: 50px 0 20px;
  white-space: nowrap;
}
.footer-wordmark span {
  color: #c6cec0;
}
.footer-bottom {
  border-top: 1px solid #e1e5df;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  font-size: 11px;
  color: #8a9087;
}
@media (max-width: 760px) {
  .portal-footer {
    padding: 44px 24px 24px;
  }
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 32px 18px;
  }
  .footer-intro {
    grid-column: 1 / -1;
  }
  .footer-contact a {
    word-break: break-all;
  }
  .footer-bottom {
    flex-wrap: wrap;
    line-height: 1.8;
  }
}
</style>

<template>
  <div v-if="!isFirstPage">
    <div class="main-title">AI 开发辅助工具分享</div>
    <div 
      class="sub-title"
      :style="{ animation: 'moveTitle 1s ease forwards' }"
    >{{ subtitle }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  subtitle: {
    type: String,
    required: true
  }
})

const isFirstPage = computed(() => {
  return window?.$slidev?.nav.currentPage === 1
})
</script>

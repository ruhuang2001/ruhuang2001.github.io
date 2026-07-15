<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentSlideRoute } = useNav()

// 每页生成一组稳定的随机偏移，切换幻灯片时平滑过渡
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function makeOffsets(slideNo: number) {
  const s = (n: number) => seededRandom(slideNo * 1000 + n)
  return {
    one: {
      x: (s(1) - 0.5) * 400,
      y: (s(2) - 0.5) * 260,
    },
    two: {
      x: (s(3) - 0.5) * 400,
      y: (s(4) - 0.5) * 260,
    },
  }
}

const offsets = computed(() => makeOffsets(currentSlideRoute.value.no || 1))

const orbOneStyle = computed(() => ({
  transform: `translate(${offsets.value.one.x}px, ${offsets.value.one.y}px)`,
}))

const orbTwoStyle = computed(() => ({
  transform: `translate(${offsets.value.two.x}px, ${offsets.value.two.y}px)`,
}))
</script>

<template>
  <div class="ambient" aria-hidden="true">
    <span class="ambient__orb ambient__orb--one" :style="orbOneStyle" />
    <span class="ambient__orb ambient__orb--two" :style="orbTwoStyle" />
  </div>
</template>

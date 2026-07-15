<script setup lang="ts">
withDefaults(defineProps<{ index?: string, label?: string }>(), {
  index: '01',
  label: 'SECTION',
})
</script>

<template>
  <div class="section-label">
    <span>{{ index }}</span>
    <span class="section-label__line" />
    <span>{{ label }}</span>
  </div>
</template>

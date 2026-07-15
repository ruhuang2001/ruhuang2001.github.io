<script setup lang="ts">
defineProps<{ section?: string }>()
</script>

<template>
  <footer class="deck-footer">
    <div class="deck-footer__brand">
      <img class="deck-footer__avatar" src="/avatar.png" alt="">
      <a href="https://github.com/ruhuang2001" target="_blank">ruhuang2001</a>
      <span v-if="section" class="deck-footer__section">/ {{ section }}</span>
    </div>
    <span>{{ $slidev.nav.currentPage.toString().padStart(2, '0') }}</span>
  </footer>
</template>

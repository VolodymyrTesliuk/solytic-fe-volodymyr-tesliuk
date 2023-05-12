<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app u-bg-color-septenary">
    <Header />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
// @import '@/assets/styles/settings-tools.scss';
.app {
  // min-width: 100%;
  // min-height: 100vh;
  // display: flex;
}
</style>

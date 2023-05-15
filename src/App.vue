<script setup lang="ts">
import { RouterView } from 'vue-router'
import { navLinks } from '@/router/navLinks'
import TheHeader from '@/components/organisms/TheHeader.vue'
</script>

<template>
  <div class="app u-bg-color-septenary">
    <the-header :links="navLinks" />
    <router-view v-slot="{ Component }">
      <main class="app__view">
        <transition name="u-fade-in" mode="out-in">
          <component :is="Component" :key="$route.path" class="u-layout-barrier" />
        </transition>
      </main>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__view {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
}
</style>

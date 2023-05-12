<script setup lang="ts">
import { RouterView } from 'vue-router'
import { navLinks } from '@/router/navLinks'
import TheHeader from '@/components/organisms/TheHeader.vue'
</script>

<template>
  <div class="app u-bg-color-septenary">
    <the-header :links="navLinks" />
    <router-view v-slot="{ Component }">
      <transition name="u-fade-in" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

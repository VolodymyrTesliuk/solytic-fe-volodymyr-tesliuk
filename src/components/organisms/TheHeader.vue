<script setup lang="ts">
import NavLink from '@/components/molecules/NavLink.vue'
import type { LinkObject } from '@/types/LinkObject'

const props = defineProps<{
  links: LinkObject[]
}>()
</script>

<template>
  <header class="o-header u-bg-arsenic">
    <nav class="o-header__nav">
      <NavLink v-for="link in props.links" :to="link.to" :icon="link.icon" :key="link.to">{{
        link.text
      }}</NavLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/settings-tools.scss';
.o-header {
  box-shadow: 0 indent('sm') indent('lg') 0 rgba(0, 0, 0, 0.16);
  display: flex;
  height: 3.5rem;
  &__nav {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 31.25rem;
    padding: 0 32px;
  }
}
</style>

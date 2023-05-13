<script setup lang="ts">
import VueLink from '@/components/molecules/VueLink.vue'
import type { LinkObject } from '@/types'

const props = defineProps<{
  links: LinkObject[]
}>()
</script>

<template>
  <header class="o-header u-bg-arsenic">
    <nav class="o-header__nav u-layout-barrier">
      <VueLink
        v-for="link in props.links"
        :to="link.to"
        :icon="link.icon"
        :key="link.to"
        showActive
        tabletMin
        class="o-header__link"
      >
        {{ link.text }}
      </VueLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.o-header {
  box-shadow: 0 indent('sm') indent('lg') 0 rgba(0, 0, 0, 0.16);
  display: flex;
  height: 3.5rem;
  justify-content: center;
  &__nav {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: space-between;
  }
  &__link {
    color: color('sonic-silver');
    display: flex;
    transition: color ease-in-out 0.3s;
    &:hover,
    &:focus {
      color: color('platinum');
    }
  }
}
</style>

<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

import { computed } from 'vue'
import type { IconsList } from '@/types'

const props = defineProps<{
  to: string
  icon?: IconsList
  showActive?: boolean
  tabletMin?: boolean
}>()

const classObject = computed(() => [
  { 'm-vue-link--active': props.showActive },
  { 'm-vue-link--min': props.tabletMin },
  'm-vue-link',
  'u-no-underline'
])
</script>

<template>
  <BaseButton :class="classObject" tag="router-link" :to="props.to">
    <BaseIcon v-if="props.icon" :icon="props.icon" class="m-vue-link__icon" />
    <BaseText tag="span" size="base" weight="medium" class="m-vue-link__text">
      <slot />
    </BaseText>
  </BaseButton>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.m-vue-link {
  $__: &;
  &__icon + &__text {
    margin-left: indent('sm');
  }
  &--active.router-link-exact-active {
    color: color('pink-flamingo');
    &:hover,
    &:focus {
      color: color('pink-flamingo');
    }
  }
  &--min {
    #{$__}__text {
      display: none;
      @include mq($from: sm) {
        display: inline;
      }
    }
  }
}
</style>

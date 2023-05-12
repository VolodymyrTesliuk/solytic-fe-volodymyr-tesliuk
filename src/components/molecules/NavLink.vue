<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import IconHome from '@/components/atoms/icons/IconHome.vue'
import IconLock from '@/components/atoms/icons/IconLock.vue'
import IconUser from '@/components/atoms/icons/IconUser.vue'
import { computed } from 'vue'
import type { IconsList } from '@/types/IconsList'

const props = defineProps<{
  to: string
  icon: IconsList
}>()

const iconObj = {
  home: IconHome,
  lock: IconLock,
  user: IconUser
}

const icon = computed(() => iconObj[props.icon])
</script>

<template>
  <BaseButton class="m-nav-link u-no-underline" tag="router-link" :to="props.to"
    ><component :is="icon" class="m-nav-link__icon" />
    <BaseText tag="span" size="base" weight="medium" class="m-nav-link__text">
      <slot />
    </BaseText>
  </BaseButton>
</template>

<style lang="scss" scoped>
// @use 'sass-mq/_mq.scss' as mq;
@import '@/assets/styles/settings-tools.scss';
.m-nav-link {
  color: color('sonic-silver');
  transition: color ease-in-out 0.3s;
  display: flex;
  &.router-link-exact-active {
    color: color('pink-flamingo');
    &:hover,
    &:focus {
      color: color('pink-flamingo');
    }
  }
  &:hover,
  &:focus {
    color: color('platinum');
  }
  &__icon {
    margin-right: indent('sm');
  }
  &__text {
    display: none;
    @include mq($from: sm) {
      display: inline;
    }
  }
}
</style>

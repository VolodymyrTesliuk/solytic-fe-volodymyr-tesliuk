<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
import { computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()
const classObject = computed(() => [
  'm-form-button',
  'u-font-semibold',
  {
    'm-form-button--disabled': props.disabled
  }
])
</script>

<template>
  <BaseButton tag="button" :disabled="props.disabled" :class="classObject"><slot /></BaseButton>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
@mixin button-disabled {
  background-color: color('quinary');
  color: color('tertiary');
}
.m-form-button {
  @include form-element;
  border-radius: 0.25rem;
  background-color: color('primary');
  color: color('secondary');
  transition: color ease-in-out 0.3s, background-color ease-in-out 0.3s;
  &:hover,
  &:focus {
    background-color: color('secondary');
    color: color('primary');
  }
  &--disabled {
    @include button-disabled;
    &:hover,
    &:focus {
      @include button-disabled;
    }
  }
}
</style>

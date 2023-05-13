<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
</script>

<template>
  <BaseButton tag="button" class="m-form-button u-font-semibold"><slot /></BaseButton>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.m-form-button {
  @include form-element;
  border-radius: 0.25rem;
  background-color: color('pink-flamingo');
  color: color('platinum');
  transition: color ease-in-out 0.3s, background-color ease-in-out 0.3s;
  &:hover,
  &:focus {
    background-color: color('platinum');
    color: color('pink-flamingo');
  }
}
</style>

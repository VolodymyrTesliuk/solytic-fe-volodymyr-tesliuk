<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  tag: 'button' | 'a' | 'input' | 'router-link'
  disabled?: boolean
}>()
const emit = defineEmits<{
  (type: 'click', data: Event): void
}>()
const classObject = computed(() => [{ 'a-button--disabled': props.disabled }, 'a-button'])
</script>

<template>
  <component :is="props.tag" :class="classObject" v-bind="$attrs" @click="emit('click', $event)">
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.a-button {
  cursor: pointer;
  border: none;
  &--disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>

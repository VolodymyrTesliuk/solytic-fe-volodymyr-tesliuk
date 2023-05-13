<script setup lang="ts">
import { computed } from 'vue'
import type { ColorsList } from '@/types/ColorsList'
const props = defineProps<{
  tag: string
  color?: ColorsList
  size?: 'xs' | 'sm' | 'base' | 'ls' | 'xl' | '2xl'
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  decoration?: 'underline' | 'overline' | 'line-through' | 'no-underline'
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
}>()
const classObject = computed(() => ({
  [`u-text-${props.color}`]: props.color,
  [`u-text-${props.size}`]: props.size,
  [`u-font-${props.weight}`]: props.weight,
  [`u-${props.transform}`]: props.transform,
  [`u-${props.decoration}`]: props.decoration
}))
</script>

<template>
  <component :is="tag" :class="classObject">
    <slot />
  </component>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import type { IconsList } from '@/types'

type BaseInputProps = {
  modelValue: string
  icon: IconsList
}
type BaseInputEmits = {
  (event: 'update:modelValue', payload: string): void
}

const props = defineProps<BaseInputProps>()
const emit = defineEmits<BaseInputEmits>()

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <label class="m-form-field u-bg-arsenic u-flex u-text-sonic-silver">
    <i class="m-form-field__icon u-bg-charcoal u-flex u-items-center u-justify-center"
      ><BaseIcon :icon="props.icon"
    /></i>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="onInput"
      class="m-form-field__input u-text-platinum"
    />
  </label>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.m-form-field {
  border-radius: 0.25rem;
  width: 100%;
  &::placeholder {
    color: color('sonic-silver');
  }
  &__icon {
    border-radius: 0.25rem 0 0 0.25rem;
    flex-basis: 3.5rem;
    flex-shrink: 0;
    height: 3.5rem;
    width: 3.5rem;
  }
  &__input {
    @include form-element;
    background-color: transparent;
    border: none;
    flex-grow: 1;
  }
}
</style>

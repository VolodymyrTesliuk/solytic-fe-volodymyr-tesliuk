<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import type { ErrorObject } from '@vuelidate/core/index.d.ts'
import type { IconsList } from '@/types'
import { ref, computed, watch } from 'vue'

type BaseInputProps = {
  modelValue: string
  icon: IconsList
  errors?: ErrorObject[]
  reset: boolean
}
type BaseInputEmits = {
  (event: 'update:modelValue', payload: string): void
}

const props = defineProps<BaseInputProps>()
const emit = defineEmits<BaseInputEmits>()

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
const onFocus = () => (showErrors.value = false)
const onBlur = () => (showErrors.value = true)
const showErrors = ref(false)

const visibleErrors = computed(() => (showErrors.value ? props.errors : []))

watch(
  () => props.reset,
  () => {
    if (props.reset) onFocus()
  }
)
</script>

<template>
  <label class="m-form-field u-flex u-text-tertiary u-flex-wrap">
    <i class="m-form-field__icon u-bg-quinary u-flex u-items-center u-justify-center"
      ><BaseIcon :icon="props.icon"
    /></i>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      class="m-form-field__input u-text-secondary u-bg-quaternary"
    />
    <BaseText
      tag="span"
      class="m-form-field__message"
      color="primary"
      v-for="error in visibleErrors"
      :key="error.$uid"
    >
      {{ error.$message }}
    </BaseText>
  </label>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.m-form-field {
  width: 100%;
  &::placeholder {
    color: color('tertiary');
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
    border-radius: 0 0.25rem 0.25rem 0;
    border: none;
    flex: 1;
    min-width: 0;
  }
  &__message {
    flex-basis: 100%;
    margin-top: indent('xs');
  }
}
</style>

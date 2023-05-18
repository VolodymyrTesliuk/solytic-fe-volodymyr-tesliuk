<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import FormField from '@/components/molecules/FormField.vue'
import FormButton from '@/components/molecules/FormButton.vue'
import { ref, reactive, computed, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useUserStore } from '@/stores/user'

const emit = defineEmits<{
  (type: 'onSuccess'): void
}>()

const store = useUserStore()
const formData = reactive({
  email: '',
  password: ''
})
const rules = computed(() => ({
  email: { required, email },
  password: { required, minLength: minLength(8) }
}))

const isFormValid = ref(false)
const formError = ref('')
const clearForm = () => {
  formData.email = ''
  formData.password = ''
}

const v$ = useVuelidate(rules, formData)

const resetFields = ref(false)

watch([() => formData.email, () => formData.password], async () => {
  isFormValid.value = await v$.value.$validate()
})

const submitForm = async () => {
  isFormValid.value = await v$.value.$validate()
  resetFields.value = false
  if (isFormValid.value) {
    formError.value = ''
    try {
      await store.loginUser({ email: formData.email, password: formData.password })
      resetFields.value = true
      clearForm()
      emit('onSuccess')
    } catch (e) {
      formError.value = String(e)
      return
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="o-form-log-in">
    <FormField
      placeholder="Email"
      autofocus
      icon="user"
      class="o-form-log-in__element"
      v-model="formData.email"
      :errors="v$.email.$errors"
      :reset="resetFields"
    />
    <FormField
      placeholder="Password"
      type="password"
      icon="lock"
      class="o-form-log-in__element"
      v-model="formData.password"
      :errors="v$.password.$errors"
      :reset="resetFields"
    />
    <FormButton :disabled="!isFormValid" tag="button" type="submit" class="o-form-log-in__element">
      SIGN IN
    </FormButton>
    <BaseText
      v-if="formError"
      tag="p"
      size="base"
      weight="normal"
      color="primary"
      class="o-form-log-in__element"
    >
      {{ formError }}
    </BaseText>
  </form>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.o-form-log-in {
  display: flex;
  flex-direction: column;
  &__element + &__element {
    margin-top: indent('base');
  }
}
</style>

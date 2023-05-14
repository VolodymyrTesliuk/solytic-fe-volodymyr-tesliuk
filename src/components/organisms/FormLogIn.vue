<script setup lang="ts">
import FormField from '@/components/molecules/FormField.vue'
import FormButton from '@/components/molecules/FormButton.vue'
import { ref, reactive, computed, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

const formData = reactive({
  email: '',
  password: ''
})
const rules = computed(() => ({
  email: { required, email },
  password: { required, minLength: minLength(8) }
}))

const isFormValid = ref(false)

const v$ = useVuelidate(rules, formData)

watch([() => formData.email, () => formData.password], async () => {
  isFormValid.value = await v$.value.$validate()
})

const submitForm = async () => {
  isFormValid.value = await v$.value.$validate()
  if (isFormValid.value) {
    // Handle valid form
    // console.log('Success')
  } else {
    // Handle invalid form
    // console.error('Error')
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="o-form-log-in">
    <FormField
      placeholder="Username"
      autofocus
      icon="user"
      class="o-form-log-in__field"
      v-model="formData.email"
      :errors="v$.email.$errors"
    />
    <FormField
      placeholder="Password"
      type="password"
      icon="lock"
      class="o-form-log-in__field"
      v-model="formData.password"
      :errors="v$.password.$errors"
    />
    <FormButton :disabled="!isFormValid" tag="button" type="submit" class="o-form-log-in__button">
      SIGN IN
    </FormButton>
  </form>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.o-form-log-in {
  display: flex;
  flex-direction: column;
  &__field + &__field,
  &__field + &__button {
    margin-top: indent('base');
  }
}
</style>

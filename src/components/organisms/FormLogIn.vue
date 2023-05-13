<script setup lang="ts">
import FormField from '@/components/molecules/FormField.vue'
import FormButton from '@/components/molecules/FormButton.vue'
import { reactive } from 'vue'

const form = reactive({
  input: {
    email: '',
    password: ''
  }
})
const onCLick = (e: any) => console.log(e)
</script>

<template>
  <form class="o-form-log-in">
    <FormField
      placeholder="Username"
      autofocus
      icon="user"
      class="o-form-log-in__field"
      v-model="form.input.email"
    />
    <FormField
      placeholder="Password"
      type="password"
      icon="lock"
      class="o-form-log-in__field"
      v-model="form.input.password"
    />
    <FormButton tag="button" @click.prevent="onCLick" class="o-form-log-in__button">
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

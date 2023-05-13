<script setup lang="ts">
import FormLogIn from '@/components/organisms/FormLogIn.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import VueLink from '@/components/molecules/VueLink.vue'
</script>

<template>
  <section class="t-log-in">
    <FormLogIn class="t-log-in__form" />
    <BaseText tag="p" size="base" weight="normal" color="sonic-silver" class="t-log-in__text">
      Not a member?
      <BaseText tag="span" size="base" weight="semibold">
        <VueLink tag="router-link" to="/login" class="t-log-in__link u-no-underline">
          Sign up now
        </VueLink>
      </BaseText>
    </BaseText>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.t-log-in {
  text-align: center;
  &__form + &__text {
    margin-top: indent('xs');
  }
  &__link {
    color: color('platinum');
    transition: color ease-in-out 0.3s;
    &:hover,
    &:focus {
      color: color('pink-flamingo');
    }
  }
}
</style>

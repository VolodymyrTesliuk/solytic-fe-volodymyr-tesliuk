<script setup lang="ts">
import FormLogIn from '@/components/organisms/FormLogIn.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import VueLink from '@/components/molecules/VueLink.vue'
import FormButton from '@/components/molecules/FormButton.vue'
import PopUp from '@/components/molecules/PopUp.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const store = useUserStore()
const popUpOpened = ref(false)
const togglePopUp = () => {
  popUpOpened.value = !popUpOpened.value
}
</script>

<template>
  <section class="t-log-in">
    <FormLogIn class="t-log-in__form" @onSuccess="togglePopUp" />
    <BaseText tag="p" size="base" weight="normal" color="sonic-silver" class="t-log-in__text">
      Not a member?
      <BaseText tag="span" size="base" weight="semibold">
        <VueLink tag="router-link" to="/login" class="t-log-in__link u-no-underline">
          Sign up now
        </VueLink>
      </BaseText>
    </BaseText>
    <teleport to="#app">
      <Transition name="u-fade-in" mode="out-in">
        <PopUp v-if="popUpOpened" class="t-log-in__pop-up">
          <BaseText
            tag="h3"
            size="xl"
            weight="bold"
            color="pink-flamingo"
            class="t-log-in__pop-up-item"
          >
            Welcome back!
          </BaseText>
          <BaseText
            tag="p"
            size="base"
            weight="normal"
            color="platinum"
            class="t-log-in__pop-up-item"
            >You have successfully logged in.
          </BaseText>
          <BaseText
            tag="p"
            size="base"
            weight="normal"
            color="platinum"
            class="t-log-in__pop-up-item"
            >Your ID is:
            <BaseText
              tag="span"
              size="base"
              weight="bold"
              color="pink-flamingo"
              class="t-log-in__pop-up-item"
              >{{ store.user.id }}
            </BaseText>
          </BaseText>
          <FormButton
            tag="button"
            class="t-log-in__pop-up-item o-form-log-in__button"
            @click="togglePopUp"
            >OK</FormButton
          >
        </PopUp>
      </Transition>
    </teleport>
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
  &__pop-up {
    text-align: center;
    &-item + &-item {
      margin-top: indent('base');
    }
  }
}
</style>

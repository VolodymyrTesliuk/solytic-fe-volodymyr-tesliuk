<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
</script>
<template>
  <article class="o-info">
    <BaseText
      v-if="$slots.default"
      tag="h1"
      size="2xl"
      weight="black"
      color="pink-flamingo"
      class="o-info__title"
      ><slot
    /></BaseText>
    <BaseText
      v-if="$slots.content"
      tag="p"
      size="base"
      weight="normal"
      color="platinum"
      class="o-info__text"
    >
      <slot name="content" />
    </BaseText>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.o-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__title + &__text {
    margin-top: indent('base');
  }
}
</style>

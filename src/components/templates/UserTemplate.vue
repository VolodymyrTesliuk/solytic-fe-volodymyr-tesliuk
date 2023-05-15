<script setup lang="ts">
import InfoBlock from '@/components/organisms/InfoBlock.vue'

const props = defineProps<{
  title: string
  details: object
}>()
</script>

<template>
  <section class="t-user">
    <InfoBlock>
      <template #default>{{ props.title }}</template>
      <template #content>
        <ul>
          <li v-for="(value, key) in details" :key="key" class="t-user__item">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </template>
    </InfoBlock>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';

.t-user {
  &__item {
    position: relative;
    padding-left: indent('lg');
    text-align: start;
    &:after {
      content: '';
      height: 0.45rem;
      width: 0.45rem;
      background-color: color('pink-flamingo');
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: indent('sm');
      left: 0;
    }
  }
}
</style>

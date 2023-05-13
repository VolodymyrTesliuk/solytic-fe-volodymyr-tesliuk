<script setup lang="ts">
import InfoBlock from '@/components/organisms/InfoBlock.vue'

const props = defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <section>
    <InfoBlock>
      <template #default>{{ props.title }}</template>
      <template #content>{{ props.text }}</template>
    </InfoBlock>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IconsList } from '@/types'
import IconHome from '@/components/atoms/icons/IconHome.vue'
import IconLock from '@/components/atoms/icons/IconLock.vue'
import IconUser from '@/components/atoms/icons/IconUser.vue'

const props = defineProps<{
  icon: IconsList
}>()

const iconObj = {
  home: IconHome,
  lock: IconLock,
  user: IconUser
}
const icon = computed(() => (props.icon ? iconObj[props.icon] : null))
</script>

<template>
  <component :is="icon" />
</template>

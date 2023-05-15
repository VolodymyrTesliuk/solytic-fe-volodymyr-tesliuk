<script setup lang="ts">
import HomeTemplate from '@/components/templates/HomeTemplate.vue'
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const userId = store.user.id
const title = `Greetings sire${userId ? `-${userId}` : ''}!`
</script>

<template>
  <HomeTemplate :title="title" text="The lorem ipsum dolor sit amet consectetur awaits you!" />
</template>

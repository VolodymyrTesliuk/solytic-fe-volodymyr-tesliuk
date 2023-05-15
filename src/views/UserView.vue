<script setup lang="ts">
import UserTemplate from '@/components/templates/UserTemplate.vue'
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const details = store.user
</script>

<template>
  <UserTemplate title="User details:" :details="details" />
</template>

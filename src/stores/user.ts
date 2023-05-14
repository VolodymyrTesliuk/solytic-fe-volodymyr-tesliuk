import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserDataType } from '@/types'

/*
In Setup Stores:
ref()s become state properties
computed()s become getters
function()s become actions
*/

export const useUserStore = defineStore('user', () => {
  const id = ref<number>()
  const token = ref<string>()
  const tokenType = ref<string>()
  function setUserData(data: UserDataType) {
    id.value = data.loginUser.user.id
    token.value = data.accessToken.token
    tokenType.value = data.accessToken.tokenType
  }
  return { id, token, tokenType, setUserData }
})

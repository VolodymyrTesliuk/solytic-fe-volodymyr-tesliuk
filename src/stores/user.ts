import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserDataType, UserLoginInputType } from '@/types'
import apolloClient from '@/plugins/apollo'
import gql from 'graphql-tag'
/*
In Setup Stores:
ref()s become state properties
computed()s become getters
function()s become actions
*/

export const useUserStore = defineStore('user', () => {
  // STATE
  const user = ref(JSON.parse(localStorage.getItem('user') || '{}'))
  const accessToken = ref(JSON.parse(localStorage.getItem('accessToken') || '{}'))

  // COMPUTED
  const isLoggedIn = computed(() => accessToken.value.token?.length)

  // ACTIONS
  function setUserData(data: UserDataType) {
    const { loginUser } = data
    user.value = loginUser.user
    accessToken.value = loginUser.accessToken
    localStorage.setItem('user', JSON.stringify(user.value))
    localStorage.setItem('accessToken', JSON.stringify(accessToken.value))
  }
  async function loginUser(userLoginInput: UserLoginInputType) {
    try {
      const result = await apolloClient.mutate({
        mutation: gql`
          mutation LoginUser($input: UserLoginInput!) {
            loginUser(input: $input) {
              user {
                id
              }
              accessToken {
                token
                tokenType
              }
            }
          }
        `,
        variables: { input: userLoginInput }
      })
      setUserData(result.data)
    } catch (e) {
      return
    }
  }
  return { user, accessToken, isLoggedIn, setUserData, loginUser }
})

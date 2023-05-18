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
  const isLoggedIn = computed(() => accessToken.value.token?.length || false)

  // ACTIONS
  function setUserData(data: UserDataType) {
    const { loginUser } = data
    user.value = loginUser.user
    accessToken.value = loginUser.accessToken
    localStorage.setItem('user', JSON.stringify(user.value))
    localStorage.setItem('accessToken', JSON.stringify(accessToken.value))
  }
  function logOutUser() {
    user.value = {}
    accessToken.value = {}
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
  }
  async function loginUser(userLoginInput: UserLoginInputType) {
    try {
      const { data } = await apolloClient.mutate({
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
      setUserData(data)
      return data
    } catch (e) {
      if (e instanceof Error) {
        throw e?.message
      } else {
        throw 'An unexpected error has occurred. Please try again later.'
      }
    }
  }
  return { user, accessToken, isLoggedIn, setUserData, loginUser, logOutUser }
})

export interface UserDataType {
  loginUser: {
    user: {
      id: number
    }
  }
  accessToken: {
    token: string
    tokenType: string
  }
}

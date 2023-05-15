export interface UserDataType {
  loginUser: {
    user: {
      id: number
    }
    accessToken: {
      token: string
      tokenType: string
    }
  }
}
export interface UserLoginInputType {
  email: string
  password: string
}

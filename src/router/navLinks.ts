import type { LinkObject } from '@/types'

export const navLinks: LinkObject[] = [
  {
    to: '/',
    text: 'Home',
    icon: 'home'
  },
  {
    to: '/login',
    text: 'Log in',
    icon: 'lock'
  },
  {
    to: '/user',
    text: 'User',
    icon: 'user',
    private: true
  }
]

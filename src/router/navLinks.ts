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
    icon: 'lock',
    public: true
  },
  {
    to: '/logout',
    text: 'Log out',
    icon: 'lock',
    private: true
  },
  {
    to: '/user',
    text: 'User',
    icon: 'user',
    private: true
  }
]

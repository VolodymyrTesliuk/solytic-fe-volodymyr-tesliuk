import type { IconsList } from '@/types'

export interface LinkObject {
  to: string
  text: string
  icon: IconsList
  public?: boolean
  private?: boolean
}

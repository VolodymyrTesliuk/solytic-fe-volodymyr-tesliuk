import BaseText from '@/components/atoms/BaseText.vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

const testText = 'Test text'

describe('BaseText', () => {
  it('render slots properly', () => {
    const wrapper = mount(BaseText, {
      props: { tag: 'p' },
      slots: { default: testText }
    })
    expect(wrapper.text()).toContain(testText)
  })
})

import { cn } from '../lib/utils'

describe('cn', () => {
  it('應該合併多個 class 名稱', () => {
    const result = cn('class1', 'class2', 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('應該處理條件 class', () => {
    const result = cn('base', true && 'conditional', false && 'hidden')
    expect(result).toBe('base conditional')
  })

  it('應該處理物件形式的 class', () => {
    const result = cn('base', { active: true, disabled: false })
    expect(result).toBe('base active')
  })

  it('應該過濾掉 falsy 值', () => {
    const result = cn('base', null, undefined, '', false, 'valid')
    expect(result).toBe('base valid')
  })

  it('應該合併 Tailwind 類別', () => {
    const result = cn('text-red-500', 'text-blue-500')
    expect(result).toBe('text-blue-500') // tailwind-merge 會保留最後一個
  })
})

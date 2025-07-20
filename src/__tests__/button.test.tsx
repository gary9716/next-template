import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../components/ui/button'

describe('Button', () => {
  it('應該渲染按鈕文字', () => {
    render(<Button>測試按鈕</Button>)

    const button = screen.getByRole('button', { name: '測試按鈕' })
    expect(button).toBeInTheDocument()
  })

  it('應該支援點擊事件', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>點擊我</Button>)

    const button = screen.getByRole('button', { name: '點擊我' })
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('應該支援不同變體', () => {
    const { rerender } = render(<Button variant="default">預設</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-primary')

    rerender(<Button variant="outline">外框</Button>)
    expect(screen.getByRole('button')).toHaveClass('border-input')
  })

  it('應該支援不同尺寸', () => {
    const { rerender } = render(<Button size="default">預設</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-9')

    rerender(<Button size="lg">大型</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-10')
  })
})

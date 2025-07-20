import { render, screen } from '@testing-library/react'
import Home from '../app/(pages)/page'

describe('Home', () => {
  it('應該渲染歡迎標題', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('歡迎使用 Next.js + shadcn/ui')
  })

  it('應該渲染描述文字', () => {
    render(<Home />)

    const description = screen.getByText(
      /這是一個使用 TypeScript、Tailwind CSS 和 shadcn\/ui 構建的現代化 Next.js 專案/
    )
    expect(description).toBeInTheDocument()
  })

  it('應該渲染兩個按鈕', () => {
    render(<Home />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('開始使用')
    expect(buttons[1]).toHaveTextContent('了解更多')
  })

  it('應該渲染三個功能卡片', () => {
    render(<Home />)

    const typeScriptCard = screen.getByText('TypeScript')
    const tailwindCard = screen.getByText('Tailwind CSS')
    const shadcnCard = screen.getByText('shadcn/ui')

    expect(typeScriptCard).toBeInTheDocument()
    expect(tailwindCard).toBeInTheDocument()
    expect(shadcnCard).toBeInTheDocument()
  })
})

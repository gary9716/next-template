import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            歡迎使用 Next.js + shadcn/ui
          </h1>
          <p className="text-xl text-muted-foreground">
            這是一個使用 TypeScript、Tailwind CSS 和 shadcn/ui 構建的現代化
            Next.js 專案
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">開始使用</Button>
          <Button variant="outline" size="lg">
            了解更多
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">TypeScript</h3>
            <p className="text-sm text-muted-foreground">完整的型別安全支援</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground">實用優先的 CSS 框架</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">shadcn/ui</h3>
            <p className="text-sm text-muted-foreground">可重用的 UI 元件庫</p>
          </div>
        </div>
      </div>
    </div>
  )
}

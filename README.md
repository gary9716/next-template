# Next.js + TypeScript + shadcn/ui 模板

這是一個現代化的 Next.js 專案模板，整合了 TypeScript、Tailwind CSS 和 shadcn/ui 元件庫。

## 技術棧

- **Next.js 15** - React 框架
- **TypeScript** - 型別安全
- **Tailwind CSS** - 實用優先的 CSS 框架
- **shadcn/ui** - 可重用的 UI 元件庫
- **Yarn** - 套件管理器

## 開始使用

### 安裝依賴

```bash
yarn install
```

### 啟動開發伺服器

```bash
yarn dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置生產版本

```bash
yarn build
```

### 啟動生產伺服器

```bash
yarn start
```

### 執行測試

```bash
# 執行所有測試
yarn test

# 監視模式執行測試
yarn test:watch

# 執行測試並生成覆蓋率報告
yarn test:coverage
```

## 專案結構

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # 全域樣式
│   ├── layout.tsx      # 根佈局
│   ├── page.tsx        # 首頁
│   └── api/            # API 路由
│       └── health/     # 健康檢查端點
│           └── route.ts
├── components/         # 可重用元件
│   └── ui/            # shadcn/ui 元件
├── lib/               # 工具函數
│   └── utils.ts       # 通用工具函數
├── __tests__/         # 測試檔案
│   ├── page.test.tsx  # 首頁測試
│   ├── button.test.tsx # 按鈕元件測試
│   ├── utils.test.ts  # 工具函數測試
│   └── api/           # API 測試
│       └── health.test.ts
└── types/             # TypeScript 類型定義
    └── testing.d.ts   # 測試相關類型
```

## 新增 shadcn/ui 元件

```bash
npx shadcn@latest add [component-name]
```

例如：

```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## 自訂

- 編輯 `tailwind.config.js` 來自訂 Tailwind CSS 設定
- 編輯 `src/app/globals.css` 來自訂全域樣式
- 編輯 `components.json` 來自訂 shadcn/ui 設定
- 編輯 `jest.config.js` 來自訂測試設定

## 測試

專案已配置完整的測試環境：

- **Jest** - 測試框架
- **@testing-library/react** - React 元件測試
- **@testing-library/jest-dom** - 額外的 Jest 匹配器
- **@testing-library/user-event** - 使用者互動測試

測試檔案位於 `src/__tests__/` 目錄中，包含：

- 元件測試
- 頁面測試
- 工具函數測試
- API 端點測試

## API 端點

### GET /api/health

健康檢查端點，用於監控應用程式狀態。

**響應範例：**

```json
{
  "status": "healthy",
  "timestamp": "2025-07-20T17:25:50.683Z",
  "uptime": 473.863712125,
  "environment": "development",
  "version": "0.1.0"
}
```

**測試：**

```bash
curl http://localhost:3000/api/health
```

## Docker 部署

### 構建 Docker 映像

```bash
# 使用構建腳本
./scripts/build-docker.sh

# 或直接使用 docker build
docker build -t next-template .

# 構建開發環境
./scripts/build-docker.sh --dev
```

### 使用 Docker Compose

```bash
# 生產環境
docker-compose up -d

# 開發環境
docker-compose --profile dev up -d app-dev
```

### 環境變數

- `GH_TOKEN`: GitHub 個人訪問令牌（用於私有包）
- `BUILD`: 構建版本標識
- `NEXT_PUBLIC_ENV`: 公共環境變數
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Google 客戶端 ID

### 健康檢查

容器包含健康檢查端點，會自動監控應用狀態：

```bash
# 檢查容器健康狀態
docker ps
```

## 了解更多

- [Next.js 文件](https://nextjs.org/docs)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)
- [shadcn/ui 文件](https://ui.shadcn.com)
- [TypeScript 文件](https://www.typescriptlang.org/docs)

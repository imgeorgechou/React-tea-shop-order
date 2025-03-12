# React 茶飲訂單系統

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white)
![Bulma](https://img.shields.io/badge/Bulma-CSS-00D1B2?logo=bulma&logoColor=white)

一個使用 React 與 TypeScript 開發的現代化茶飲訂單系統，提供直覺的使用者介面以便客戶選擇及定制他們的茶飲訂單。

## 💻 線上展示

[點點茶訂單系統展示](https://react-tea-shop-order.vercel.app/)

## ✨ 功能特色

- 🍵 **客製化茶飲選項**：提供多種茶品、配料、甜度與冰塊選擇
- 🧋 **奶蓋選項**：可為茶飲添加奶蓋，增添口感層次
- 🛒 **訂單管理**：即時計算價格，輕鬆新增或刪除訂單項目
- 📝 **訂單摘要**：生成清晰的訂單摘要與收據，包含隨機訂單編號
- 📱 **響應式設計**：使用 Bulma CSS 框架實現跨裝置的良好用戶體驗

## 🛠️ 技術棧

- **前端框架**：React
- **程式語言**：TypeScript
- **CSS 框架**：Bulma
- **圖標**：Font Awesome
- **狀態管理**：React Hooks (useState)
- **元件設計**：函數式元件 + TypeScript 介面

## 💡 實現特色

### 類型安全的表單處理

使用 TypeScript 介面與枚舉確保表單數據的類型安全性：

```typescript
// 訂單項目介面範例
interface Item {
  tea: Tea;
  withFoam: boolean;
  size: Size;
  sugar: number;
  ice: number;
  toppings: Topping[];
  quantity: number;
}
```

### 組件化設計

將系統分解為多個可重用元件，遵循關注點分離原則：

- `OrderForm`：處理用戶輸入與茶飲自定義選項
- `OrderList`：管理訂單列表與計算總價
- `Receipt`：生成訂單收據與詳情展示

### 狀態管理

使用 React Hooks 進行有效的狀態管理，實現元件間資料流：

```tsx
// 在 Teashop 中管理訂單狀態並傳遞給子元件
const [orders, setOrders] = useState<Order[]>([]);
const [isPlaced, setIsPlaced] = useState<boolean>(false);
```

### 條件渲染

根據用戶操作動態切換介面：

```tsx
{!isPlaced ? (
  <>
    <OrderForm onAddOrder={addOrder} />
    <OrderList orders={orders} onRemoveOrder={removeOrder} onSubmitOrder={handleSubmitOrder} />
  </>
) : (
  <Receipt orders={receiptData?.orders || []} orderDate={receiptData?.orderDate || ''} ... />
)}
```

## 🌟 學習成果與挑戰

在這個專案中，我專注於：

1. 使用 TypeScript 與 React 構建類型安全的應用
2. 實現元件間的有效資料傳遞與狀態管理
3. 創建直覺且響應式的用戶介面
4. 處理表單輸入與驗證
5. 實現訂單處理與收據生成功能

主要挑戰包括：

- 設計合理的元件階層結構以便有效資料流通
- 使用 TypeScript 進行嚴格類型檢查，確保型別安全
- 實現表單狀態與訂單數據的同步更新

## 🔧 開發與執行

### 安裝相依套件

```bash
npm install
```

### 啟動開發伺服器

```bash
npm start
```

### 建置生產版本

```bash
npm run build
```

## 🔍 未來改進方向

- 整合後端 API 進行訂單持久化
- 添加用戶認證與訂單歷史記錄功能
- 實現庫存管理與自動庫存更新
- 優化移動端體驗

---

💼 \_本專案為「React 從入門到入行」Udemy 線上課程 之作品

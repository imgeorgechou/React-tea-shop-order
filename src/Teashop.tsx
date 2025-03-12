import { FC, useState } from "react";
import { OrderForm } from "./OrderForm";
import { OrderList } from "./OrderList";
import { Item } from "./models/item";
import { Order } from "./models/Order";
import { Size } from "./models/Size";
import { Receipt } from "./Receipt";

export const Teashop: FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  // 新增兩個狀態變數
  const [isPlaced, setIsPlaced] = useState<boolean>(false);
  const [receiptData, setReceiptData] = useState<{
    orders: Order[];
    orderTime: string;
    orderDate: string;
    orderNumber: string;
  } | null>(null);

  const addOrder = (item: Item) => {
    // Calculate price (this is a simple example, adjust as needed)
    const basePrice = 30; // Base price for tea
    const foamPrice = item.withFoam ? 10 : 0;
    const toppingsPrice = item.toppings.length * 5;
    const sizeMultiplier =
      item.size === Size.LARGE ? 1.2 : item.size === Size.MEDIUM ? 1 : 0.8;

    const price =
      (basePrice + foamPrice + toppingsPrice) * sizeMultiplier * item.quantity;

    const newOrder: Order = {
      ...item,
      id: crypto.randomUUID(),
      price: Math.round(price),
    };

    setOrders([...orders, newOrder]);
  };

  const removeOrder = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };
  const handleSubmitOrder = () => {
    if (orders.length === 0) {
      alert("請先加入商品至訂單");
      return;
    }

    // 產生當前時間和日期
    const now = new Date();
    const orderTime = now.toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const orderDate = now.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // 產生隨機四位數訂單編號
    const orderNumber = Math.floor(1000 + Math.random() * 9000).toString();

    // 設置收據資料
    setReceiptData({
      orders: [...orders],
      orderTime,
      orderDate,
      orderNumber,
    });

    // 切換到收據畫面
    setIsPlaced(true);
  };

  return (
    <>
      <div className="hero has-background-info-light  is-fullheight">
        {!isPlaced ? (
          <>
            <OrderForm onAddOrder={addOrder} />
            <br />
            <OrderList
              orders={orders}
              onRemoveOrder={removeOrder}
              onSubmitOrder={handleSubmitOrder}
            />
          </>
        ) : (
          <div>
            <Receipt
              orders={receiptData?.orders || []}
              orderDate={receiptData?.orderDate || ""}
              orderTime={receiptData?.orderTime || ""}
              orderNumber={receiptData?.orderNumber || ""}
              onBackToShop={() => setIsPlaced(false)}
            />
          </div>
        )}
      </div>
    </>
  );
};

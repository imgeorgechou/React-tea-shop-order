import { FC } from "react";
import { Order } from "./models/Order";

interface ReceiptProps {
  orders: Order[];
  orderDate: string;
  orderTime: string;
  orderNumber: string;
  onBackToShop: () => void; // 新增返回購物功能
}

export const Receipt: FC<ReceiptProps> = ({
  orders,
  orderDate,
  orderTime,
  orderNumber,
}) => {
  // Calculate total price
  const totalPrice = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div>
      <div className="container mt-5 box">
        <div className="columns is-mobile has-text-centered">
          <div className="column">茶品</div>
          <div className="column">奶蓋</div>
          <div className="column">配料</div>
          <div className="column">容量</div>
          <div className="column">甜度</div>
          <div className="column">冰塊</div>
          <div className="column">數量</div>
          <div className="column">$</div>
        </div>
        <hr />

        {orders.length === 0 ? (
          <div className="has-text-centered my-5">尚無訂單</div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="columns is-mobile has-text-centered">
              <div className="column">{order.tea}</div>
              <div className="column">{order.withFoam ? "✓" : "-"}</div>
              <div className="column">
                {order.toppings.length > 0 ? order.toppings.join(", ") : "-"}
              </div>
              <div className="column">{order.size}</div>
              <div className="column">{order.sugar}</div>
              <div className="column">{order.ice}</div>
              <div className="column">{order.quantity}</div>
              <div className="column">${order.price}</div>
            </div>
          ))
        )}

        <div className="columns is-mobile">
          <div className="column is-size-4 has-text-right">
            總計: ${totalPrice}
          </div>
        </div>
        <hr />

        <div className="column is-12 has-text-centered">
          {orderDate} {orderTime}
        </div>

        <div className="column is-size-4 has-text-centered">訂單編號</div>
        <div className="column is-size-4  has-text-centered">{orderNumber}</div>
      </div>
    </div>
  );
};

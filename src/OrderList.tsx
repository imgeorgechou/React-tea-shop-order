import { FC } from "react";
import { Order } from "./models/Order";

interface OrderListProps {
  orders: Order[];
  onRemoveOrder: (id: string) => void;
  onSubmitOrder: () => void; // 新增提交訂單的函數
}

export const OrderList: FC<OrderListProps> = ({
  orders,
  onRemoveOrder,
  onSubmitOrder,
}) => {
  // Calculate total price
  const totalPrice = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="container">
      <div className="columns is-mobile has-text-centered mt-3">
        <div className="column">茶品</div>
        <div className="column">奶蓋</div>
        <div className="column">配料</div>
        <div className="column">容量</div>
        <div className="column">甜度</div>
        <div className="column">冰塊</div>
        <div className="column">數量</div>
        <div className="column">$</div>
        <div className="column">操作</div>
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
            <div className="column">
              <button
                className="button is-small is-danger"
                onClick={() => onRemoveOrder(order.id)}
              >
                刪除
              </button>
            </div>
          </div>
        ))
      )}

      <div className="columns is-mobile">
        <div className="column is-size-4 has-text-right">
          總計: ${totalPrice}
        </div>
      </div>
      <div className="field is-flex is-justify-content-flex-end">
        <div className="control">
          <button className="button is-link" onClick={onSubmitOrder}>
            送出
          </button>
        </div>
      </div>
    </div>
  );
};

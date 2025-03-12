import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";
import { Tea } from "./models/Tea";
import { Topping } from "./models/Topping";
import { Size } from "./models/Size";
import { Item } from "./models/item";
import { Drink } from "./drink";

interface OrderFormProps {
  onAddOrder: (item: Item) => void;
}

export const OrderForm: FC<OrderFormProps> = ({ onAddOrder }) => {
  const [tea, setTea] = useState<Tea>(Tea.BLACK_TEA);
  const [foam, setFoam] = useState<boolean>(false);
  const [size, setSize] = useState<Size>(Size.LARGE);
  const [sugar, setSugar] = useState<number>(4);
  const [ice, setIce] = useState<number>(3);
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleTeaChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTea(e.target.value as Tea);
  };
  const handleFoamChange: ChangeEventHandler<HTMLInputElement> = () => {
    setFoam(!foam);
  };
  const handleSizeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSize(e.target.value as Size);
  };
  const handleSugarChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSugar(parseInt(e.target.value));
  };
  const handleIceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIce(parseInt(e.target.value));
  };
  const handleToppingsChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) setToppings([...toppings, e.target.value as Topping]);
    else setToppings(toppings.filter((t) => t !== (e.target.value as Topping)));
  };
  const handleQuantityInc = () => setQuantity(quantity + 1);
  const handleQuantityDec = () =>
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  const handleQuantityInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setQuantity(parseInt(e.target.value));
  const handleQuantityInputBlur: FocusEventHandler<HTMLInputElement> = () =>
    setQuantity(isNaN(quantity) || quantity < 1 ? 1 : quantity);

  const handleAddOrder = () => {
    const newItem: Item = {
      tea,
      withFoam: foam,
      size,
      sugar,
      ice,
      toppings,
      quantity,
    };
    onAddOrder(newItem);

    // Reset form after adding
    setTea(Tea.BLACK_TEA);
    setFoam(false);
    setSize(Size.LARGE);
    setSugar(4);
    setIce(3);
    setToppings([]);
    setQuantity(1);
  };

  return (
    <div>
      <div className="container cloumns box mt-5 ">
        <div className="column-6 pt-5">
          <Drink
            item={{ tea, withFoam: foam, size, sugar, ice, toppings, quantity }}
          />
        </div>
        <div className="columns is-align-items-center is-mobile">
          <div className="field column is-3">
            <label className="label">茶品</label>
            <div className="control">
              <div className="select">
                <select value={tea} onChange={handleTeaChange}>
                  {Object.entries(Tea).map(([k, v]) => (
                    <option value={v} key={k}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field column is-3 ">
            <div className="control mt-5">
              <label className="checkbox">
                <input
                  type="checkbox"
                  className="mx-2 "
                  checked={foam}
                  onChange={handleFoamChange}
                />
                加奶蓋
              </label>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">大小</label>
            {Object.entries(Size).map(([k, v]) => (
              <label className="radio mx-1" key={k}>
                <input
                  type="radio"
                  name="question"
                  value={v}
                  checked={size === v}
                  onChange={handleSizeChange}
                />
                {v}
              </label>
            ))}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">甜度</label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="sugar"
                onChange={handleSugarChange}
                checked={sugar === 0}
                value={0}
              />
              0
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="sugar"
                onChange={handleSugarChange}
                checked={sugar === 1}
                value={1}
              />
              1
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="sugar"
                onChange={handleSugarChange}
                checked={sugar === 2}
                value={2}
              />
              2
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="sugar"
                onChange={handleSugarChange}
                checked={sugar === 3}
                value={3}
              />
              3
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="sugar"
                onChange={handleSugarChange}
                checked={sugar === 4}
                value={4}
              />
              4
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">冰塊</label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="ice"
                onChange={handleIceChange}
                checked={ice === 0}
                value={0}
              />
              0
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="ice"
                onChange={handleIceChange}
                checked={ice === 1}
                value={1}
              />
              1
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="ice"
                onChange={handleIceChange}
                checked={ice === 2}
                value={2}
              />
              2
            </label>
            <label className="radio mx-1">
              <input
                type="radio"
                name="ice"
                onChange={handleIceChange}
                checked={ice === 3}
                value={3}
              />
              3
            </label>
          </div>
        </div>
        <div className="field ">
          <label className="label">配料</label>
          <div className="control">
            <div className="checkboxes">
              {Object.entries(Topping).map(([k, v]) => (
                <label className="checkbox" key={k}>
                  <input
                    value={v}
                    checked={toppings.includes(v)}
                    onChange={handleToppingsChange}
                    type="checkbox"
                    className="mx-1"
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="fields ">
          <label className="label">數量</label>
          <div
            className="is-flex is-align-items-center has-addons"
            style={{ maxWidth: "35%" }}
          >
            <p className="control">
              <button className="button  control " onClick={handleQuantityDec}>
                <span className="icon">
                  <FontAwesomeIcon icon={faMinus} />
                </span>
              </button>
            </p>
            <p className="control">
              <input
                className="input has-text-centered "
                type="number"
                min={1}
                value={quantity}
                onChange={handleQuantityInputChange}
                onBlur={handleQuantityInputBlur}
              />
            </p>
            <p className="control">
              <button className="control button " onClick={handleQuantityInc}>
                <span className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </button>
            </p>
          </div>
        </div>
        <br />

        <div className="field is-grouped is-justify-content-flex-end">
          <div className="control">
            <button className="button is-link" onClick={handleAddOrder}>
              新增
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

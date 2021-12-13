import React, { useState } from "react";

const DrinkInputGroup = ({ onSubmit }) => {
  const defaultOrder = {
    name: "",
    options: "",
    buyer: "",
    id: Math.random()
  };
  const [order, setOrder] = useState(defaultOrder);

  const handleAddOrderItem = (e) => {
    const orderItem = e.currentTarget.getAttribute("data-role");
    setOrder({ ...order, [orderItem]: e.currentTarget.value.trim() });

    //這裡order印出的value值為何會是前一個打的valueＱＱ
    console.log("inner", order);
  };
  // console.log(order);
  const handleAddOrder = (e) => {
    let allInputsDone = true;
    const orderValuesArr = Object.values(order);
    orderValuesArr.forEach((orderValue) => {
       if(orderValue === ""){allInputsDone = false}
    });

    if (allInputsDone && onSubmit) {
      onSubmit(order);
      setOrder(defaultOrder);
    } else if (!allInputsDone) {
      console.log("請填完全");
    } else if (!onSubmit) {
      console.log("沒有onSubmit的props :(");
    }
    // console.log(order);
  };

  return (
    <div className="input-group mb-3">
      <input
        value={order.buyer || ""}
        type="text"
        className="form-control"
        placeholder="訂購人"
        data-role="buyer"
        onChange={handleAddOrderItem}
      />
      <input
        value={order.name || ""}
        type="text"
        className="form-control"
        placeholder="飲品名稱"
        data-role="name"
        onChange={handleAddOrderItem}
      />
      <input
        value={order.options || ""}
        type="text"
        className="form-control mr-1"
        placeholder="糖度冰塊"
        data-role="options"
        onChange={handleAddOrderItem}
      />
      <button className="btn btn-primary" onClick={handleAddOrder}>
        新增
      </button>
    </div>
  );
};

export default DrinkInputGroup;

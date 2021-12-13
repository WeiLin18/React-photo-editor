import React, { useState } from "react";
import DrinkCard from "./DrinkCard";
import DrinkInputGroup from "./DrinkInputGroup";
import "./styles.css";

/**
 * hint:
 * 更新狀態時記得使用 immutable 的方式
 * ex. setDrinks([...drinks, newDrink])
 */

const App = () => {
  const originalDrinks = [
    {
      name: "烏龍綠",
      options: "半糖去冰",
      buyer: "kk",
      id: Math.random()
    },
    {
      name: "清茶",
      options: "無糖去冰",
      buyer: "Jan",
      id: Math.random()
    },
    {
      name: "珍奶",
      options: "無糖少冰",
      buyer: "ken",
      id: Math.random()
    }
  ];
  const [drinks, setDrinks] = useState(originalDrinks);
  const addDrink = (order) => {
    setDrinks([order, ...drinks]);
  };

  const deleteDrink = (deleteDrinkId) => {
    // console.log(deleteDrinkId);

    const targetDrinkIndex = drinks.findIndex(
      (drink) => drink.id === deleteDrinkId
    );
    // console.log(targetDrinkIndex);
    if (targetDrinkIndex > -1) {
      const beforeDeleteDrinkArr = drinks.slice(0, targetDrinkIndex);
      const afterDeleteDrinkArr = drinks.slice(targetDrinkIndex + 1);
      setDrinks([...beforeDeleteDrinkArr, ...afterDeleteDrinkArr]);
    }
  };
  return (
    <main className="py-5">
      <div className="container">
        <DrinkInputGroup onSubmit={addDrink} />
        {drinks.map((drink, index) => (
          <DrinkCard
            key={index}
            buyer={drink.buyer}
            name={drink.name}
            options={drink.options}
            id={drink.id}
            onDelete={deleteDrink}
          />
        ))}
      </div>
    </main>
  );
};

export default App;

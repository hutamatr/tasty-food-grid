import React from "react";

import FoodData from "../content-data/FoodData";

const Main = () => {
  const foods = FoodData.map((food) => {
    return (
      <li
        key={food.id}
        className="mx-auto shadow-md hover:scale-95 hover:duration-500 hover:overflow-hidden hover:rounded-lg"
      >
        <img
          src={food.image}
          alt={`food-${food.id}`}
          className="hover:scale-110 hover:duration-700"
        />
      </li>
    );
  });

  return (
    <main>
      <section className="container mx-auto px-4 my-8">
        <ul className="grid gap-3 md:grid-cols-3  md:px-12">{foods}</ul>
      </section>
    </main>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./home.css";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data?.meals));
  }, []);

  const deleteHandler = (id) => {
    const leftItem = cart.filter((item) => item.idMeal !== id);
    setCart(leftItem);
  };
  return (
    <div>
      <div className="home-container">
        <div className="meal-side">
          {meals.map((meal) => (
            <Meal
              meal={meal}
              key={meal.idMeal}
              cart={cart}
              setCart={setCart}
            ></Meal>
          ))}
        </div>
        <div className="cart-side">
          <h3 id="selectedH4">selected meal : </h3>
          <div>
            <p className="cart-meal-name">
              {cart.map((cartElem) => (
                <h4>
                  {" "}
                  {cartElem.strMeal}{" "}
                  <button
                    className="cart-delete-btn"
                    onClick={() => deleteHandler(cartElem.idMeal)}
                  >
                    delete
                  </button>
                </h4>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

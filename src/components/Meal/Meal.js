import React from "react";
import logo from "../../logo.svg";
import "./meal.css";


const Meal = ({ meal, cart, setCart }) => {
  const { strMealThumb, idMeal, strMeal, strInstructions } = meal;
  const defaultUndefinedMsgForMeal =
    "here is no description available for this food. if you want to know about more this food please search google this food by name.";

  const handleAddToCart = (id) => {
    const isThisAdded = cart.find((item) => item.idMeal === id);

    if (isThisAdded) {
      alert("this item already added!");
      return;
    } 
    const mealInfo = {
      strMeal,
      idMeal,
      strInstructions,
    };
    if (cart) {
      setCart([...cart, mealInfo]);
    } else {
      setCart([mealInfo]);
    }
  };
  return (
    <div>
      <div className="meal-card">
        <img src={strMealThumb ? strMealThumb : `${logo}`} alt="" />
        <p>
          {strInstructions
            ? strInstructions.slice(0, 150)
            : `${defaultUndefinedMsgForMeal}`}
        </p>
        <h4>{strMeal}</h4>
        <button className="meal-btn" onClick={() => handleAddToCart(idMeal)}>
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default Meal;

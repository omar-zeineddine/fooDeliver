import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();

  const [basket, setBasket] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  // query basket
  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, restaurant]);

  const addDishToBasket = async (dish, quantity) => {
    // keep track of basket
    // get existing basket or create a new one
    let theBasket = basket || (await createNewBasket());

    // create a BasketDish item and save to DataStore
    DataStore.save(
      new BasketDish({ quantity, Dish: dish, basketID: theBasket.id })
    );
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  return (
    <BasketContext.Provider value={{ addDishToBasket, setRestaurant }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

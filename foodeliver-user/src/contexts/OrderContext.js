import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, Basket, Restaurant } from "../models";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const { restaurant } = useBasketContext();

  const createOrder = async () => {
    // console.warn("abc");
    // create order
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        Restaurant: restaurant,
        status: "NEW",
        total: totalPrice,
      })
    );

    // add basktDishes  to order
    // delete basket
  };
  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);

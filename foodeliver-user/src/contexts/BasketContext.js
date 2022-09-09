import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";

const BasketContext = createContext({});
const BasketContextProvider = ({ children }) => {
  return <BasketContextProvider>{children}</BasketContextProvider>;
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

import { createContext, useContext, useEffect, useReducer } from "react";

import { ProductReducer } from "../Reducers/ProductReducer";
import { inventoryData } from "../Data/data";

export const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const initialState = {
    products: [],
    filteredProducts: [],
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: [...inventoryData] });
  });
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

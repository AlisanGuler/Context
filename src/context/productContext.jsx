import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("all");

  console.log(selectedCategory);

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  console.log(products)
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}

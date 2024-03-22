import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("sepet", []);

  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      const updated = { ...found, amount: found.amount + 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      setBasket(newBasket);
      toast.success(`Ürün adedi artırıldı ${updated.amount}`)

    } else {
      setBasket(basket.concat({ ...newProduct, amount: 1 }));
      toast.success("Ürün Sepete Eklendi")

    }
  };

  const removeFromBasket = (delete_id) => {
    const filtered = basket.filter((a) => a.id !== delete_id);
    setBasket(filtered);

    toast.error("Ürün Sepetten Kaldırıldı")
  };

  const decreaseAmount = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);
    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      setBasket(newBasket);
      toast.info(`Ürünün miktarı azaltıldı ${updated.amount}`)
    } else {
      removeFromBasket(delete_id);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, removeFromBasket, addToBasket, decreaseAmount }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

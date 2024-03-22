import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const capFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const handleDelete = (dlt) => {
  product && delete product.id;
};

const BasketItem = ({ product }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  // console.log(product);
  return (
    <div className="d-flex justify-content-between align-items-center mt-2 gap-4 bg-black rounded p-2 p-md-4">
      <div className="border bg-white rounded-3 ">
        <img
          className="object-fit-contain"
          width={80}
          height={80}
          src={product.image}
          alt={product.title}
        />
      </div>

      <div>
        <p className="fw-bold text-truncate">
          {product.title.length > 15
            ? product.title.slice(0, 15) + "..."
            : product.title}
        </p>
        <p>Kategori: {capFirstLetter(product.category)}</p>
        <p>Değerlendirme: {product.rating.rate}</p>
      </div>
      <div className="flex-grow-1 d-flex gap-3 flex-column-reverse flex-md-row align-items-center">
        <div className="d-flex gap-3 align-items-center bg-dark rounded-4 overflow-hidden btn-wrapper">
          <button onClick={() => decreaseAmount(product.id)}> - </button>
          <span>{product.amount}</span>
          <button onClick={() => addToBasket(product)}> + </button>
        </div>

        <h4 className="flex-grow-1">{"$" + product.price * product.amount}</h4>
        <button
          onClick={() => removeFromBasket(product.id)}
          className="btn btn-danger rounded-3 d-none d-md-block"
        >
          Sil
        </button>
      </div>
    </div>
  );
};
export default BasketItem;

import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="mt-5 p-2">
      <h1 className="text-center">Sepet</h1>
      <div className="row g-3">
        <div className="col-lg-8">
          <div>
            {basket.length === 0 ? (
              <div className="text-center my-5">
                <p>Sepetiniz Boş</p>
                <Link to={"/"} className="btn btn-danger px-4 py-2">
                  Ürünlere Git
                </Link>
              </div>
            ) : (
              basket.map((product) => (
                <BasketItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
        <div className="d-flex flex-column gap-4 col-lg-4 bg-dark p-5">
          <h3>
            Toplam Ürün: <span className="text-danger">{totalAmount}</span>
          </h3>
          <h3>
            Toplam Fiyat: <span className="text-danger">${totalPrice}</span>
          </h3>
          <button className="btn btn-danger rounded-2 mt-5 satin">Satın Al</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

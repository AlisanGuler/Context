import Loader from "../components/Loader";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";
import Card from "../components/Card";

const MainPage = () => {
  const { products, selectedCategory } = useContext(ProductContext);

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h1 className="container my-5 mt-5 pt-5 p-md-5">{selectedCategory}</h1>
      <div className="d-flex mt-5 flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5 mt-5">
        {!products ? (
          <Loader />
        ) : (
          products.map((Item) => <Card product={Item} key={Item.id} />)
        )}
      </div>
    </div>
  );
};

export default MainPage;

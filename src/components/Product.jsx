import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartAction";

const Product = ({ id, title, price, rating, image, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>${price}</p>
      <img src={image} />
      {/* All props get added to the store. */}
      <button
        onClick={() =>
          dispatch(addToCart(id, title, price, rating, image, quantity))
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

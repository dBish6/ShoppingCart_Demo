import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";

import Subtotal from "../components/Subtotal";
import { selectCart } from "../redux/cartSelectors";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartAction";

const Checkout = () => {
  // Allows to extract data from the Redux store.
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div className="checkout">
      <div className="checkout_items">
        {Object.values(cart).map((item) => {
          return (
            <div className="checkout_product" key={item.id}>
              <img src={item.image} />
              <div className="checkout_product_info">
                <h3>{item.title}</h3>
                <p>{item.rating}</p>
                <p>${item.price}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
                </button>
                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id, item.quantity))
                    }
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id, item.quantity))
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Subtotal />
    </div>
  );
};

export default Checkout;

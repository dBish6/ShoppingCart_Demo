import React from "react";
import { useSelector } from "react-redux";
import { getCartLength, getTotal } from "../redux/cartReducer";
import { selectCart } from "../redux/cartSelectors";

const Subtotal = () => {
  // Allows to extract data from the Redux store.
  // const cart = useSelector((state) => state.cart);
  const cart = useSelector(selectCart);

  return (
    <div className="subtotal">
      <div className="subtotal_area">
        <p>
          Subtotal ({getCartLength(cart)} items): ${getTotal(cart)}
          {/* cart.cart is object array. */}
        </p>
        <button>Proceed with Checkout</button>
      </div>
    </div>
  );
};

export default Subtotal;

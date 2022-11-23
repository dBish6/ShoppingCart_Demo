import React from "react";
import { Link } from "react-router-dom";
import { selectCart } from "../redux/cartSelectors";
import { getCartLength } from "../redux/cartReducer";
import { useSelector } from "react-redux";

const Header = () => {
  // Allows to extract data from the Redux store.
  // const cart = useSelector((state) => state.cart);
  const cart = useSelector(selectCart);
  // console.log("cart: " + cart.cart.length);
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "1rem",
      }}
    >
      <Link
        to="/"
        style={{
          color: "slateblue",
        }}
      >
        Go Back
      </Link>
      <div className="header_end">
        <Link
          to="/checkout"
          style={{
            textDecoration: "none",
            color: "slateblue",
          }}
        >
          <span>
            Cart <strong>{getCartLength(cart)}</strong>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Product from "../components/Product";
import image1 from "../images/sunglasses.jpg";
import image2 from "../images/pepsi.jpg";
import image3 from "../images/bottle.jpg";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/cartSelectors";
import "./home.css";

const Home = () => {
  const cart = useSelector(selectCart);
  const getQuantityByProductId = (id) => (id in cart ? cart[id].quantity : 0);

  return (
    <div className="home">
      <div>
        <Product
          id="1"
          title="Sunglasses"
          price="50"
          rating="⭐⭐⭐⭐⭐"
          image={image1}
          quantity={getQuantityByProductId("1")}
        />
        <Product
          id="2"
          title="Can of Pepsi Max"
          price="5"
          rating="⭐⭐⭐⭐⭐"
          image={image2}
          quantity={getQuantityByProductId("2")}
        />
      </div>
      <div>
        <Product
          id="3"
          title="Thermos"
          price="60"
          rating="⭐⭐⭐⭐"
          image={image3}
          quantity={getQuantityByProductId("3")}
        />
      </div>
    </div>
  );
};

export default Home;

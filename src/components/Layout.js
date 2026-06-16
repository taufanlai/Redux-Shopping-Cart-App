import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import cartSlice, { selectTotalPrice } from "../store/cart-slice";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = useSelector(selectTotalPrice);
  let showCart = useSelector((state) => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems/>} 
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;

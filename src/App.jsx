import { useState } from "react";

import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import Footer from "./components/Footer";

import items from "./data/shop";
import "./styles/index.css";

export default function App() {
  const [shopItems, setShopItems] = useState(items);
  const [cartItems, setCartItems] = useState(cartItems);

  return (
    <div className="App">
      <Header shopItems={shopItems} />
      <main id="cart">
        <h2>Your Cart</h2>
        <CartItems cartItems={cartItems} shopItems={shopItems} />
        <CartTotal />
      </main>
      <Footer />
    </div>
  );
}

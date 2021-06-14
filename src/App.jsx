import { useState } from "react";

import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import Footer from "./components/Footer";

import greenGrocers from "./data/shop";
import "./styles/index.css";

export default function App() {
  const [shopItems, setShopItems] = useState(greenGrocers);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(itemId) {
    const itemFound = cartItems.find((cartItem) => cartItem.id === itemId);
    if (itemFound !== undefined) {
      const cartUpdated = cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(cartUpdated);
    } else {
      const newCart = {
        id: itemId,
        quantity: 1,
      };
      setCartItems([...cartItems, newCart]);
    }
  }

  return (
    <div className="App">
      <Header shopItems={shopItems} addToCart={addToCart} />
      <main id="cart">
        <h2>Your Cart</h2>
        <CartItems
          cartItems={cartItems}
          setCartItems={setCartItems}
          shopItems={shopItems}
          addToCart={addToCart}
        />
        <CartTotal cartItems={cartItems} shopItems={shopItems} />
      </main>
      <Footer />
    </div>
  );
}

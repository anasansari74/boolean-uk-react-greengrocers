function CartItems(props) {
  function decreaseQuantity(itemId) {
    const itemFound = props.cartItems.find(
      (cartItem) => cartItem.id === itemId
    );
    if (itemFound.quantity === 1) {
      const cartUpdated = props.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      props.setCartItems(cartUpdated);
    } else {
      const cartUpdated = props.cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      props.setCartItems(cartUpdated);
    }
  }

  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {props.cartItems.map((cartItem) => {
          const storeItem = props.shopItems.find(
            (storeItem) => storeItem.id === cartItem.id
          );
          console.log(storeItem.name);
          return (
            <li>
              <img
                className="cart--item-icon"
                src={`assets/icons/${cartItem.id}.svg`}
                alt={storeItem.name}
              />
              <p>{storeItem.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={() => {
                  decreaseQuantity(cartItem.id);
                }}
              >
                -
              </button>
              <span className="quantity-text center">{cartItem.quantity}</span>
              <button
                className="quantity-btn add-btn center"
                onClick={() => {
                  props.addToCart(cartItem.id);
                }}
              >
                +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CartItems;

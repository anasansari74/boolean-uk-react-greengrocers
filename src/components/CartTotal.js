function CartTotal(props) {
  let total = 0;

  for (const cartItem of props.cartItems) {
    const storeItem = props.shopItems.find(
      (storeItem) => storeItem.id === cartItem.id
    );
    total += cartItem.quantity * storeItem.price;
  }

  return (
    <div class="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span class="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartTotal;

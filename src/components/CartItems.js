function CartItems(props) {
  function decreaseQuantity() {
    console.log("Removed one of the item");
  }

  function increaseQuantity() {
    console.log("Added one of the item");
  }

  return (
    <div class="cart--item-list-container">
      <ul class="item-list cart--item-list">
        <li>
          <img
            class="cart--item-icon"
            src="assets/icons/001-beetroot.svg"
            alt="beetroot"
          />
          <p>beetroot</p>
          <button
            class="quantity-btn remove-btn center"
            onClick={() => {
              decreaseQuantity();
            }}
          >
            -
          </button>
          <span class="quantity-text center">1</span>
          <button
            class="quantity-btn add-btn center"
            onClick={() => {
              increaseQuantity();
            }}
          >
            +
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CartItems;

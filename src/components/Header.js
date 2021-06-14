function Header(props) {
  function addItemToCart() {
    console.log("added to cart");
  }

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul class="item-list store--item-list">
        {props.shopItems.map((item, index) => (
          <li>
            <div key={index} class="store--item-icon">
              <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button
              onClick={() => {
                addItemToCart();
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;

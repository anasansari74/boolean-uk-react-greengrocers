function Header(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {props.shopItems.map((item, index) => (
          <li>
            <div key={index} className="store--item-icon">
              <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button
              onClick={() => {
                props.addToCart(item.id);
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

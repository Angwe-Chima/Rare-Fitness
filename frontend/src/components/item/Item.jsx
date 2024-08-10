import { Link } from "react-router-dom";
import "./item.css";
import formatCurrency from "../../utils/money";
import StarRating from "../star-rating/StarRating";
import { useContext, useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";

const Item = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [clicked, setClicked] = useState(false); // State to track button clicked

  // Check if the item is already in the cart
  const isInCart = cartItems[props.id] > 0;

  // Ensure that priceCents is a valid number
  const priceCents = props.priceCents ?? 0; // Default to 0 if undefined or null

  // Handle button click
  const handleButtonClick = () => {
    addToCart(props.id);
    setClicked(true); // Mark button as clicked
  };

  return (
    <div className="item">
      <div className="img-container">
        <Link to={`/product/${props.id}`} onClick={() => scrollTo(0, 0)}>
          <img src={props.imageUrl} alt={props.name} />
        </Link>
      </div>
      <div className="description">
        <h4>{props.name}</h4>
        <span>
          <StarRating rating={props.rating?.stars || 0} />
        </span>
        <p>${formatCurrency(priceCents)}</p>
        <div className="filler"></div>
        <button
          onClick={handleButtonClick}
          className={`item__addToCartBtn ${isInCart || clicked ? "in-cart" : ""}`}
          disabled={isInCart}
        >
          {isInCart || clicked ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Item;

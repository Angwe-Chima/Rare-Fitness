import { Link } from "react-router-dom";
import "./item.css";
import formatCurrency from "../../utils/money";
import StarRating from "../star-rating/StarRating";
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";


const Item = (props) => {
  const {addToCart} = useContext(ShopContext)

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
          <StarRating rating={props.rating.stars} />
        </span>
        <p>${formatCurrency(props.priceCents)}</p>
        <div className="filler"></div>
        <button onClick={() => addToCart(props.id)} className="item__addToCartBtn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;

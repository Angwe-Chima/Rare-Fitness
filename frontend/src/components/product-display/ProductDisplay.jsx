import './productDisplay.css'
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import StarRating from "../star-rating/StarRating";
import formatCurrency from '../../utils/money.js';
import { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
const productDisplay = (props, {handleShowComparison}) => {
  const { addToCart } = useContext(ShopContext)

  return (
    
    <div className="productDisplay flex-property">
      <div className="productDisplay--left">
        <img src={props.imageUrl} alt={props.name} />
      </div>

      <div className="productDisplay--right flex-property">
        <h2 className='productDisplay__title'>{props.name}</h2>
        <hr />
        <h3 className='productDisplay__price'>$ {formatCurrency(props.priceCents)}</h3>
        <div className='productDisplay__review flex-property'>
          <StarRating rating={props.rating.stars}/>
          <span>({props.rating.numberOfRatings} reviews)</span>
        </div>
        <hr />
        <div>
          <b>Brand: </b>{props.brand}
        </div>

        <div>
          <b>Categories: </b>{props.category}
        </div>
        
        <div>
          <b>Available in stock: </b><span className={props.stock > 20 ? "in-stock" : "out-of-stock"}>{props.stock}</span>
        </div>
        
        <button className='add-to-cart-btn' disabled={props.stock > 0 ? false : true}  onClick={() => addToCart(props.id)}><IoCartOutline/> Add to cart </button>
        
        <button onClick={handleShowComparison} className="flex-property compare">
          <span className='compare__icon'><MdOutlineCompareArrows/></span> <span>+ compare</span>
        </button>
        
        <div>
          <b>Shipping & Returns</b>
          <p>We offer free standard shipping on all orders within Lagos State for a limited time.Standard delivery within Lagos takes 1-3 business days.We accept returns and exchanges within 7 days of purchase for unworn and unwashed items with original tags attached.Customers are responsible for return shipping costs, unless the return is due to our mistake (e.g., wrong item sent).Exchanges are subject to product availability.</p>
        </div>

        <div>
          <b>Message: </b>Happy shopping!
        </div>
      </div>        
    </div>

  )
}

export default productDisplay



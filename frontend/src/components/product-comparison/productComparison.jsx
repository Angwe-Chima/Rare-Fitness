import { useState } from "react"
import Item from "../item/Item"
import './productCompare.css'
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const ProductCompare = ({filteredProducts, product}) => {
  const [compareIndex, setCompareIndex] = useState(0)

  const handleNextClick = () => {
    setCompareIndex(nextIndex => (nextIndex + 1) % filteredProducts.length)
  }

  const handlePrevClick = () => {
    setCompareIndex(prevIndex => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length)
  }
  
  return (
    <div>
      <div className="overlay">
      </div>
      <div className="productcompare">
      <h3>Compare products</h3>
      <div className="comparison">
        <div className="product">
          <Item {...product}/>
          <div className="product__details">
            <p>{product.stock > 0 ? "in-stock" : "out-of-stock"}</p>
            <p>Sales: {product.stock}</p>
          </div>
        </div>
        
        <span className='compare__icon'><MdOutlineCompareArrows size={50}/></span>

        <div className="product">
          <Item {...filteredProducts[compareIndex]}/>
          <div className="product__details">
            <p>{filteredProducts[compareIndex].stock}</p>
            <p>Sales: {filteredProducts[compareIndex].sales}</p>
          </div>
          <div className="changeProductToCompareBtn">
            <FaArrowLeft onClick={handlePrevClick}/>
            <FaArrowRight onClick={handleNextClick}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCompare
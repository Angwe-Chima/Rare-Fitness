
import { useContext } from 'react'
import Item from '../item/Item'
import './relatedProducts.css'
import { ShopContext } from '../../contexts/ShopContext'

const RelatedProducts = ({category}) => {
  const { products } = useContext(ShopContext)
  return (
    <div className="relatedProducts">
      <h2>You may also like</h2>
      <div className="relatedProducts__items">
        {products.filter(product => product.category === category).map((item, itemIndex) => {
          return <Item key={itemIndex} {...item}/>
        }).slice(0, 5)}
      </div>
    </div>
  )
}

export default RelatedProducts
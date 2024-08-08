import { useContext, useState } from 'react'
import { ShopContext } from '../../contexts/ShopContext'
import { useParams } from 'react-router-dom'
// import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import ProductDisplay from '../../components/product-display/ProductDisplay'
import '../product/product.css'
import RelatedProducts from '../../components/related-products/RelatedProducts'
import ProductCompare from '../../components/product-comparison/productComparison' 

const Product = () => {
  const [showComparison, setComparison] = useState(false)
  const { products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = products.find(product => product.id === Number(productId))

  const handleShowComparison = () => {
    setComparison(true)
  }

  const filteredProducts = products.filter(filteredProduct => filteredProduct.category === product.category && filteredProduct.id !== product.id)

  return (
    <div className='product'>
      {showComparison && (
        <ProductCompare
        filteredProducts={filteredProducts}
        product={product}
        />
      )}
      {/* <BreadCrumb {...product}/> */}
      <ProductDisplay {...product} setComparison={handleShowComparison}/>
      <RelatedProducts category={product.category}/>
    </div>
  )
}

export default Product
import { useContext, useState } from "react";
import shopBanner from "../../images/shop-banner.png";
import "./shop.css";
import { ShopContext } from "../../contexts/ShopContext";
import SideBar from "../../components/sidebar/SideBar";
import ShopProductDisplay from "../../components/shopProductDisplay/ShopProductDisplay";
import Item from "../../components/item/Item";
const Shop = (props) => {
  const { products } = useContext(ShopContext);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page
  // input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  // radio filter
  const handleChange = (e, type) => {
    console.log("Filter Type:", type);
    console.log("Selected Value:", e.target.value);

    if (type === "category") {
      setSelectedCategory(e.target.value);
    }
    if (type === "brand") {
      setSelectedBrand(e.target.value);
    }
  };



  function filterData(
    products,
    selectedCategory,
    selectedBrand,
    query,
    selectedPriceRange
  ) {
    let filteredProducts = products;

    // Filter by search input
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selectedCategory
      );
    }

    // Filter by brand
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(
        ({ brand }) => brand === selectedBrand
      );
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(
      ({ priceCents }) =>
        priceCents >= selectedPriceRange[0] &&
        priceCents <= selectedPriceRange[1]
    );

    return filteredProducts.map((product, i) => <Item key={i} {...product} />);
  }

  // Get filtered products based on search, category, brand, and price selection
  const result = filterData(
    products,
    selectedCategory,
    selectedBrand,
    query,
    selectedPriceRange
  );

  // Calculate indices for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = result.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages needed
  const totalPages = Math.ceil(result.length / productsPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="shop">
      <div className="shop-banner">
        <div className="shop-banner-left">
          <h2>SHOP WITH US AND GET THE RAREST FITS</h2>
          <p>
            Shop with Rare Fitness today and get a 50% discount on each purchase
          </p>
        </div>
        <div className="shop-banner-right">
          <img src={shopBanner} alt="shop-banner-img" />
        </div>
      </div>
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          value={query}
          placeholder="Search products..."
          onChange={handleInputChange}
        />
      </div>
      <div className="shop__main-container">
        <SideBar
          products={products}
          handleChange={handleChange}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand} // Pass down selectedBrand
          setSelectedBrand={setSelectedBrand} // Pass down setSelectedBrand
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />

        <div className="shop_productDisplay">
          <ShopProductDisplay products={currentProducts} />

          <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;

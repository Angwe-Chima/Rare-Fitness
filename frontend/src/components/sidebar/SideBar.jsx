import formatCurrency from "../../utils/money";
import "./sidebar.css";

const SideBar = ({
  products,
  handleChange,
  selectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedBrand,
}) => {
  const brands = [...new Set(products.map((product) => product.brand))];
  const categories = [...new Set(products.map((product) => product.category))];

  console.log(brands);
  
  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange([parseInt(e.target.value), selectedPriceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    setSelectedPriceRange([selectedPriceRange[0], parseInt(e.target.value)]);
  };

  return (
    <div className="sidebar">
      <h3>Filter By:</h3>
      <div className="filter">
        <h3>Brand:</h3>
        <div className="filter__item">
          <input
            type="radio"
            id="allBrands"
            value=""
            checked={!selectedBrand}
            onChange={(e) => handleChange(e, "brand")}
          />
          <label htmlFor="allBrands">All</label>
        </div>
        {brands.map((brand, i) => (
          <div className="filter__item" key={i}>
            <input
              type="radio"
              id={`${brand} - ${i}`}
              value={brand}
              checked={selectedBrand === brand}
              onChange={(e) => handleChange(e, "brand")}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
      <div className="filter">
        <h3>category:</h3>
        <div className="filter__item">
          <input
            type="radio"
            id="allCategory"
            value=""
            name="category"
            checked={!selectedCategory}
            onChange={(e) => handleChange(e, "category")}
          />
          <label htmlFor="allCategory">All</label>
        </div>
        {categories.map((category, i) => (
          <div className="filter__item" key={i}>
            <input
              type="radio"
              id={category}
              value={category}
              name="category"
              checked={selectedCategory === category}
              onChange={(e) => handleChange(e, "category")}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="filter">
        <h3>Price Range:</h3>
        <input
          type="range"
          min="0"
          max="100000"
          value={selectedPriceRange[0]}
          onChange={handlePriceRangeChange}
        />
        <input
          type="range"
          min="0"
          max="100000"
          value={selectedPriceRange[1]}
          onChange={handleMaxPriceChange}
        />
        <div>
          <span>${formatCurrency(selectedPriceRange[0])}</span> -{" "}
          <span>${formatCurrency(selectedPriceRange[1])}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

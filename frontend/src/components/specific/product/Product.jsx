import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import "./product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    imageUrl: "",
    rating: {
      stars: "",
      numberOfRatings: "",
    },
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/shop");
        console.log(response.data);
        setProducts(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      id: product._id,
      description: product.description,
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      imageUrl: product.imageUrl,
      rating: {
        stars: product.rating.stars,
        numberOfRatings: product.rating.numberOfRatings,
      },
    });
    setFormVisible(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/shop/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
      setFormVisible(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      rating: {
        ...prevData.rating,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedProduct) {
      try {
        await axios.put(`/shop/${formData.id}`, formData);
        const updatedProducts = products.map((product) =>
          product._id === formData.id ? formData : product
        );
        setProducts(updatedProducts);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await axios.post("/shop", formData);
        setProducts([...products, response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    setFormVisible(false);
  };

  const handleCreateClick = () => {
    setSelectedProduct(null);
    setFormData({
      id: "",
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      imageUrl: "",
      rating: {
        stars: "",
        numberOfRatings: "",
      },
    });
    setFormVisible(true);
  };

  return (
    <div className="products">
      <nav>
        <a href="/dashboard">DashBoard</a>
        <button onClick={handleCreateClick}>Create Product</button>
      </nav>
      <h1>Product Details</h1>
      <div className="allProducts">
        {products.map((product) => (
          <div key={product._id} onDoubleClick={() => handleEditClick(product)}>
            <h3>{product.name}</h3>
            <p>
              <span>Price:</span>
              {product.price}
            </p>
            <p>
              <span>Category: </span>
              {product.category}
            </p>
            <p className="description">
              <span>Description:</span>
              {product.description}
            </p>
            <p>
              <span>Stock: </span>
              {product.stock}
            </p>
            <a>
              <span>Image: </span>
              {product.imageUrl}
            </a>
            <div className="rates">
              <p>
                <span>Stars: </span>
                {product.rating.stars}
              </p>
              <p>
                <span>Ratings: </span>
                {product.rating.numberOfRatings}
              </p>
            </div>
          </div>
        ))}
      </div>

      {formVisible && (
        <div className="editForm">
          <h2>{selectedProduct ? "Edit Product" : "Create Product"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Name:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Price:</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Description:</span>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Category:</span>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Stock:</span>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Image URL:</span>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Stars:</span>
              <input
                type="number"
                name="stars"
                value={formData.rating.stars}
                onChange={handleRatingChange}
              />
            </label>
            <label>
              <span>Number of Ratings:</span>
              <input
                type="number"
                name="numberOfRatings"
                value={formData.rating.numberOfRatings}
                onChange={handleRatingChange}
              />
            </label>
            <div className="formBtns">
              <button className="save" type="submit">
                Save
              </button>
              <button type="button" onClick={() => setFormVisible(false)}>
                Cancel
              </button>
              {selectedProduct && (
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(formData.id)}
                  className="delete"
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Product;

import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../api/axios.js";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  return products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {});
};

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/shop-product");
        const fetchedProducts = response.data.data;

        setProducts(fetchedProducts);

        // Initialize cart with products
        setCartItems(() => {
          const storedCart = JSON.parse(localStorage.getItem("cart"));
          return storedCart || getDefaultCart(fetchedProducts);
        });
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  // Reduce item quantity in cart
  const reduceCartItemQty = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: 0 };
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = products.find((product) => product.id === Number(itemId));
      const itemPrice = item ? item.priceCents : 0;
      const itemQuantity = cartItems[itemId] || 0;
      console.log(`itemPrice: ${itemPrice}, itemQuantity: ${itemQuantity}`); // Debugging
      return total + (itemPrice * itemQuantity);
    }, 0);
  };

  // Get total number of items in cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => {
      return typeof qty === 'number' ? total + qty : total;
    }, 0);
  };

  // Handle order placement
  const PlacedOrder = () => {
    const defaultCart = getDefaultCart(products);
    setCartItems(defaultCart);
    localStorage.setItem("cart", JSON.stringify(defaultCart)); // Save to localStorage
    setOrderPlaced(true);
    console.log("Order placed");
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    reduceCartItemQty,
    removeItemFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    orderPlaced,
    PlacedOrder,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;

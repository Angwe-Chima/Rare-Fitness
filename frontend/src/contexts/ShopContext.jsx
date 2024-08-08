import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import products from "../data/product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {});
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || getDefaultCart();
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Reduce item quantity in cart
  const reduceCartItemQty = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 0) {
        newCart[itemId] -= 1;
      }
      return newCart;
    });
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      newCart[itemId] = 0;
      return newCart;
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = products.find((product) => product.id === Number(itemId));
      return item ? total + item.priceCents * cartItems[itemId] : total;
    }, 0);
  };

  // Get total number of items in cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle order placement
  const PlacedOrder = () => {
    setCartItems(getDefaultCart());
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

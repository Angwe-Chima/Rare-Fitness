import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext";
import formatCurrency from "../../utils/money";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./cartItem.css";

const CartItem = () => {
  const navigate = useNavigate();

  const {
    products,
    cartItems,
    addToCart,
    reduceCartItemQty,
    removeItemFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    placedOrder,
  } = useContext(ShopContext);

  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    if (selectedProductId !== null) {
      navigate(`/product/${selectedProductId}`);
    }
  }, [selectedProductId, navigate]);
  const shippingFee = 499;

  return (
    <div className="checkout-main">
      {getTotalCartItems() == 0 ? (
        <div className="popup">
          <h1>Your cart is empty 🔍</h1>
          <a href="/shop">
            <button>Shop Now </button>
          </a>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="order-summary">
            {products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div className="cartItem" key={e.id}>
                    <img
                      className="cartItem-image"
                      src={e.imageUrl}
                      alt={e.name}
                      onClick={() => setSelectedProductId(e.id)}
                    />
                    <div className="cartItem__details">
                      <h3>{e.name}</h3>
                      <p>${formatCurrency(e.priceCents)}</p>
                    </div>
                    <div className="cartItem__quantity">
                      <CiCircleMinus
                        onClick={() => reduceCartItemQty(e.id)}
                        className="cartItem__quantity-change"
                      />
                      <button>{cartItems[e.id]}</button>
                      <CiCirclePlus
                        onClick={() => addToCart(e.id)}
                        className="cartItem__quantity-change"
                      />
                    </div>
                    <button
                      onClick={() => removeItemFromCart(e.id)}
                      className="delete-cartItem-btn"
                    >
                      delete
                    </button>
                  </div>
                );
              }
            })}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Order Summary</div>

            <div className="payment-summary-row">
              <div>Items ({getTotalCartItems()}):</div>
              <div className="payment-summary-money">
                ${formatCurrency(getTotalCartAmount())}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping & handling:</div>
              <div className="payment-summary-money">
                ${formatCurrency(shippingFee)}
              </div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">
                ${formatCurrency(getTotalCartAmount())}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (0%):</div>
              <div className="payment-summary-money">$0</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">
                ${formatCurrency(getTotalCartAmount() + shippingFee)}
              </div>
            </div>

            <button
              onClick={placedOrder}
              className="place-order-button button-primary"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;

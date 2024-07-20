import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import "./order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/order");
        console.log(response.data.data);
        setOrders(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  const calculateTotalPrice = (products) => {
    return products
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="orders">
      <nav>
        <a href="/dashboard">DashBoard</a>
      </nav>
      <h1>Order Details</h1>
      <div className="allOrders">
        {orders.map((order) => (
          <div key={order._id} className="order">
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
            <p>
              <strong>User ID:</strong> {order.user._id}
            </p>
            <p>
              <strong>Full Name:</strong> {order.user.fullName}
            </p>
            <p>
              <strong>Email:</strong> {order.user.email}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Order Date:</strong>
              {new Date(order.orderDate).toLocaleString()}
            </p>
            <h3>Products:</h3>
            <ul>
              {order.products.map((item, idx) => (
                <li key={idx} className="product">
                  <p>
                    <strong>Product ID:</strong> {item.product._id}
                  </p>
                  <p>
                    <strong>Product Name:</strong> {item.product.name}
                  </p>
                  <p>
                    <strong>Price:</strong> {item.product.price}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <p>
              <strong>Total Price:</strong>{" "}
              {`₦${Math.round(calculateTotalPrice(order.products) * 1605.5)}`}
              ---- {`$${calculateTotalPrice(order.products)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

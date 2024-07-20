import { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./dashBoard.css";

const DashBoard = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  const fetchCounts = async () => {
    try {
      const usersResponse = await axios.get("/user");
      setUserCount(usersResponse.data.length);

      const productsResponse = await axios.get("/shop");
      setProductCount(productsResponse.data.length);

      const ordersResponse = await axios.get("/order");
      setOrderCount(ordersResponse.data.length);

      const visitorsResponse = await axios.get("/visitor");
      setVisitorCount(visitorsResponse.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCounts();
    const intervalId = setInterval(fetchCounts, 5000); // fetch every 5 seconds
    return () => clearInterval(intervalId); // cleanup on component unmount
  }, []);

  return (
    <div className="dashboard">
      <nav>
        <a href="/">Home</a>
      </nav>
      <div className="boxes">
        <div className="box">
          <p>Users</p>
          <h2>{userCount}</h2>
          <a href="/dashboard/user">Details</a>
        </div>
        <div className="box">
          <p>Products</p>
          <h2>{productCount}</h2>
          <a href="/dashboard/product">Details</a>
        </div>
        <div className="box">
          <p>Orders</p>
          <h2>{orderCount}</h2>
          <a href="/dashboard/order">Details</a>
        </div>
        <div className="box">
          <p>Page Views</p>
          <h2>{visitorCount}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

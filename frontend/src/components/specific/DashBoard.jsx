import { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./dashBoard.css";

const DashBoard = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
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

        console.log(usersResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="dashboard">
      <nav>
        <a href="/">Home</a>
      </nav>
      <div className="boxes">
        <a className="box">
          <p>Users</p>
          <h2>{userCount}</h2>
        </a>
        <a className="box">
          <p>Products</p>
          <h2>{productCount}</h2>
        </a>
        <a className="box">
          <p>Orders</p>
          <h2>{orderCount}</h2>
        </a>
        <a className="box">
          <p>Page Views</p>
          <h2>{visitorCount}</h2>
        </a>
      </div>
    </div>
  );
};

export default DashBoard;

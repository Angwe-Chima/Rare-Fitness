import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import "./user.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user");
        setUsers(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/user/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="users">
      <nav>
        <a href="/dashboard">DashBoard</a>
      </nav>
      <h1>User Details</h1>
      <div className="allUsers">
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.user}</h3>
            <h4>{user.fullName}</h4>
            <p>{user.email}</p>
            <span onDoubleClick={() => handleDeleteUser(user._id)} ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;

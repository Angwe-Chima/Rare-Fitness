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
      setUsers(users.filter((user) => user._id !== userId));
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
            <div>
              <span>User Name: </span>
              <h3>{user.user}</h3>
            </div>
            <div>
              <span>Full Name: </span>
              <h4>{user.fullName}</h4>
            </div>
            <div>
              <span>Email: </span>
              <p>{user.email}</p>
            </div>
            <div>
              <span>Register Date</span>
              {new Date(user.createdAt).toLocaleString()}
            </div>
            <span
              className="delete"
              onDoubleClick={() => handleDeleteUser(user._id)}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;

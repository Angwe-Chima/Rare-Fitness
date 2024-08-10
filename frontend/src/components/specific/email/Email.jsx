import './email.css';
import { useState, useEffect } from "react";
import axios from "../../../api/axios";

function Email() {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(""); // State to track errors

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("/email");
        setEmails(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load emails. Please try again later.");
      }
    };

    fetchEmails();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/email/${id}`); // Adjust endpoint as needed
      setEmails(emails.filter(email => email._id !== id)); // Update state to remove deleted email
    } catch (err) {
      console.error(err);
      setError("Failed to delete email. Please try again later.");
    }
  };

  return (
    <div className="emails">
      <nav>
        <a href="/dashboard">DashBoard</a>
      </nav>
      <h1>Email Messages</h1>
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
      <div className="allEmails">
        {emails.length === 0 ? (
          <p>No emails found.</p>
        ) : (
          emails.map((email) => (
            <div
              key={email._id}
              className="email"
              onDoubleClick={() => handleDelete(email._id)} // Handle double-click to delete
            >
              <p>
                <strong>Email ID:</strong> {email._id}
              </p>
              <p>
                <strong>Full Name:</strong> {email.fullName}
              </p>
              <p>
                <strong>Email:</strong> {email.email}
              </p>
              <p>
                <strong>Phone:</strong> {email.phone}
              </p>
              <p>
                <strong>Message:</strong> {email.message}
              </p>
              <p>
                <strong>Sent On:</strong> {new Date(email.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Email;

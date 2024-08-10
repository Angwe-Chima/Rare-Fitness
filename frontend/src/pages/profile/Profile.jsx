import { useEffect, useState } from "react";
import "./profile.css";
import defaultImage from "../../images/profile.png";

function Profile() {
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [userName, setUserName] = useState(defaultImage);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    const userName = localStorage.getItem("userName");
    if (storedImage || userName) {
      setProfileImage(storedImage);
      setUserName(userName);
    }
  }, []); // Empty array to only run once on component mount

  return (
    <div className="profile">
      <div>
        <div className="profileImageDiv">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profileDetails">
          <div className="userName">
            <h2>{userName}</h2>
          </div>
          {/* <div className="email">
            <p>Email:</p>
            <p>johndoe@gmail.com</p>
          </div>
          <div className="dateJoined">
            <p>Membership Date:</p>
            <p>20/4/2024</p>
          </div> */}
        </div>
        <div className="profileBtns">
          <a href="/logout">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;

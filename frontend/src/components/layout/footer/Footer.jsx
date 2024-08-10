import "./footer.css";
import logo from "../../../images/RF-white-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="topp">
        <div className="foot_logo">
          <img src={logo} alt="" />
        </div>
        <ul className="foot_min">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/classes">Classes</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="foot_media">
          <a href="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/footer-social%2Ffacebook.png?alt=media&token=ca0f9c47-8cf0-4960-83e0-1237b4485e8a"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/footer-social%2Finstagram.png?alt=media&token=cf121947-eeb9-4c94-b929-03f3b6ed0a8d"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/footer-social%2Fyoutube.png?alt=media&token=98522205-4151-4ce4-afc9-1d0553f9557a"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="bottomm">
        <p>Copyright © RareFitness @ {new Date().getFullYear()}. All rights
        reserved</p>
        
      </div>
    </div>
  );
}

export default Footer;

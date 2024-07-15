import "../css/Navbar.css";

function Navbar() {
  const token = localStorage.getItem('token')
  return (
    <div className="navbar">
      <strong>{token ? 'Logged in' :'Not loggedIn'}</strong>
      <h3>Navbar</h3>
    </div>
  );
}

export default Navbar;

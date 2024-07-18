function Logout() {
  return (
    <div className="logout">
      <div>
        <h1>You Have Been Logged Out</h1>
        <p>make use of the below options</p>
        <div>
          <a href="/">Go To Home</a>
          <a href="/login">Log Back In</a>
        </div>
      </div>
    </div>
  );
}

export default Logout;

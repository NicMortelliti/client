import React from "react";

function Main({ user, setUser }) {
  console.log(user);
  let capUser = user.name.split("");
  capUser[0] = capUser[0].toUpperCase();
  capUser = capUser.join("");

  const handleLogout = (e) => {
    e.preventDefault();
    setUser("");
  };

  return (
    <div className="App-header center">
      <h2>Welcome, {capUser}!</h2>
      <h1>Bank of Whatever</h1>
      <h2 className="tagline">Where security is... meh! 🤷</h2>
      <button
        className="planeBtn planeBtnWhite"
        onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
}

export default Main;

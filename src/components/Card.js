import React from "react";
import LoginBtn from "./LoginBtn";
import PasswordEntry from "./PasswordEntry";
import TextEntry from "./TextEntry";

function Card() {
  return (
    <div className="card">
      <h2>Welcome!</h2>
      <h4>Please sign in.</h4>
      <form action="">
        <TextEntry />
        <PasswordEntry />
        <LoginBtn />
      </form>
    </div>
  );
}

export default Card;

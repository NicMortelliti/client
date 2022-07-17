import React, { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Card({ setUser }) {
  const [page, setPage] = useState("landing");

  // Sign UP button behavior
  const handleSignUpClick = (e) => {
    e.preventDefault();
    setPage("signup");
  };

  // Determine which form to render
  const RenderForm = () => {
    switch (page) {
      case "landing":
        return (
          <SignInForm handleSignUpClick={handleSignUpClick} setUser={setUser} />
        );

      case "signup":
        return <SignUpForm setUser={setUser} />;

      default:
        break;
    }
  };

  return (
    <div className="card">
      <RenderForm />
    </div>
  );
}

export default Card;

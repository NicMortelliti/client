import React, { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Card() {
  const [page, setPage] = useState("landing");

  // Sign IN button behavior
  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("Clicked Submit button");
  };

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
          <SignInForm
            handleSubmitClick={handleSubmitClick}
            handleSignUpClick={handleSignUpClick}
          />
        );

      case "signup":
        return <SignUpForm handleSubmitClick={handleSubmitClick} />;

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

import React, { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Card() {
  const [page, setPage] = useState("signup");

  // Determine which form to render
  const RenderForm = () => {
    switch (page) {
      case "landing":
        return <SignInForm />;

      case "signup":
        return <SignUpForm />;

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

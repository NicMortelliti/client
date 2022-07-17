import React from "react";

import SubmitBtn from "./SubmitBtn";
import PasswordEntry from "./PasswordEntry";
import SignUpBtn from "./SignUpBtn";
import TextEntry from "./TextEntry";

function SignInForm({ handleSubmitClick, handleSignUpClick }) {
  return (
    <div>
      <h2 className="header">Welcome!</h2>
      <h4 className="subheader">Please sign in.</h4>
      <form action="">
        <TextEntry fieldName="Email Address" />
        <PasswordEntry fieldName="Password" />
        <SubmitBtn value="Sign In" handleSubmitClick={handleSubmitClick} />
      </form>
      <SignUpBtn handleClick={handleSignUpClick} />
    </div>
  );
}

export default SignInForm;

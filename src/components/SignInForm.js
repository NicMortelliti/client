import React from "react";

import LoginBtn from "./LoginBtn";
import PasswordEntry from "./PasswordEntry";
import SignUpBtn from "./SignUpBtn";
import TextEntry from "./TextEntry";

function SignInForm() {
  return (
    <div>
      <h2 className="header">Welcome!</h2>
      <h4 className="subheader">Please sign in.</h4>
      <form action="">
        <TextEntry fieldName="Email Address" />
        <PasswordEntry />
        <LoginBtn />
      </form>
      <SignUpBtn />
    </div>
  );
}

export default SignInForm;

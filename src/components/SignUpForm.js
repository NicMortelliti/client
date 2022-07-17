import React from "react";

import TextEntry from "./TextEntry";
import PasswordEntry from "./PasswordEntry";

function SignUpForm() {
  return (
    <div>
      <h2 className="header">Create an account</h2>
      <form action="">
        <TextEntry fieldName="First Name" />
        <TextEntry fieldName="Email Address" />
        <PasswordEntry />
        {/* <LoginBtn /> */}
      </form>
      {/* <SignUpBtn /> */}
    </div>
  );
}

export default SignUpForm;

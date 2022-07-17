import React, { useState } from "react";

import TextEntry from "./TextEntry";
import PasswordEntry from "./PasswordEntry";
import SubmitBtn from "./SubmitBtn";

function SignUpForm({ handleSubmitClick }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    repass: "",
  });

  return (
    <div>
      <h2 className="header">Create an account</h2>
      <form action="">
        <TextEntry fieldName="First Name" />
        <TextEntry fieldName="Email Address" />
        <PasswordEntry fieldName="Password" />
        <PasswordEntry fieldName="Re-enter Password" />
        <SubmitBtn value="Submit" handleSubmitClick={handleSubmitClick} />
      </form>
    </div>
  );
}

export default SignUpForm;

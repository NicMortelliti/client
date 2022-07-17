import React, { useState } from "react";

import SubmitBtn from "./SubmitBtn";
import SignUpBtn from "./SignUpBtn";
import TextEntry from "./TextEntry";

const url = "http://localhost:9292";

function SignInForm({ handleSignUpClick, setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const updatedFormData = {
      ...formData,
      [e.target.id]: e.target.value,
    };
    setFormData(updatedFormData);
  };

  // Sign IN button behavior
  const handleSubmitClick = (e) => {
    e.preventDefault();
    fetch(`${url}/user/${formData.email}/${formData.pass}`)
      .then((r) => r.json())
      .then((user) => setUser(user));
  };

  return (
    <div>
      <h2 className="header">Welcome!</h2>
      <h4 className="subheader">Please sign in</h4>
      <form action="">
        {/* Email for user */}
        <TextEntry
          fieldName="Email Address"
          type="text"
          id="email"
          value={formData.email}
          handleChange={handleChange}
        />

        {/* Password for user */}
        <TextEntry
          fieldName="Password"
          type="password"
          id="pass"
          value={formData.pass}
          handleChange={handleChange}
        />
        <SubmitBtn value="Sign In" handleSubmitClick={handleSubmitClick} />
      </form>
      <SignUpBtn handleClick={handleSignUpClick} />
    </div>
  );
}

export default SignInForm;

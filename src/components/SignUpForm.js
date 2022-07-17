import React, { useState } from "react";

import TextEntry from "./TextEntry";
import SubmitBtn from "./SubmitBtn";

function SignUpForm({ handleSubmitClick }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    repass: "",
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

  return (
    <div>
      <h2 className="header">Create an account</h2>
      <form action="">
        {/* Name of user */}
        <TextEntry
          fieldName="First Name"
          type="text"
          id="name"
          value={formData.name}
          handleChange={handleChange}
        />

        {/* Email of user */}
        <TextEntry
          fieldName="Email Address"
          type="text"
          id="email"
          value={formData.email}
          handleChange={handleChange}
        />

        {/* Password of user */}
        <TextEntry
          fieldName="Password"
          type="password"
          id="pass"
          value={formData.pass}
          handleChange={handleChange}
        />

        {/* Re-Entered Password for user */}
        <TextEntry
          fieldName="Re-enter Password"
          type="password"
          id="repass"
          value={formData.repass}
          handleChange={handleChange}
        />
        <SubmitBtn value="Submit" handleSubmitClick={handleSubmitClick} />
      </form>
    </div>
  );
}

export default SignUpForm;

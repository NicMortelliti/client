import React, { useState } from "react";

import TextEntry from "./TextEntry";
import SubmitBtn from "./SubmitBtn";

const url = "http://localhost:9292";

function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    repass: "",
  });

  // Handle form Submit
  const handleSubmitClick = (e) => {
    e.preventDefault();

    // First check if both passwords match each other
    //   If they don't, throw alert
    // If they do, check if user exists in database
    //   If they DO, throw alert
    // If they don't, POST new user data to database
    if (formData.pass !== formData.repass) {
      // Passwords don't match
      alert("Passwords do not match!");
      return;
    } else {
      fetch(`${url}/users/${formData.email}`)
        .then((r) => r.json())
        .then((result) => {
          if (result === null) {
            return <PostUser />;
          } else {
            alert("User already exists. Try logging in.");
          }
        });
    }
  };

  // Post new user to database
  const PostUser = () => {
    console.log("Posting new user");
    fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.pass,
      }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
  };

  // Handle form field changes
  const handleChange = (e) => {
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
          altStyle={formData.pass !== formData.repass}
          handleChange={handleChange}
        />
        <SubmitBtn value="Submit" handleSubmitClick={handleSubmitClick} />
      </form>
    </div>
  );
}

export default SignUpForm;

import React from "react";

function PasswordEntry() {
  return (
    <div>
      <label for="pass">Password: </label>
      <input type="password" id="pass" name="password" className="entryField" />
    </div>
  );
}

export default PasswordEntry;

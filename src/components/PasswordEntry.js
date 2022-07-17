import React from "react";

function PasswordEntry({ fieldName }) {
  return (
    <div>
      <label htmlFor="pass">{`${fieldName}:`} </label>
      <input type="password" id="pass" name="password" className="entryField" />
    </div>
  );
}

export default PasswordEntry;

import React from "react";

function PasswordEntry({ fieldName }) {
  return (
    <div>
      <label htmlFor={fieldName}>{`${fieldName}:`} </label>
      <input
        type="password"
        id={fieldName}
        name={fieldName}
        className="entryField"
      />
    </div>
  );
}

export default PasswordEntry;

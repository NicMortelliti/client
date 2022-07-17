import React from "react";

function TextEntry({ fieldName }) {
  return (
    <div>
      <div>
        <label htmlFor={fieldName}>{`${fieldName}:`} </label>
        <input
          type="text"
          id={fieldName}
          name={fieldName}
          className="entryField"
        />
      </div>
    </div>
  );
}

export default TextEntry;

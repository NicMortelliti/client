import React from "react";

function TextEntry({
  fieldName,
  type,
  id,
  value,
  altStyle = false,
  handleChange,
}) {
  return (
    <div>
      <div>
        <label htmlFor={fieldName}>{`${fieldName}:`} </label>
        <input
          type={type}
          id={id}
          className={altStyle ? "entryField nomatch" : "entryField"}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default TextEntry;

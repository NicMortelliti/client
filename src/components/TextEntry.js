import React from "react";

function TextEntry() {
  return (
    <div>
      <label for="user">Username: </label>
      <input type="text" id="user" name="username" className="entryField" />
    </div>
  );
}

export default TextEntry;

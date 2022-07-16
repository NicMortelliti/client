import React from "react";

function TextEntry() {
  return (
    <div>
      <label for="user">Username: </label>
      <input type="text" id="user" name="username" />
    </div>
  );
}

export default TextEntry;

import React from "react";

function LoginBtn() {
  return (
    <div>
      <input
        type="submit"
        value="Sign In"
        className="button"
        onClick={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default LoginBtn;

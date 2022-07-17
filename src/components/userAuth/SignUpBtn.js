import React from "react";

function SignUpBtn({ handleClick }) {
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Sign up</button>
    </div>
  );
}

export default SignUpBtn;

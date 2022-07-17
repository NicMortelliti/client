import React from "react";

function SignUpBtn({ handleClick }) {
  return (
    <div>
      <button
        className="planeBtn planeBtnBlack"
        onClick={(e) => handleClick(e)}>
        Sign up
      </button>
    </div>
  );
}

export default SignUpBtn;

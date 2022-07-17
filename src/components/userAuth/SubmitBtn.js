import React from "react";

function SubmitBtn({ value, handleSubmitClick }) {
  return (
    <div>
      <input
        type="submit"
        value={value}
        className="button"
        onClick={(e) => handleSubmitClick(e)}
      />
    </div>
  );
}

export default SubmitBtn;

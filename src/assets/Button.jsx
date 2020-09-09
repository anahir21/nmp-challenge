import React from "react";
import "../Styles/Button.css";

const Button = ({ title }) => {
  return (
    <div>
      <button className="btn-form" type="submit">
        {title}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import "../Styles/Button.css";

const Button = ({ title , classAble, onClickFunction}) => {
  return (
    <div>
      <button className={`${classAble} btn-form-short`} 
      type="submit"
      onClick={onClickFunction}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

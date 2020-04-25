import React from "react";

const Button = ({ icon, onClick }) => (
  <button type="button" className={`button button--${icon}`} onClick={onClick}>
    <span role="img" aria-label={icon}>
      {icon}
    </span>
  </button>
);

export default Button;

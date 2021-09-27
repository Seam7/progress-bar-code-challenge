import React from "react";
import "./Button.scss";

const Button = ({ variant, children, onClick, disabled = false }) => {
  return (
    <button
      className={`button button--${variant ?? ""}`}
      data-testid={`button--${variant ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({
  textKey,
  text,
  type,
  isLoading,
  size = 25,
  className,
  style,
  containerClassName,
  buttonStyle,
  handleClick,
  ...rest
}) => {
  return (
    <div className={containerClassName}>
      <button onClick={handleClick} type={type} className={className} {...rest}>
        {isLoading ? (
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
        ) : (
          <span>{text}</span>
        )}
      </button>
    </div>
  );
};

export default Button;

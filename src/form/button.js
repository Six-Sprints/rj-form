import React from "react";


const Button = ({
    textKey,
    text,
    type,
    isLoading,
    size = 25,
    className,
    style,
    buttonStyle,
    handleClick,
    ...rest
}) => {

    return (
        <button onClick={handleClick} type={type} className={className || "btn btn-primary"} style={buttonStyle} {...rest}>
            {isLoading ?
                <span className="spinner-border spinner-border-sm"  aria-hidden="true"></span> :
                <span>{text}</span>}
        </button>
    );
};

export default Button;

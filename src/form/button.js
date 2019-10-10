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
    ...rest
}) => {

    return (
        <button type={type} className={className || "btn btn-primary"} style={buttonStyle} {...rest}>
            {isLoading ?
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                <span>{text}</span>}
        </button>
    );
};

export default Button;

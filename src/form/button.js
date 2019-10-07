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
        <div className="my-4">
            <button type={type} className={"btn btn-primary " + className} style={buttonStyle} {...rest}>
                {text}
            </button>
        </div>
    );
};

export default Button;

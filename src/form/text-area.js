import React from "react";
import { asField } from "informed";

const TextAreaInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
    onFocus,
    hideTick,
    inlineImgStyle,
    inlineErrorStyle,
    containerClassName,
    initialValue,
    dontUpdate,
    className,
    forwardedRef,
    format,
    ...rest
  } = props;
  const { error, value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;
  let ref = {};
  return (
    <div className="flex-r">
      <div style={{ position: "relative", width: "100%", height: "45vh" }}>
        <textarea
          ref={refer => {
            ref = refer;
            if (forwardedRef) {
              forwardedRef(refer);
            }
          }}
          style={{ width: "100%", height: "100%", fontSize: 16 }}
          className={className || "theme login"}
          value={value || ""}
          {...rest}
          onChange={e => {
            let val = e.target.value;
            if (format) {
              val = format(val);
            }
            if (onChange) {
              onChange(e, val);
            }
            if (!dontUpdate) {
              setValue(val);
            }
          }}
          onBlur={e => {
            setTouched();
            if (onBlur) {
              onBlur(e);
            }
          }}
          onFocus={e => {
            setTouched(false);
            if (onFocus) {
              onFocus(e);
            }
          }}
        />
        {touched && error && (
          <span
            onClick={() => {
              ref.focus();
            }}
            className="no-fill-warning"
            style={inlineErrorStyle}
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
});

export default TextAreaInput;

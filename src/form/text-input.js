import React from 'react'
import { asField } from "informed";


const TextInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
    onFocus,
    initialValue,
    inlineErrorStyle,
    dontUpdate,
    labelClass,
    className,
    maxLength,
    forwardedRef,
    format,
    hideLabel,
    ...rest
  } = props;
  const { error, value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;
  let ref = {};

  return (
    <div className="my-4">
      {!hideLabel  && (
        <div className={labelClass}>
          <label>
            {props.placeholder}{" "}
            {required ? <span className="required">*</span> : ""}
          </label>
        </div>
      )}

      <div>
        <input
        maxLength={props.maxLength}
          type={props.type}
          ref={refer => {
            ref = refer;
          }}
          className={props.type === "radio" || props.type === "checkbox" ? "" : className || "form-control col-sm"}
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
            }220
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

export default TextInput;

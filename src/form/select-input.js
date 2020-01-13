import React from "react";
import { asField } from "informed";

const SelectInput = asField(({ fieldState, fieldApi, ...props }) => {
  const { setValue } = fieldApi;
  const { error, value, touched } = fieldState;
  const {
    options,
    placeholder,
    onChange,
    showError,
    labelKey,
    valueKey,
    required,
    forwardedRef,
    containerClassName,
    inlineErrorStyle,
    ...rest
  } = props;

  let selectedVal = "";
  if (value) {
    selectedVal = options.filter(option => option[valueKey] === value);
  }
  let ref = {};
  return (
    <div className={containerClassName}>
      <div className={props.labelClass}>
        <label>
          {" "}
          {props.placeholder}{" "}
          {required ? <span className="required">*</span> : ""}
        </label>
      </div>
      <select
        className={props.className}
        value={selectedVal[valueKey]}
        onChange={option => {
          setValue(option && option.target.value);
          if (onChange) {
            onChange(option.target.value);
          }
        }}
        placeholder={placeholder || "Select One"}
        ref={refer => {
          ref = refer;
        }}
        {...rest}
      >
        {(options || []).map((op, idx) => {
          return (
            <option key={idx} value={op[valueKey]}>
              {op[labelKey]}
            </option>
          );
        })}
      </select>
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
  );
});

export default SelectInput;

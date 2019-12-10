import React from "react";
import { Select, asField } from "informed";

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
    containerClassName,
    inlineErrorStyle,
    ...rest
  } = props;

  let selectedVal = null;
  if (value) {
    selectedVal = options.filter(option => option.value === value);
  }

  console.log(options);
  return (
    <div className={containerClassName}>
      <div className={props.labelClass}>
        <label>{props.placeholder}</label>
      </div>
      <Select
        className={props.className}
        value={selectedVal}
        onChange={option => {
          setValue(option && option.value);
          if (onChange) {
            onChange(option.value);
          }
        }}
        placeholder={placeholder || "Select One"}
        {...rest}
      >
        {(options || []).map((op, idx) => {
          return (
            <option key={idx} value={op[valueKey]}>
              {op[labelKey]}
            </option>
          );
        })}
      </Select>
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

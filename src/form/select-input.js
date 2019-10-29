import React from "react";
import { asField } from "informed";
import Select from "react-select";

const SelectInput = asField(({ fieldState, fieldApi, ...props }) => {
  const { setValue } = fieldApi;
  const { error, value, touched } = fieldState;
  const {
    options,
    placeholder,
    onChange,
    showError,
    containerClassName,
    inlineErrorStyle,
    ...rest
  } = props;

  let selectedVal = null;
  if (value) {
    selectedVal = options.filter(option => option.value === value);
  }
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
        options={options}
        placeholder={placeholder || "Select One"}
        {...rest}
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
  );
});

export default SelectInput;

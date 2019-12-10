import React from "react";
import { Select, asField, Option } from "informed";

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
    selectedVal = options.filter(option => option[valueKey] === value);
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
          console.log(option, "SELECT");
          setValue(option && option.target.value);
          if (onChange) {
            onChange(option.target.value);
          }
        }}
        placeholder={placeholder || "Select One"}
        {...rest}
      >
        {(options || []).map((op, idx) => {
          return (
            <Option key={idx} value={op[valueKey]}>
              {op[labelKey]}
            </Option>
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

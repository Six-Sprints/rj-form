import React from "react";
import { asField } from "informed";
import AsyncSelect from "react-select/async";

const AsyncSelectInput = asField(({ fieldState, fieldApi, ...props }) => {
  const { setValue } = fieldApi;
  const { error, value, touched } = fieldState;
  const {
    loadOptions,
    placeholder,
    onChange,
    showError,
    containerClassName,
    inlineErrorStyle,
    ...rest
  } = props;

  let selectedVal = null;
  if (value) {
    selectedVal = options.filter(option => option.id === value);
  }
  return (
    <div className={containerClassName}>
      <div className={props.labelClass}>
        <label>{props.placeholder}</label>
      </div>
      <AsyncSelect
        loadOptions={loadOptions}
        className={props.className}
        value={selectedVal}
        onChange={option => {
          setValue(option && option.id);
          if (onChange) {
            onChange(option.id);
          }
        }}
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

export default AsyncSelectInput;

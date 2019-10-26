import React from "react";
import { asField } from "informed";
import Select from "react-select";

const SelectInput = asField(({ fieldState, fieldApi, ...props }) => {
  const { setValue } = fieldApi;
  const { options, placeholder, onChange, showError, ...rest } = props;

  let selectedVal = null;
  if (fieldState.value) {
    selectedVal = options.filter(option => option.value === fieldState.value);
  }
  return (
    <div className="col-md-6 my-4">
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
    </div>
  );
});

export default SelectInput;

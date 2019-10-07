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
    <div className="flex-r">
      <div className="label-cont">
        <label>{props.placeholder}</label>
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        <Select
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
    </div>
  );
});

export default SelectInput;

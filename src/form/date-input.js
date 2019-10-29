import React from "react";
import { asField } from "informed";
import DatePicker from "react-datepicker";

const DateInput = asField(({ fieldState, fieldApi, ...props }) => {
  const { error, value, touched } = fieldState;
  const { setValue } = fieldApi;
  const {
    placeholder,
    onChange,
    showError,
    dateFormat,
    containerClassName,
    inlineErrorStyle,
    ...rest
  } = props;

  return (
    <div className={containerClassName}>
      <div className={props.labelClass}>
        <label>{props.placeholder}</label>
      </div>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        value={value}
        dropdownMode="select"
        selected={value}
        onChange={date => {
          setValue(date);
        }}
        minDate={new Date()}
        placeholderText={placeholder}
        {...rest}
      />
      <br />
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

export default DateInput;

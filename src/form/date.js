import React from "react";
import { asField } from "informed";
import DatePicker from "react-datepicker";
import moment from "moment";

const CustomDatePicker = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
    onFocus,
    containerClassName,
    labelClass,
    placeholder,
    showTime,
    inlineErrorStyle,
    minDate,
    className,
    maxDate,
    format,
    hideLabel,
    ...rest
  } = props;

  const { error, value, touched } = fieldState;
  const { setValue } = fieldApi;

  const DATE_FORMAT = "DD/MM/YYYY";
  const DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm:ss";
  let dateFormat = showTime ? DATE_TIME_FORMAT : DATE_FORMAT;
  const shouldParse = !!value && ("" + value).indexOf("/") === -1;
  const dispValue = shouldParse
    ? moment(value).format(dateFormat)
    : value || "";

  return (
    <div className={containerClassName}>
      {!hideLabel && (
        <div className={labelClass}>
          <label>
            {props.placeholder}{" "}
            {required ? <span className="required">*</span> : ""}
          </label>
        </div>
      )}

      <DatePicker
        {...rest}
        value={dispValue}
        className={className}
        placeholderText={placeholder}
        showTimeSelect={showTime}
        timeFormat="p"
        timeIntervals={15}
        maxDate={maxDate}
        minDate={minDate}
        onChange={date =>
          setValue(
            moment(date, dateFormat)
              .toDate()
              .getTime()
          )
        }
      />
      <div>
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

export default CustomDatePicker;

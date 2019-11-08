import React from "react";
import { asField } from "informed";
import DatePicker from "react-datepicker";
import moment from "moment";

const DateInput = asField(({ fieldState, fieldApi, ...props }) => {
  const {
    required,
    onChange,
    onBlur,
    onFocus,
    containerClassName,
    labelClass,
    className,
    maxLength,
    format,
    hideLabel,
    ...rest
  } = props;

  const { error, value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;

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

      <div>
        <DatePicker
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          value={value}
          onChange={date =>
            setValue(moment(date).format("DD/MM/YYYY HH:mm:ss"))
          }
        />
      </div>
    </div>
  );
});

export default DateInput;

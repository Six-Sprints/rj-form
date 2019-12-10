import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "informed";
import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "./form/text-input";
import SelectInput from "./form/select-input";
import { AppConstants } from "./util/app-constants";
import Button from "./form/button";
import TextAreaInput from "./form/text-area";
import FileUpload from "./form/file-upload";
import CustomDatePicker from "./form/date";

class RJForm extends Component {
  static propTypes = {
    formArray: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      options,
      isLoading,
      isUploadLoading,
      imageUrl,
      handleUpload
    } = this.props;
    const { fields, styles } = this.props.formData;

    return (
      <Form
        getApi={this.props.getFormApi}
        validateFields={this.props.validateFields}
        onChange={this.props.handleChange}
        onSubmit={this.props.handleSubmit}
      >
        <div className={styles.formClassName}>
          {fields.map((item, i) => {
            if (
              item.type === AppConstants.FIELD_TYPE.TEXT ||
              item.type === AppConstants.FIELD_TYPE.NUMBER ||
              item.type === AppConstants.FIELD_TYPE.EMAIL ||
              item.type === AppConstants.FIELD_TYPE.PASSWORD ||
              item.type === AppConstants.FIELD_TYPE.PHONE ||
              item.type === AppConstants.FIELD_TYPE.RADIO ||
              item.type === AppConstants.FIELD_TYPE.CHECKBOX
            ) {
              return (
                <TextInput
                  maxLength={item.maxLength}
                  key={i}
                  required={item.required}
                  field={item.key}
                  hideLabel={item.hideLabel}
                  type={item.type}
                  containerClassName={
                    item.containerClassName || styles.containerClassName
                  }
                  placeholder={item.placeholder}
                  className={item.className || styles.fieldClassName}
                  validateOnBlur
                  validateOnChange
                />
              );
            }
            if (item.type === AppConstants.FIELD_TYPE.SELECT) {
              return (
                <SelectInput
                  labelKey={item.labelKey}
                  valueKey={item.valueKey}
                  key={i}
                  required={item.required}
                  field={item.key}
                  containerClassName={
                    item.containerClassName || styles.containerClassName
                  }
                  placeholder={item.placeholder}
                  className={item.className || styles.fieldClassName}
                  options={item.options || options}
                  validateOnBlur
                  validateOnChange
                />
              );
            }
            if (item.type === AppConstants.FIELD_TYPE.FILE) {
              return (
                <div key={i} className="col-md-6 mt-5">
                  <img
                    className="mr-4"
                    src={
                      imageUrl ||
                      "http://placehold.jp/c5d0db/fafafa/100x100.png?text=Image"
                    }
                    width="50"
                    alt="logo"
                  />
                  <FileUpload
                    handleUpload={handleUpload}
                    text={item.text}
                    className={item.className}
                    isLoading={isUploadLoading}
                  />
                </div>
              );
            }

            if (item.type === AppConstants.FIELD_TYPE.DATE) {
              return (
                <CustomDatePicker
                  key={i}
                  format={item.format}
                  required={item.required}
                  containerClassName={
                    item.containerClassName || styles.containerClassName
                  }
                  field={item.key}
                  placeholder={item.placeholder}
                  className={item.className || styles.fieldClassName}
                />
              );
            }
            if (item.type === AppConstants.FIELD_TYPE.TEXT_AREA) {
              return (
                <TextAreaInput
                  key={i}
                  width={item.width}
                  height={item.height}
                  required={item.required}
                  field={item.key}
                  type={item.type}
                  containerClassName={
                    item.containerClassName || styles.containerClassName
                  }
                  placeholder={item.placeholder}
                  className={item.className || styles.fieldClassName}
                  validateOnBlur
                  validateOnChange
                />
              );
            }
            if (
              item.type === AppConstants.FIELD_TYPE.SUBMIT ||
              item.type === AppConstants.FIELD_TYPE.BUTTON
            ) {
              return (
                <Button
                  isLoading={isLoading}
                  key={i}
                  required={item.required}
                  text={item.text}
                  type={item.type}
                  className={item.className}
                  containerClassName={
                    item.containerClassName || styles.containerClassName
                  }
                />
              );
            }
          })}
        </div>
      </Form>
    );
  }
}

export const LoadingButton = Button;
export default RJForm;

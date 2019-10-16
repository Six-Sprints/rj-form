import 'bootstrap/dist/css/bootstrap.css';
import { Form } from "informed";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './form/text-input';
import SelectInput from './form/select-input';
import { AppConstants } from './util/app-constants';
import Button from './form/button';
import TextAreaInput from './form/text-area';


class RJForm extends Component {

  static propTypes = {
    formArray: PropTypes.array
  }

  

  constructor(props) {
    super(props);
  }



  render() {
    const {fields, styles} = this.props.formData;
    const  isLoading  = this.props.isLoading;
    return (
      <Form getApi={this.props.setFormApi} validateFields={this.props.validateFields} onChange={this.props.handleChange} onSubmit={this.props.handleSubmit}>
        <div className={styles.formClassName}>
          {fields.map((item, i) => {
            if (item.type === AppConstants.FIELD_TYPE.TEXT || item.type === AppConstants.FIELD_TYPE.EMAIL || item.type === AppConstants.FIELD_TYPE.PASSWORD || item.type === AppConstants.FIELD_TYPE.PHONE || item.type === AppConstants.FIELD_TYPE.RADIO || item.type === AppConstants.FIELD_TYPE.CHECKBOX) {
              return (<TextInput  key={i} required={item.required} field={item.key} hideLabel={item.hideLabel} type={item.type} placeholder={item.placeholder} className={item.className || styles.fieldClassName} validateOnBlur validateOnChange />);
            } 
            if(item.type === AppConstants.FIELD_TYPE.SELECT) {
              return <SelectInput key={i} required={item.required} field={item.key} placeholder={item.placeholder} className={item.className || styles.fieldClassName} options={item.options} />
            }
            if(item.type === AppConstants.FIELD_TYPE.TEXT_AREA) {
              return <TextAreaInput key={i} required={item.required} text={item.text} type={item.type} className={item.className}    />
            }
            if(item.type === AppConstants.FIELD_TYPE.SUBMIT || item.type === AppConstants.FIELD_TYPE.BUTTON) {
              return <Button isLoading={isLoading} key={i} required={item.required} text={item.text} type={item.type} className={item.className} buttonStyle={item.buttonStyle}   />
            }
          })}
        </div>
      </Form>

    );
  }
}


export const LoadingButton = Button;
export default RJForm;
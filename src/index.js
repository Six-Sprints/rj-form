import 'bootstrap/dist/css/bootstrap.css';
import { Form } from "informed";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from './form/text-input';
import SelectInput from './form/select-input';
import { AppConstants } from './util/app-constants';
import Button from './form/button';



class RJForm extends Component {

  static propTypes = {
    formArray: PropTypes.array
  }

  

  constructor(props) {
    super(props);
  }


  render() {
    const {fields} = this.props.formData;
    return (
      <Form  onSubmit={this.props.handleSubmit}>
        <div className="m-2">
          {fields.map((item, i) => {
            if (item.type === AppConstants.FIELD_TYPE.TEXT) {
              return (<TextInput key={i} field={item.key} type={item.type} placeholder={item.placeholder} className={item.className} validateOnBlur validateOnChange />);
            } 
            if(item.type === AppConstants.FIELD_TYPE.EMAIL) {
              return (<TextInput key={i} field={item.key} type={item.type} placeholder={item.placeholder} className={item.className}  validateOnBlur validateOnChange />);
            }
            if(item.type === AppConstants.FIELD_TYPE.PASSWORD) {
              return (<TextInput key={i} field={item.key} type={item.type} placeholder={item.placeholder} className={item.className}  validateOnBlur validateOnChange />);
            }
            if(item.type === AppConstants.FIELD_TYPE.PHONE) {
              return (<TextInput key={i} field={item.key} type={item.type} placeholder={item.placeholder} className={item.className}  validateOnBlur validateOnChange />);
            }
            if(item.type === AppConstants.FIELD_TYPE.RADIO) {
              return (<TextInput key={i} field={item.key} type={item.type} placeholder={item.placeholder} className={item.className}  validateOnBlur validateOnChange />);
            }
            if(item.type === AppConstants.FIELD_TYPE.CHECKBOX) {
              return (<TextInput key={i} field={item.key} type={item.type} placeholder={item.placeholder} className={item.className} validateOnBlur validateOnChange />);
            }
            if(item.type === AppConstants.FIELD_TYPE.SELECT) {
              return <SelectInput key={i} field={item.key} placeholder={item.placeholder} options={item.options} />
            }
            if(item.type === AppConstants.FIELD_TYPE.SUBMIT) {
              return <Button key={i} text={item.text} type={item.type} className={item.className} buttonStyle={item.buttonStyle}   />
            }
            if(item.type === AppConstants.FIELD_TYPE.BUTTON) {
              return <Button key={i} text={item.text} type={item.type} className={item.className} buttonStyle={item.buttonStyle}   />
            }
          })}
        </div>
      </Form>

    );
  }
}


export default RJForm;
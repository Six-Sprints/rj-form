import React, { Component } from 'react'
import RJForm from 'rj-form'
import { isEmail, isRequired, isPasswordAndRequired } from './util/validations';

export default class App extends Component {


  setFormApi = api => {
    this.formApi = api;
  }


  handleSubmit =  value => {
    console.log(value);
    this.formApi.reset();
  }

  isRequired(value) {
    return value === null ||
      value === undefined ||
      ("" + value).trim().length <= 0
      ? "This field is required"
      : undefined;
  }

  validateFields = values => {
    return { 
      name: isRequired( values.name)
    };
  };


  render() {
    return (
      <div>
        <RJForm  setFormApi={this.setFormApi} validateFields={this.validateFields} handleSubmit={this.handleSubmit} formData={DATA}></RJForm>
      </div>
    )
  }
}



const DATA = {
  styles: {
    formClassName: 'column m-2',
    fieldClassName: 'form-control col-md-8'
  },
  fields: [
    {
      key: 'name',
      placeholder: 'Name',
      type: 'text'
    },

    // {
    //   key: 'email',
    //   placeholder: 'Email',
    //   type: 'email',
    // },
    // {
    //   key: 'phone',
    //   placeholder: 'Phone',
    //   type: 'tel'
    // },
    // {
    //   key: 'password',
    //   placeholder: 'Password',
    //   type: 'password'
    // },
    // {
    //   key: 'fruit',
    //   placeholder: 'Select a fruit',
    //   type: 'select',
    //   className: 'col-md-5',
    //   options: [
    //     { value: 'appple', label: 'Apple' },
    //     { value: 'orange', label: 'Orange' },
    //     { value: 'pineapple', label: 'Pineapple' }
    //   ]
    // },
    {
      key: 'button',
      text: 'Submit',
      type: 'submit',
      className: 'col-md-8'
    }
  ],
};

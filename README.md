# rj-form

> A React JS library for creating forms using a JSON schema

[![NPM](https://img.shields.io/npm/v/rj-form.svg)](https://www.npmjs.com/package/rj-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rj-form
```

## Usage

```jsx
import React, { Component } from 'react'
import RJForm from 'rj-form'

class Example extends Component {

   setFormApi = api => {
    this.formApi = api; // Setting the informed API here
  }


  handleSubmit =  value => {
    console.log(value);
    this.formApi.reset(); // Resetting the form using the informed API
  }


  validateFields = values => {
    return { 
      name: isRequired( values.name )
    };
  };

  
    handleSubmit(value) {
      console.log(value);
    }
  
  
    render () {
      return (
        <RJForm  setFormApi={this.setFormApi} validateFields={this.validateFields} handleSubmit={this.handleSubmit} formData={inputData}></RJForm>
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

    {
      key: 'email',
      placeholder: 'Email',
      type: 'email',
    },
    {
      key: 'phone',
      placeholder: 'Phone',
      type: 'tel'
    },
    {
      key: 'password',
      placeholder: 'Password',
      type: 'password'
    },
    {
      key: 'fruit',
      placeholder: 'Select a fruit',
      type: 'select',
      className: 'col-md-5',
      options: [
        { value: 'appple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'pineapple', label: 'Pineapple' }
      ]
    },
    {
      key: 'button',
      text: 'Submit',
      type: 'submit',
      className: 'col-md-8'
    }
  ],
};


```

## License

MIT © [drudrapaul](https://github.com/drudrapaul)

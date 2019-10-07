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

    inputData = {
    fields: [ {
      key: 'email',
      placeholder: 'Email',
      type: 'email'
    },
  
    {
      key: 'password',
      placeholder: 'Password',
      type: 'password'
    },
  
    {
      key: 'button',
      text: 'Submit',
      type: 'submit'
    }],
  };
  
    handleSubmit(value) {
      console.log(value);
    }
  
  
    render () {
      return (
        <RJForm handleSubmit={this.handleSubmit} formData={this.inputData}></RJForm>
      )
    }
}
```

## License

MIT © [drudrapaul](https://github.com/drudrapaul)

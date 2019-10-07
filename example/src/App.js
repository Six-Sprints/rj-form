import React, { Component } from 'react'
import RJForm from 'rj-form'


export default class App extends Component {

  
  handleSubmit(value) {
    console.log(value);
    
  }


  render() {
    return (
      <div>
        <RJForm handleSubmit={this.handleSubmit} formData={inputData}></RJForm>
      </div>
    )
  }
}



const inputData = {
  fields: [ {
    key: 'name',
    placeholder: 'Name',
    type: 'text',
    hideLabel: true
  },

  {
    key: 'email',
    placeholder: 'Email',
    type: 'email',
    hideLabel: true
  },
  {
    key: 'phone',
    placeholder: 'Phone',
    type: 'tel',
    hideLabel: true
  },
  {
    key: 'isTncChecked',
    placeholder: 'I agree to all the TnCs.',
    type: 'checkbox'
  },
  {
    key: 'fruit',
    placeholder: 'Select a fruit',
    type: 'select',
    options: [
      { value: 'appple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'pineapple', label: 'Pineapple' }
    ]
  },
  {
    key: 'button',
    text: 'Submit',
    type: 'submit'
  }],
};

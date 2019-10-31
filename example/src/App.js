import React, { Component } from "react";
import RJForm from "rj-form";
import { isRequired } from "./util/validations";

export default class App extends Component {
  state = { isLoading: false };

  constructor(props) {
    super(props);
  }

  setFormApi = api => {
    this.formApi = api;
  };

  handleSubmit = value => {
    this.formApi.reset();
  };

  isRequired(value) {
    return value === null ||
      value === undefined ||
      ("" + value).trim().length <= 0
      ? "This field is required"
      : undefined;
  }

  validateFields = values => {
    return {
      name: isRequired(values.name),
      fruit: isRequired(values.fruit),
      date: isRequired(values.date)
    };
  };

  handleClick = () => {
    console.log("Click");
  };

  handleChange = val => {};

  render() {
    let isLoading = this.state.isLoading;
    return (
      <RJForm
        loadOptions={this.getOptions}
        handleChange={this.handleChange}
        isLoading={isLoading}
        getFormApi={this.setFormApi}
        validateFields={this.validateFields}
        handleSubmit={this.handleSubmit}
        formData={DATA}
      ></RJForm>
    );
  }
}

const DATA = {
  styles: {
    formClassName: "column m-2",
    fieldClassName: "form-control",
    containerClassName: "w-50 my-4"
  },
  fields: [
    {
      key: "name",
      placeholder: "Name",
      type: "text",
      maxLength: 4
    },
    {
      key: "date",
      placeholder: "Date",
      type: "date"
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
    {
      key: "fruit",
      placeholder: "Select a fruit",
      type: "select",
      className: "col-md-5",
      options: [{ value: "1", label: "Apple" }, { value: "2", label: "Orange" }]
    },
    {
      key: "button",
      text: "Submit",
      type: "submit",
      className: "col-md-8"
    }
  ]
};

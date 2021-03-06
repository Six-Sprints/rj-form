import React, { Component } from "react";
import RJForm from "rj-form";
import { isRequired } from "./util/validations";
import Api from "./util/api";

export default class App extends Component {
  state = { isLoading: false, options: [] };

  componentDidMount() {
    Api.get("posts").subscribe(
      data => {
        console.log(data.data);
        this.setState({ options: data.data });
      },
      error => {
        if (error.response) {
          console.log(error.response);
        }
      }
    );
  }

  handleUpload = val => {
    console.log(val);
  };

  setFormApi = api => {
    this.formApi = api;
  };

  handleSubmit = value => {
    console.log(value);
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
      date: isRequired(values.date),
      city: isRequired(values.city)
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
        handleUpload={this.handleUpload}
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
    containerClassName: "w-100 my-4"
  },
  fields: [
    {
      key: "name",
      placeholder: "Name",
      type: "text",
      required: true,
      maxLength: 4
    },
    {
      key: "date",
      placeholder: "Date",
      type: "date",
      className: "form-control"
    },

    {
      key: "city",
      type: "select",
      placeholder: "City",
      valueKey: "name",
      labelKey: "name",
      required: true,
      options: [{ name: "Delhi" }, { name: "Kolkata" }]
    },

    {
      key: "desc",
      type: "text-area"
    },

    {
      key: "button",
      text: "Submit",
      type: "submit",
      className: "col-md-8"
    }
  ]
};

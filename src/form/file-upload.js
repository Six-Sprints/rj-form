import React, { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = evt => {
    const file = evt.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    this.props.handleUpload(formData);
  };
  render() {
    const { text, className, isLoading } = this.props;
    if (isLoading) {
      return (
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
      );
    }
    return (
      <div
        className={className}
        onClick={() => {
          this.refs.file.click();
        }}
      >
        <input
          type="file"
          style={{ display: "none" }}
          ref="file"
          onChange={this.handleChange}
        />
        {text}
      </div>
    );
  }
}

export default FileUpload;

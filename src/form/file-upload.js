import React, { Component } from "react";
import Loader from "../loader";
import Api from "../../utils/api";
import { DEFAULT_ERROR_CALLBACK } from "../../utils/app-util";
import { t } from "../../utils/i18n";

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
      return <Loader size={28} />;
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
        {t(text)}
      </div>
    );
  }
}

export default FileUpload;

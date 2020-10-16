import React, { Component } from "react";
import Form from "../../components/Form/Form";
import "./Login.css";

const formWrapperStyle = {
  backgroundColor: "#004080",
  width: "500px",
  marginRight: 'auto',
  marginLeft: 'auto',
  borderRadius: '10px',
  marginTop: '50px'
};

export default class SignUp extends Component {
  feild1 = "Email";
  feild2 = "Password";

  formData = {
    title: "Login",
    formWrapper: formWrapperStyle,
    items: [
      {
        labelText: this.feild1,
        labelStyle: "",
        name: this.feild1,
        id: this.feild1,
        inputStyle: "",
        onChange: () => console.log("email"),
        type: "text",
        placeHolderText: "example@gmail.com",
        containerStyle: ""
        // textValue: ""
      },
      {
        labelText: this.feild2,
        labelStyle: "",
        name: this.feild2,
        id: this.feild2,
        inputStyle: "",
        onChange: () => console.log("email"),
        type: "password",
        containerStyle: ""
        // textValue: ""
      },
      {
        name: this.feild4,
        id: this.feild4,
        inputStyle: "",
        onChange: () => console.log("email"),
        type: "submit",
        containerStyle: "",
        textValue: this.feild4
      }
    ]
  };

  render() {
    return <Form formData={this.formData} />;
  }
}

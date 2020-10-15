import React from "react";
import './ErrorMessage.css';

const ErrorMessage = props => {
  return <p className='error-message'>{props.msg}</p>;
};

export default ErrorMessage; 
import React from "react";
import "./TextInput.css";

const TextInput = props => {
  const {
    labelText,
    name,
    inputRef,
    textValue,
    onChange,
    onClick,
    id,
    placeHolderText,
    inputStyle,
    labelStyle,
    type,
    containerStyle
  } = props;

  let labelClass = "input-label",
    inputClass = "input-feild",
    containerClass = "input-container";

  if (props.labelStyle) {
    labelClass += ` ${labelStyle}`;
  }

  if (props.inputStyle) {
    inputClass += ` ${inputStyle}`;
  }

  if (props.containerStyle) {
    containerClass += ` ${containerStyle}`;
  }

  return (
    <div className={containerClass}>
      {labelText && <label className={labelClass}>{labelText}</label>}
      <input
        type={type}
        placeholder={placeHolderText}
        id={id}
        name={name}
        className={inputClass}
        onChange={onChange}
        value={textValue}
        ref={inputRef}
        onClick={onClick}
      />
    </div>
  );
};

export default TextInput;

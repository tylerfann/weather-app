import React from "react";
import TextInput from "../TextInput/TextInput";
import "./Form.css";

const Form = props => {

  return (
    <section className={'form-comp-wrapper'} style={props.formData.formWrapper}>
      <div>
        {props.formData.title && (
          <h2 className={"form-comp-title"}>{props.formData.title}</h2>
        )}
        <form className={"form-comp-input-wrapper"}>
          {props.formData.items.map((el, index) => {
            return (
              <TextInput
                labelText={el.labelText}
                labelStyle={el.labelStyle}
                name={el.labelText}
                id={el.labelText}
                inputStyle={el.inputStyle}
                onChange={el.onChange}
                type={el.type}
                placeHolderText={el.placeHolderText}
                containerStyle={el.containerStyle}
                textValue={el.textValue}
                inputRef={el.inputRef}
                key={index}
                onClick={el.onClick}
              />
            );
          })}
        </form>
      </div>
    </section>
  );
};

export default Form;

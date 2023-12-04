import React from "react";
import TextField from "@mui/material/TextField";

const defaultStyles = {
  borderRadius: "10px",
  padding: "3px",
};

const errorStyles = {
  ...defaultStyles,
  border: "1px solid red", // Add the red border for errors
};

const errormsg={
  color:"red"
}

const InputComponent = (props) => {
  const {
    type,
    placeholder,
    className,
    errormessage,
    name,
    label,
    ...rest
  } = props;

  const inputStyle = errormessage ? errorStyles : defaultStyles;

  const inputmsg= errormessage ? errormsg : ""

  return (
    <>
      {label && <p style={{ marginLeft: "5px" }}>{label}</p>}
      <div className="form-group">
        <TextField
          InputProps={{ style: inputStyle }} // Apply style directly to the TextField component
          type={type}
          placeholder={placeholder}
          name={name}
          className={`${[className]}`}
          {...rest}
        />
        {errormessage && <p style={inputmsg} >{errormessage}</p>}
      </div>
    </>
  );
};

export default InputComponent;

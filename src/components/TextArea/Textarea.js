import React from "react";
import TextField from "@mui/material/TextField";

const defaultStyles = {
  borderRadius: "10px",
  padding: "3px",
};

const TextareaComponent = (props) => {
  const {
    label,
    id,
    placeholder,
    rows,
    className,
    style,
    fullWidth,
    value,
    errormessage,
    ...rest
  } = props;

  const errormsg = {
    color: "red",
  };

  const errorStyles = {
    borderColor: errormessage ? "red" : "initial", // Add red border for errors
  };

  const inputmsg = errormessage ? errormsg : "";

  const inputStyle = errormessage ? errorStyles : "";

  return (
    <>
      {label && <p style={{ marginLeft: "5px" }}>{label}</p>}
      <TextField
        id={id}
        placeholder={placeholder}
        multiline
        rows={rows}
        fullWidth={fullWidth}
        value={value}
        className={className}
        inputProps={{ style: inputStyle }} // Use inputProps to set the style
        {...rest}
      />
      {errormessage && <p style={inputmsg}>{errormessage}</p>}
    </>
  );
};

export default TextareaComponent;

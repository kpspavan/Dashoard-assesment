import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = (props) => {
  const {
    options,
    value: propValue, // Rename value prop to avoid conflict with state variable
    errormessage,
    customStyle,
    label,
    style,
    customClassName,
    placeholder,
    ...rest
  } = props;

  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState(propValue || "Clicks");

  const defaultStyles = {
    borderRadius: "10px",
    padding: "3px",
  };

  const errorStyles = {
    ...defaultStyles,
    border: "1px solid red", // Add the red border for errors
  };

  const inputStyle = errormessage ? errorStyles : { ...defaultStyles, ...style };

  // Handle the change event when the user selects a different option
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {label && <p style={{ marginLeft: "5px" }}>{label}</p>}
      <Select
        style={inputStyle}
        value={selectedValue}
        onChange={handleChange}
        className={customClassName}
        {...rest}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return <em>{placeholder}</em>;
          }

          return selected;
        }}
        inputProps={{ placeholder: placeholder }}
        classes={{ select: "MuiSelect-select" }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {errormessage && <p style={{ marginLeft: "5px" }}>{errormessage}</p>}
    </>
  );
};

export default Dropdown;

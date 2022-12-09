import React from "react";
import SelectItem from "react-select";
import "./select.css";
const Select = ({ options, value, onChange, placeholder, ref }) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      fontFamily: "yekanBold",
      fontSize: "0.85rem",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
    }),
  };
  return (
    <SelectItem
      ref={ref}
      blurInputOnSelect={false}
      hideSelectedOptions={false}
      autoFocus={false}
      styles={customStyles}
      value={value}
      onChange={onChange}
      options={options}
      isSearchable={false}
      placeholder={placeholder}
    />
  );
};

export default Select;

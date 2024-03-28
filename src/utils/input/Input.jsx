import React from "react";

const Input = ({ value, placeholder, name, style }) => {
  return (
    <>
      <input
        className={`rounded-sm py-1 outline-none ${style}`}
        value={value}
        placeholder={placeholder}
        name={name}
      />
      ;
    </>
  );
};

export default Input;

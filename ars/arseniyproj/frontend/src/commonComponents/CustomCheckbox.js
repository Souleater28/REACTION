import React from "react";
import "./styles.css";
const CustomCheckbox = (props) => {
  return (
    <div className={props.type}>
      <input type="checkbox" id={props.type} />
      <label htmlFor={props.type}>{props.text}</label>
    </div>
  );
};
export default CustomCheckbox;

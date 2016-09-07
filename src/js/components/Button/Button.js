import React from "react";

const Button = (props) => {

  return (
    <button
      onClick={props.onClickHandler}
      class={props.className}>
      {props.text}</button>
  );
};

export default Button;

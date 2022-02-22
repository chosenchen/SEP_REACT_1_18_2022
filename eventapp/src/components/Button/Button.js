import React from "react";
import "./Button.css";

// PureComponent
const Button = React.memo(
  ({ children, ...restProps }) => {
    console.log("Button render");

    return (
      <button className="btn" {...restProps}>
        {children}
      </button>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.children === nextProps.children ? true : false;
  }
);

export default Button;

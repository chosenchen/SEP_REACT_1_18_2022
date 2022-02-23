import React from 'react';
import './Button.css';

// PureComponent
const Button = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="btn" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
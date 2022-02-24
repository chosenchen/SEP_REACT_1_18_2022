import React from 'react';
import './Button.css';

// PureComponent
const Button = React.memo(({ children, ...restProps }) => {
  return (
    <button className="btn" {...restProps}>
      {children}
    </button>
  );
});

export default Button;

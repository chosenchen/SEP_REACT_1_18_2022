import React from 'react';
import './Button.css';

// PureComponent
function Button(props) {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.children !== this.props.children;
  // }
  console.log('Button render');
  const { children, ...restProps } = props;
  return (
    <button className="btn" {...restProps}>
      {children}
    </button>
  );
}


export default Button;

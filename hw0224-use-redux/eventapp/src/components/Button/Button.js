import React from 'react';
import './Button.css';

// PureComponent
class Button extends React.Component {
  render() {
    console.log('Button render');
    const { children, ...restProps } = this.props;
    return (
      <button className="btn" {...restProps}>
        {children}
      </button>
    );
  }
}

export default Button;

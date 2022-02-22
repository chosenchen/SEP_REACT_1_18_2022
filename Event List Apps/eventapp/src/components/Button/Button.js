import React from 'react';
import './Button.css';

export default function Button(props) {
  const { children, ...restProps } = props;
    return (
      <button className="btn" {...restProps}>
        {children}
      </button>
    )
}
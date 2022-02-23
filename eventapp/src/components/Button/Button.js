import React from "react";
import "./Button.css";

// PureComponent
const Button = (props) => {
  const { children, ...restProps } = props;
  return (
    <button className="btn" {...restProps}>
      {children}
    </button>
  );
};
// class Button extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.children !== this.props.children;
//   }
//   render() {
//     console.log('Button render');
//     const { children, ...restProps } = this.props;
//     return (
//       <button className="btn" {...restProps}>
//         {children}
//       </button>
//     );
//   }
// }

export default Button;

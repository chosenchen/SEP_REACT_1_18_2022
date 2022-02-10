import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  state = { name: 'someone' };
  render() {
    return (
      <div>
         Hello {this.state.name} From {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Louis" />,
  document.getElementById('hello-example')
);
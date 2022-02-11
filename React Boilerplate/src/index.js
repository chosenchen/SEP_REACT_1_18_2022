import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Logo from './Logo';

class Random extends React.Component {
  // This should be in the render function:
  n = Math.floor(Math.random() * 10 + 1);
 
  render() {
    return <h1>The number is {this.n}!</h1>;
  }
};

class HelloMessage extends React.Component {
  
  state = { name: 'Stephen' };
  render() {
    return (
      <div className="container">
        <Random/>
        <Logo></Logo> Hello {this.props.name} From {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Jihye" />,
  document.getElementById('hello-example')
);
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Logo from './Logo';

class HelloMessage extends React.Component {
  state = { name: 'Stephen' };
  render() {
    return (
      <div className="container">
        <Logo></Logo> Hello {this.props.name} From {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Jihye" />,
  document.getElementById('hello-example')
);
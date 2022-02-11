import ReactDOM from 'react-dom';
import Logo from './Logo';
import React from 'react';
import Header from './components/Header';
import './style.scss';

class HelloMessage extends React.Component {
  state = { name: 'Mike' };
  render() {
    return (
      <div>
        <Header></Header>
        <Logo></Logo> Hello {this.props.name} From {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
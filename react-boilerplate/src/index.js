import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';

import './index.scss';

class HelloMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'Khoa'
    } 
  }

  render() {
    return (
      <div className='container'>
        <Logo></Logo> Hello {this.props.name} from {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Patrick" />,
  document.getElementById('hello-example')
);
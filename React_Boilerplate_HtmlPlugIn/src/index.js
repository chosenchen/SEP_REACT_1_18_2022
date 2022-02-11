import React from 'react'
import ReactDOM from 'react-dom' 
import Logo from './Logo'

class HelloMessage extends React.Component {
    state = {name: 'Xiang Liu Antra Test!!!'}
    render() {
      return (
        <div>
          <Logo></Logo>Hello {this.props.name} from {this.state.name}
        </div>
      );
    }
  }
  
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
  );
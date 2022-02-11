import Logo from './Logo'
import './style.scss'

class HelloMessage extends React.Component {
    state = {name: 'Xiang Liu Antra Test Scss'}
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
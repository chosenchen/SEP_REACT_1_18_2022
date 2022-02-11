import Logo from './Logo'

class HelloMessage extends React.Component {
    state = {name: 'Xiang Liu'}
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
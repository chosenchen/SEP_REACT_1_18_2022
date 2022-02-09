import Logo from './Logo';

class HelloMessage extends React.Component {
  state = { name: 'Trey' };
  render() {
    return (
      <div>
        <Logo></Logo> Hello {this.props.name} From {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Patrick" />,
  document.getElementById('hello-example')
);
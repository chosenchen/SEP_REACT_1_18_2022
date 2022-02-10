import Logo from "./Logo";

class HelloMessage extends React.Component {
  state = { name: "Ying" };
  render() {
    return (
      <div>
        <Logo></Logo> Hello {this.props.name} From {this.state.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("hello-example")
);

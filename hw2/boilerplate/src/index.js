import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "./Logo";

class HelloMessage extends React.Component {
    state = { name: 'Sam' };
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
    document.getElementById('root')
);
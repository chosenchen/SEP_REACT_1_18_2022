import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Logo from "./Logo";

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Sam' };
    }
    render() {
        return (
            <div>
                <Logo></Logo> Hello {this.props.name} From {this.state.name}
            </div>
        );
    }
}
HelloMessage.propTypes = {
    name: PropTypes.string,
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('root')
);
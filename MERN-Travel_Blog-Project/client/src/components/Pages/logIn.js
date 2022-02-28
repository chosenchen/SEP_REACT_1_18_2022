import React from "react";

import '../../styles/logIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { USER_API } from "../../services/user.connectToDB";
import { UserData } from '../../models/user.model.js';

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: new UserData('', '', '', ''),
            auth: this.props.auth,
            isVaild: true,
            error: "",
        }
        this.userSignIn = this.userSignIn.bind(this);
        this.handleOnInput = this.handleOnInput.bind(this);
    }

    handleOnInput(e) {
        this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } });
    };

    async userSignIn() {
        const currentUserData = await USER_API.findUser(this.state.user.email);
        if (this.state.user.email !== '' && this.state.user.password !== '') {
            if (currentUserData === null) {
                this.setState({ isVaild: false, error: 'Email not found.' });
            } else if (currentUserData.password !== this.state.user.password) {
                this.setState({ isVaild: false, error: 'Password not correct.' });
            } else {
                this.setState({ auth: true, isVaild: true, error: '' });
                sessionStorage.setItem("auth", true);
                sessionStorage.setItem("user", JSON.stringify(currentUserData));
                window.location.href = "/";
            }
        } else { this.setState({ isVaild: false, error: 'Inputs cannot be empty.' }); }

    }

    render() {
        return (
            <section className="form">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleOnInput}
                    required
                    autoFocus
                />
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleOnInput}
                    required
                />
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={this.userSignIn}
                >Sign in</button>

                {!this.state.isVaild ?
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill bi flex-shrink-0 me-2"></i>
                        <div>
                            {this.state.error}
                        </div>
                    </div>
                    : ''}

            </section>
        )
    }
}

export default LogIn;
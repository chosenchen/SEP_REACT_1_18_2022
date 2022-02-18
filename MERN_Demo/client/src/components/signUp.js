import React from "react";

import { USER_API } from '../services/user.connectToDB';
import { UserData } from '../models/user.model.js';

import './styles/signUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVaild: true,
            error: "",
            newUser: new UserData('', '', '', '')
        }
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
    }


    handleOnInput(e) {
        this.setState({ newUser: { ...this.state.newUser, [e.target.name]: e.target.value }, });
    };


    handleOnSave() {
        const { userName, email, password, confirm_password } = this.state.newUser;
        const newUser = new UserData(userName, email, password, confirm_password);
        const res = newUser.isValidForSave();
        if (res.isVaild) {
            USER_API.addUser(newUser);
            this.setState({ isVaild: res.isVaild, error: res.error, });
            window.location.href = "/";
        } else {
            this.setState({ isVaild: res.isVaild, error: res.error });
        }
    }

    render() {
        return (
            <section className="form-signin">

                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />

                <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="Username"
                    onChange={this.handleOnInput}
                    value={this.state.newUser.userName}
                    required
                    autoFocus
                />
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={this.handleOnInput}
                    value={this.state.email}
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.handleOnInput}
                    value={this.state.password}
                    required
                />
                <input
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={this.handleOnInput}
                    value={this.state.confirm_password}
                    required
                />

                <button
                    type="button"
                    className="btn btn-lg btn-primary btn-block signUp-submit__btn"
                    onClick={this.handleOnSave}
                >Sign Up</button>

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

export default SignUp;
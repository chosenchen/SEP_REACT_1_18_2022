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
            newUser: new UserData('', '', '', '', '')
        }
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
    }


    handleOnInput(e) {
        this.setState({ newUser: { ...this.state.newUser, [e.target.id]: e.target.value } });
    };


    async handleOnSave() {
        const { userName, email, password, confirm_password, profile_img } = this.state.newUser;
        const newUser = new UserData(userName, email, password, confirm_password, profile_img);
        const res = newUser.isValidForSave();
        if (res.isVaild) {
            const currentUserData = await USER_API.findUser(this.state.newUser.email);
            if (currentUserData === null) {
                USER_API.addUser(newUser);
                this.setState({ isVaild: res.isVaild, error: res.error, });
                window.location.href = "/";
            } else {
                this.setState({ isVaild: false, error: 'Your email is linked with another account, please sign in.' });
                console.log(this.state.isVaild, this.state.error);
            }
        }
    }


    render() {
        return (
            <section className="form">

                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />

                <input
                    type="text"
                    id="userName"
                    className="form-control"
                    placeholder="Username"
                    onChange={this.handleOnInput}
                    value={this.state.newUser.userName}
                    required
                    autoFocus
                />
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={this.handleOnInput}
                    value={this.state.email}
                    required
                />
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.handleOnInput}
                    value={this.state.password}
                    required
                />
                <input
                    type="password"
                    id="confirm_password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={this.handleOnInput}
                    value={this.state.confirm_password}
                    required
                />

                <label>Select Profile Picture</label>
                <section className="user__profile__img__selction">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id='profile_img'
                            value={'./images/users/user-profile-1.png'} onChange={this.handleOnInput} />
                        <img className="user__img" src="./images/users/user-profile-1.png" alt="user-profile" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id='profile_img'
                            value={'./images/users/user-profile-2.png'} onChange={this.handleOnInput} />
                        <img className="user__img" src="./images/users/user-profile-2.png" alt="user-profile" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id='profile_img'
                            value={'./images/users/user-profile-3.png'} onChange={this.handleOnInput} />
                        <img className="user__img" src="./images/users/user-profile-3.png" alt="user-profile" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id='profile_img'
                            value={'./images/users/user-profile-4.png'} onChange={this.handleOnInput} />
                        <img className="user__img" src="./images/users/user-profile-4.png" alt="user-profile" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id='profile_img'
                            value={'./images/users/user-profile-5.png'} onChange={this.handleOnInput} />
                        <img className="user__img" src="./images/users/user-profile-5.png" alt="user-profile" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id='profile_img'
                            value={'./images/users/user-profile-6.png'} onChange={this.handleOnInput} />
                        <img className="user__img" src="./images/users/user-profile-6.png" alt="user-profile" />
                    </div>
                </section>

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
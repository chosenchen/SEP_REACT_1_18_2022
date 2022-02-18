import React from "react";
import './styles/logIn.css';

import './styles/logIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class LogIn extends React.Component {

    render() {
        return (
            <form class="form-signin">
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        )
    }
}

export default LogIn;
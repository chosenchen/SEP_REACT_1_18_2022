import React from "react";
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar"
import UserNavbar from "./components/Auth/user.navbar";
import HomePage from "./components/Pages/homePage";
import LogIn from "./components/Pages/logIn";
import SignUp from "./components/Pages/signUp";
import CreateLog from "./components/Pages/createLog";
import UserProfile from "./components/Auth/user.profile";

class App extends React.Component {

  constructor() {
    super();
    let auth = sessionStorage.getItem("auth");
    let user = sessionStorage.getItem("user");
    user = JSON.parse(user);
    if (sessionStorage.getItem("user") === null) {
      sessionStorage.setItem("user", null);
    }
    if (auth === 'true') { auth = true } else if (auth === 'false') { auth = false };
    this.state = { auth: auth, user: user};
  }

  render() {
    return (
      <main>
        {this.state.auth ?
          <UserNavbar auth={this.state.auth} user={this.state.user} /> : <Navbar />
        }

        <section style={{ margin: 20 }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/log-in" element={<LogIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/create-log" element={<CreateLog />} />
            <Route exact path="/profile" element={<UserProfile /> } />
          </Routes>
        </section>
      </main>
    )
  }
}

export default App;
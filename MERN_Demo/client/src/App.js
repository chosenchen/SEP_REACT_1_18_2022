import React from "react";
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar";
import UserNavbar from "./components/user.navbar";
import HomePage from "./components/homePage";
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import CreateLog from "./components/createLog";

class App extends React.Component {

  constructor() {
    super();
    let auth = sessionStorage.getItem("auth");
    if (auth === 'true') { auth = true } else if (auth === 'false') { auth = false };
    this.state = { auth: auth };
  }

  render() {
    return (
      <main>
        {this.state.auth ?
          <UserNavbar auth={this.state.auth} /> : <Navbar />
        }

        <section style={{ margin: 20 }}>
          <Routes>
            <Route exact path="/" element={<HomePage auth={this.state.auth} />} />
            <Route exact path="/log-in" element={<LogIn auth={this.state.auth} />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/create-log" element={<CreateLog />} />
          </Routes>
        </section>
      </main>
    )
  }
}

export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import CreateLog from "./components/createLog";

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <section style={{ margin: 20 }}>
          <Routes>
            <Route exact path="/" element={ <HomePage />} />
            <Route exact path="/log-in" element={ <LogIn /> } />
            <Route exact path="/sign-up" element={ <SignUp /> } />
            <Route exact path="/create-log" element={ <CreateLog /> } />
          </Routes>
        </section>
      </main>
    )
  }
}

export default App;
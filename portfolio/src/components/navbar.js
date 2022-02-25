import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from '../utils/style.js'

function NavBar() {

    useEffect(() => {
        navigation();;
    });

    return (
        <div className="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.svg" alt='' /></a>
                        </div>
                    </div>

                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div className="primary-nav">
                            <ul>
                                <NavLink to="/">
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/portfoilo">
                                    <li>Portfolio</li>
                                </NavLink>
                                <NavLink to="/contact">
                                    <li>Contact</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default NavBar;
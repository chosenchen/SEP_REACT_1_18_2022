import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                        <div className="logo">
                            <NavLink to="/"><img src="images/logo.svg" alt="logo" /></NavLink>
                        </div>
                    </div>
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div className="primary-nav">
                            <ul>
                                <li><NavLink className='nav' to="/">Home</NavLink></li>
                                <li><NavLink className='nav' to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink className='nav' to="/contact">Contact</NavLink></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavigationBar;
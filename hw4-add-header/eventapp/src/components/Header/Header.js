import React from "react";

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header-main">
                <h1 className="header-main__title">EventApp</h1>
                <nav className="header-main__nav">
                    <ul className="nav-btns">
                        <li>
                            <button className="nav-btn">Events List</button>
                        </li>
                        <li>
                            <button className="nav-btn">Coming Events</button>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;
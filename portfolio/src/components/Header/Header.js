import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'

export default class Header extends React.Component {
  hanldeNavClick = (e, pageInfo) => {
    e.preventDefault();
    this.props.hanldePageChange(pageInfo);
  };
  render() {
    const { pagesInfo } = this.props;
    return (
      <header className="app-header">
        <img className="logo" src={logo} alt="logo" />
        <nav className="app-header__navtext">
        
          {Object.keys(pagesInfo).map((key) => (
            <a
              href={key}
              key={key}
              onClick={(e) => this.hanldeNavClick(e, key)}
            >
              {key}
            </a>
          ))}
        </nav>
      </header>
    );
  }
}

import React from "react";
import logo from "../../../../images/logo.svg";

const Navigation = (props) => {
  const { pagesInfo, hanldePageChange } = props;
  const hanldeNavClick = (e, pageInfo) => {
    e.preventDefault();
    hanldePageChange(pageInfo);
  };

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <img src={logo} />
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                {Object.keys(pagesInfo).map((key) => (
                  <li>
                    <a
                      href={key}
                      key={key}
                      onClick={(e) => hanldeNavClick(e, key)}
                    >
                      {key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;

const tem = (
  <header className="app-header">
    <nav className="app-header__nav">
      <EventCounter></EventCounter>

      {Object.keys(pagesInfo).map((key) => (
        <a href={key} key={key} onClick={(e) => hanldeNavClick(e, key)}>
          {key}
        </a>
      ))}
    </nav>
  </header>
);
const temNav = (
  <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
    <div class="primary-nav">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="portfolio.html">Portfolio</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

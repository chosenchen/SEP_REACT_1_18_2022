import React from "react";
import logo from "../../images/logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = (props) => {
  const { pagesInfo, hanldePageChange } = props;
  const hanldeNavClick = (e, pageInfo) => {
    e.preventDefault();
    hanldePageChange(pageInfo);
  };

  return (
    <div className="navigation">
      <Container fluid>
        <Row>
          <Col xs={1} sm={1} md={1} lg={1} className="text-center">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={11} sm={11} md={11} lg={11} className="text-right">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Navigation;

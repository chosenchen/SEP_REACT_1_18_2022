import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import About from '../about/about.js';
import Summary from '../about/summary.js';

class Main extends React.Component{
  render(){
    return (
      <div className="main">
        <Container fluid>
          <Row>
            <div className="entry-banner text-center">
              <h1 id = "hello">Hello, I'm</h1>
              <h1 id = "name">XXXX</h1>
              <h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
            </div>
          </Row>
          <Row className="text-center">
            <div className="banner-buttons">
              <Col sm={2} md={2} sm-offset={5} col-md-offset={5}>
                <Button className="btn-default btn-border">Info</Button>
              </Col>
              <Col sm={2} md={2} sm-offset={5} col-md-offset={5}>
                <Button className="btn-default btn-border">Portfolio</Button>
              </Col>
            </div>
          </Row>
        </Container>
        <About/>
        <Summary/>
      </div>
    )
  }
}

export default Main;
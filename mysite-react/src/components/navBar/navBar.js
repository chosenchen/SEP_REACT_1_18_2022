import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo.svg';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

class NavBar extends React.Component{
  render(){
    return(
      <div className='navigation'>
        <Container fluid>
          <Row>
            <Col xs={1} sm={1} md={1} lg={1} className="text-center">
              <div className="logo">
                <img src={logo}/>
              </div>
            </Col>
            <Col xs={11} sm={11} md={11} lg={11} className="text-right">
              <div className="primary-nav">
                <ul>
                  <li>Home</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default NavBar; 
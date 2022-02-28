import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import pinterest from '../../assets/pinterest.svg';
import email from '../../assets/email.svg';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <Container fluid>
          <Row>
            <div className="media-links">
              <Col sm={1} md={1} sm-offset={4} md-offset={4}>
                <div className="facebook">
                  <a href = "#"><Image src = {facebook} fluid/></a>
                </div>
              </Col>

              <Col sm={1} md={1}>
                <div className="linkedin">
                  <a href = "#"><Image src = {linkedin} fluid/></a>
                </div>
              </Col>

              <Col sm={1} md={1}>
                <div className="pinterest">
                  <a href = "#"><Image src = {pinterest} fluid/></a>
                </div>
              </Col>

              <Col sm={1} md={1}>
                <div className="email-icon">
                  <a href = "#"><Image src = {email} fluid/></a>
                </div>
              </Col>
            </div>
          </Row>

          <Row>
            <Col sm={6} md={6} className="text-right">
              <div className="personal-contact phone">
                <h4>Phone: XXXXXX</h4>
              </div>
            </Col>

            <Col sm={6} md={6} className="text-left">
              <div className="personal-contact email-personal-contact">
                <h4>Email: XXXXX@gmail.com</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={4} md={4} className="text-center">
              <div className="company-information">
                <h3>XXXX</h3>
                <h4>Copyright &copy; 2021</h4>
                <h4>NY</h4>
              </div>
            </Col>

            <Col sm={2} md={2} className="text-center">
              <div className="home-footer">
                <h4><a href = "#">Home</a></h4>
              </div>
            </Col>

            <Col sm={2} md={2} className="text-center">
              <div className="portfolio-footer">
                <h4><a href = "#">Portfolio</a></h4>
                <ul>
                  <li><a href = "#">Project1</a></li>
                  <li><a href = "#">Project2</a></li>
                  <li><a href = "#">Project3</a></li>
                  <li><a href = "#">See All</a></li>
                </ul>
              </div>
            </Col>

            <Col sm={2} md={2}  className="text-center">
              <div className="resume-footer">
                <h4><a href = "#">Resume</a></h4>
                <ul>
                  <li><a href = "#">Download</a></li>
                </ul>
              </div>
            </Col>

            <Col sm={2} md={2} className="text-center">
              <div className="contact-footer">
                <h4><a href = "#">Contact</a></h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;
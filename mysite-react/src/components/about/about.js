import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends React.Component{
  render(){
    return(
      <div className="about" id="about">
        <Container fluid>
          <Row>
            <Col sm={12} md={12} className="text-center">
              <div className="about-header">
                <h1>About Me</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12} className="text-center">
              <div className="about-header-quote">
                <h3>Sharing a little bit of my story...</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <div className="about-general-description">
              <Col sm={8} md={8}>
                <h2>General Overview</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </Col>
            </div>
          </Row>

          <Row>
            <div className="statistic-row">
              <div className="about-statistic-description">
                <Col sm={8} md={8}>
                  <h2>Statistics</h2>
                  <h5><em>And for those that don't fancy reading:</em></h5>
                  <br></br>

                  <p>Male, 200 years old.</p>
                  <p>Five feet 110 inches</p>
                  <p>Favorite fonts: Roboto </p>
                  <p>Loves to learn new things</p>
                </Col>
              </div>
            </div>
          </Row>

          <Row>
            <div className="about-option-buttons">
              <Col sm={2} md={2}>
                <a href = "#contact" className="btn btn-default btn-black-border">Contact</a>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;
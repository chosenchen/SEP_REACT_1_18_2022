import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import developmentImg from '../../assets/developerdesign.svg';
import responsiveImg from '../../assets/responsivedesign.svg';
import innovationImg from '../../assets/innovativesolutions.svg';
import passionImg from '../../assets/passion.svg';

class Summary extends React.Component{
  render(){
    return (
      <div className= "summary">
        <Container fluid>
          <Row>
            {/* <div className= "development-summary"> */}
              <Col sm={1} md={1}>
                <div className= "development-img">
                  <Image src={developmentImg} fluid/>
                </div>
              </Col>

              <Col sm={4} md={4}>
                <div className= "development-description">
                  <h3>Development and Design</h3>
                  <p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
                </div>
              </Col>
            {/* </div> */}

            {/* <div className= "responsive-summary"> */}
              <Col sm={1} md={1} sm-offset={2} md-offset={2}>
                <div className="responsive-img">
                  <Image src={responsiveImg} fluid/>
                </div>
              </Col>

              <Col className="col" sm={4} md={4}>
                <div className= "responsive-description">
                  <h3>Responsive Layouts</h3>
                  <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
                </div>
              </Col>
            {/* </div> */}
          </Row>

          <Row>
            {/* <div className= "ideas-summary"> */}
              <Col sm={1} md={1}>
                <div className= "idea-img">
                  <Image src={innovationImg} fluid/>
                </div>
              </Col>

              <Col sm={4} md={4}>
                <div className= "idea-description">
                  <h3>Ideas and Solutions</h3>
                  <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
                </div>
              </Col>
            {/* </div> */}

            {/* <div className="passion-summary"> */}
              <Col sm={1} md={1} sm-offset={2} md-offset={2}>
                <Image src={passionImg} fluid/>
              </Col>

              <Col sm={4} md={4}>
                <div className= "passion-description">
                  <h3>Passion and Dedication</h3>
                  <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
                </div>
              </Col>
            {/* </div> */}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Summary;
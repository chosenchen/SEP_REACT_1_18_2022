import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from './card';

class Projects extends React.Component{
  render(){
    return(
      <div className="projects" id="projects">
        <Container fluid>
          <Row>
            <Col sm={12} md={12} className="text-center">
              <div className="projects-header">
                <h1>Projects and Portfolio</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12} className="text-center">
              <div className="projects-header-quote">
                <h3>Sharing my endeavors and passions...</h3>
              </div>
            </Col>
          </Row>
  
          <Row>
            <Card
              className="luvtalk-project"
              header="LUV TALK Website"
              description="Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
            />
            <Card
              className="personal-website-project"
              header="Personal Website"
              description="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
            />
            <Card
              className="strike-zone-project"
              header="Strike Zone Analysis"
              description="Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
            />
          </Row>

          <Row>
            <Col sm={2} md={2} sm-offset={5} md-offset={5}>
              <div className="see-more-button">
                <Button className="btn-default btn-border">More Projects</Button>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

export default Projects;
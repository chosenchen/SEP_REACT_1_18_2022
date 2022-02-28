import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Card extends React.Component{
  render(){
    return(
      <Col sm={4} col={4} className="text-center">
        <div className={this.props.className}>
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <Row>
            <Col sm={4} md={4} col-sm-offset={4} col-md-offset={4}>
              <div className="project-more-info">
                <Button className="btn-default btn-border">More</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}

export default Card;
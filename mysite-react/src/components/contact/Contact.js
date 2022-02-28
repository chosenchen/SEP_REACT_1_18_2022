import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component{
  render(){
    return (
    <div className="contact" id="contact">
      <Container fluid>
        <Row>
          <Col sm={12} md={12} className="text-center">
            <div className="contact-header">
              <h1>Contact</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={12} className="text-center">
            <div className="contact-header-quote">
              <h4>"XXXXX"</h4>
              <h4>-XXX</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={6} md={6}>
            <div className="contact-instructions">
              <h2>Reaching out to me</h2>
							<p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.</p>
							<br/>
							<br/>
							<br/>
							<h2>Contact Information</h2>
							<p>XXXX</p>
							<p>XXXX</p>
							<p>(XXXX)-445-7747</p>
							<p>XXXXXX@gmail.com</p>
            </div>
          </Col>

          <Col sm={6} md={6}>
            <div className="contact-form-body">
							<form>
								<Row>
									<Col sm={6} md={6}>
										<div className="firstname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "First Name"/>
										</div>
									</Col>

									<Col sm={6} md={6}>
										<div className="lastname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "Last Name"/>
										</div>
									</Col>
								</Row>

								<Row>
									<Col sm={12} md={12}>
										<div className="email">
											<h4>Email *</h4>
											<input type = "text" placeholder= "Email"/>
										</div>
									</Col>
								</Row>

								<Row>
									<Col sm={12} md={12}>
										<div className="message">
											<h4>Message *</h4>
											<textarea placeholder= "Message"/>
										</div>
									</Col>
								</Row>

								<Row>
									<div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
										<div className="submit-contact">
											<Button className="btn-default btn-border">Submit</Button>
										</div>
									</div>
								</Row>
							</form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default Contact;
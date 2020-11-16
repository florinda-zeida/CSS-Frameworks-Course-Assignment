import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    
    <Container>
    <Row className="justify-content-center">
    <Col lg="auto" Variable width content className="contact-icon">
  <span><i className="fas fa-envelope"></i><p>hello@yay.com</p></span>
  <span><i className="fas fa-phone-alt"></i><p>123 456 7890</p></span>
  <div className="contact-adress"><i className="fas fa-map-marker-alt"></i><span><p>123 Some Street</p><p>Somewhere</p><p>Some City</p><p>10000</p></span></div>
  </Col>
  <Col lg="auto" Variable width content className="contact-form">
  <h2>Submit your details</h2>
    <Form>
    <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group>
  <Form.Label>Website</Form.Label>
  <Form.Control type="websiate" placeholder="Website" />
</Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Allow us to sell your personal details
  to whomever we want" />
</Form.Group>
  
<Button variant="primary" size="lg" block>
    Submit
  </Button>
</Form>
    </Col>
  </Row>
</Container>
    );
  }

  export default Contact;

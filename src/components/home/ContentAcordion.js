import React from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


function ContentAcordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Card>
        <Card.Header>
          <Accordion.Toggle className="btn-acordion" as={Button} variant="link" eventKey="0">
            First
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <Card.Text>
          <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
          </Card.Text>
        <Card.Img src="images/tab-1.jpg" fluid />
        <div class="media-icons"> SHARE<i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle className="btn-acordion" as={Button} variant="link" eventKey="1">
            Second
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
        <Card.Text>
        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
        </Card.Text>
    <Card.Img src="images/tab-2.jpg" fluid />
    <div class="media-icons"> SHARE<i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div>
        </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
      <Card.Header>
        <Accordion.Toggle className="btn-acordion" as={Button} variant="link" eventKey="2">
          Third
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Card.Text>
      <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
      </Card.Text>
  <Card.Img src="images/tab-3.jpg" fluid />
  <div class="media-icons"> SHARE<i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div>
      </Card.Body>
      </Accordion.Collapse>
    </Card>
    </Accordion>
  )
}

export default ContentAcordion

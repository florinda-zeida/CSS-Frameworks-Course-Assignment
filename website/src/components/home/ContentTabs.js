import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function ContentTabs() {
  return (
<div className="d-none d-md-block">
<Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="content-tabs">
  <Tab eventKey="one" title="First" class="tab-border">
  <Row>
  <Col sm={4}>
  <Image src="images/tab-1.jpg"  fluid />
  </Col>
  <Col sm={8}>
  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
  <div class="media-icons media-icons_left "> SHARE<i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div>
  </Col>
  </Row>
  </Tab>


  <Tab eventKey="two" title="Second" class="tab-border">
  <Row>
  <Col sm={4}>
  <Image src="images/tab-2.jpg"  fluid />
  </Col>
  <Col sm={8}>
  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
  <div class="media-icons"> SHARE<i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div>
  </Col>
  </Row>
  </Tab>


  <Tab eventKey="three" title="Third" class="tab-border">
  <Row>
  <Col sm={4}>
  <Image src="images/tab-3.jpg"  fluid />
  </Col>
  <Col sm={8}>
  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
  <div class="media-icons"> SHARE<i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div>
  </Col>
  </Row>
  </Tab>
</Tabs>

</div>
  )
}
export default ContentTabs

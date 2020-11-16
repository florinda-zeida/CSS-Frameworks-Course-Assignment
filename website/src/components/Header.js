import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Home from "./home/Home";
import News from "./news/News";
import Contact from "./contact/Contact";

function Header() {
  return (
    <Container>
    <Router>
      <div>
      <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink  exact to="/" className="nav-link">Home</NavLink>
        <NavLink to="/news" className="nav-link">News</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Go</Button>
      </Form>
      </Navbar.Collapse>
    </Navbar>
       
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
   
    </Container>
  )
}

export default Header


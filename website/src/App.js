import React from "react";
import './sass/style.scss';
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header/>
      <Footer/>
    </Container>
  )
}

export default App

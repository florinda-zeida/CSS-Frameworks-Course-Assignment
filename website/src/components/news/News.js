import React from 'react';
import Container from 'react-bootstrap/Container';
import ContentPagination from "./ContentPagination";
import ContentCard from "./ContentCard";


function News() {
  return (
  <Container>
    <div className="paragraph">
    <h2>News</h2>
    </div>
    <ContentPagination/>
    <ContentCard/> 
    <ContentPagination/>
 </Container>
    );
  }

  export default News;

  
  

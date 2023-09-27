import { Container,Row,Col } from 'react-bootstrap';
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import ProList from './products/ProList';

export default function Products() {
  const [ cat,setCate ]= useState("");
  const clickCate = (c)=>{setCate(c); console.log(cat);}

  return (
    <Container className='Products my-3 mx-auto'>
      <Row className='flex-md-row flex-column'>
        <Col xs md={4} lg={3}>{<ProList clickCate={clickCate}/>}</Col>
        <Col xs md={7} lg={9}>{<Outlet context={[cat]}/>} </Col>
      </Row>
      
    </Container>
  )
}
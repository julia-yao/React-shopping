import { Container,Row,Col } from 'react-bootstrap';
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import ProList from './products/ProList';

export default function Products() {

  const [ cates,setCate ]= useState()

  const clickCate = (id)=>{
    const newCate = meals.filter(meals)=> meals.id === id );
    setCate(newCate)
  }

  return (
    <Container className='Products my-3 mx-auto'>
      <Row className='flex-md-row flex-column'>
        <Col xs md={4} lg={3}>{<ProList clickCate={clickCate}/>}</Col>
        <Col xs md={7} lg={9}>{<Outlet context={setCate}/>} </Col>
      </Row>
      
    </Container>
    
  )
}
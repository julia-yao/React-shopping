import { Row,Col } from 'react-bootstrap';
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import ProList from './products/ProList';
import { MajorProductBgImg } from './home/MajorProduct';

export default function Products() {
  
  const [ category,setCategory ]= useState("")


  return (
    <div className='Products p-3 mx-auto' style={MajorProductBgImg}>
      <Row className='flex-md-row flex-column d-flex justify-content-center'>
        <Col xs md={4} lg={3}>{<ProList data={setCategory}/>}</Col>
        <Col xs md={7} lg={9}>{<Outlet context={[category,setCategory]}/>} </Col>
      </Row>
      
    </div>
    
  )
}
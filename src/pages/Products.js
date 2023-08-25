import { Container,Row,Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ProList from './products/ProList';

export default function Products() {
  return (
    <Container className='Products my-3 mx-auto'>
      <Row className='flex-md-row flex-column'>
        <Col xs md={4} lg={3}>{<ProList />}</Col>
        <Col xs md={7} lg={9}>{<Outlet />} </Col>
      </Row>
      
    </Container>
    
  )
}
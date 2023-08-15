import { Container,Row,Col } from 'react-bootstrap';
import Meal from './products/Meal';
import ProList from './products/ProList';

export default function Products() {
  return (
    <Container className='my-3 mx-auto'>
      <Row>
        <Col xs={12} md={4} lg={3}>{<ProList />}</Col>
        <Col xs={12} md={7} lg={9}>{<Meal />} </Col>
      </Row>
      
    </Container>
    
  )
}
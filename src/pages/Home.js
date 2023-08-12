import Banner from "./home/Banner";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MajorProduct from "./home/MajorProduct";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
            <Banner></Banner>
            <MajorProduct></MajorProduct>

        </Col>
      </Row>
    </Container>
  );
}

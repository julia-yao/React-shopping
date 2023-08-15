import { Container,Row,Col } from 'react-bootstrap';
import Banner from "./home/Banner";
import MajorProduct from "./home/MajorProduct";
import ProductMask from "./home/ProductMask";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
            <Banner />
            <MajorProduct />
            <ProductMask />
        </Col>
      </Row>
    </Container>
  );
}

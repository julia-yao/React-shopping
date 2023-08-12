import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function MajorProduct() {
  return (
    <Container>
        <Row>
            <Col className='d-flex justify-content-center'>
                <div>
                    <span className="text-success mb-3">
                        FEATURED PRODUCTS
                    </span>
                    <h4 className="fw-bold text-success">美式培根早午餐</h4>
                    
                    <p className="text-dark fs-5">
                        新鮮現打蓬鬆舒芙蕾，一口滑嫩美式炒蛋加上培根及新鮮蔬菜，經典菜餚不能錯過。
                    </p>
                    <Button variant="success">開始訂購</Button>
                </div>
            </Col>
            <Col>
                <Image src="https://sarabethsrestaurants.jp/_img/page/menu/07.jpg" className='w-100'/>
            </Col>
        </Row>
    </Container>
    
  )
}

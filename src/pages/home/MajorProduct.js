import { Row, Col, Button, Image } from 'react-bootstrap';

export default function MajorProduct() {
  return (
    <div className='my-5' >
        <Row className="flex-md-row flex-column-reverse justify-content-center align-items-center">
            <Col xs lg="5" className="mt-3">
                <div>
                    <span className="text-success mb-3">
                        FEATURED PRODUCTS
                    </span>
                    <h4 className="fw-bold text-success">美式培根早午餐</h4> 
                    <p className="text-dark fs-5">
                        新鮮現打蓬鬆舒芙蕾，一口滑嫩美式炒蛋加上培根及新鮮蔬菜，經典菜餚不能錯過。
                    </p>
                    <Button variant="success">了解更多</Button>
                </div>
            </Col>
            <Col xs lg="5">
                <Image src="https://sarabethsrestaurants.jp/_img/page/menu/07.jpg" className='img-fluid rounded'/>
            </Col>
        </Row>
    </div>
  )
}

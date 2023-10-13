import { Row, Col, Image } from 'react-bootstrap';
export const MajorProductBgImg ={
        backgroundImage:"url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "left bottom"
        
    }
export default function MajorProduct() {
  return (
    <div className="container my-md-5 my-3 p-3" style={MajorProductBgImg}>
        <Row className="flex-md-row flex-column justify-content-center align-items-center">
            <Col xs  md={4} lg={3} className="mt-md-3">
                <Image src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{hidth:"300px"}} className='img-fluid rounded-pill border border-light shadow'/>
            </Col>
            <Col xs  md={8} lg={5} className="mt-3">
                <div className='p-3'>
                    <span className="text-light mb-3">
                        FRESH PRODUCTS
                    </span>
                    <p className="fw-bold text-light border-top py-2 fs-4">新鮮作物</p>
                    <p className="text-light fs-5">
                        我們使用富含營養的蔬菜，主食生菜沙拉內含洋蔥、芝麻葉美生菜配上堅果，創造爽脆口感，醬汁使用自製的大蒜橄欖油醋，自製舒芙蕾用紐西蘭奶油與農場雞蛋，維持外部焦香上色內部軟嫩口感，配上經典主食，一起用活力的食物開始一天。
                    </p>
                </div>
            </Col>
            
        </Row>
        <Row className="flex-md-row flex-column-reverse justify-content-center align-items-center">
            <Col xs  md={8} lg={5} className="mt-3">
                <div className='p-lg-0 p-3'>
                    <span className="text-light mb-3">
                        FEATURED PRODUCTS
                    </span>
                    <p className="fw-bold text-light border-top py-2 fs-4">特製拿鐵</p> 
                    <p className="text-light fs-5">
                        季節特選藝伎咖啡豆，配上細緻打發的奶泡，衝出濃醇口感。季節特選藝伎咖啡豆，配上細緻打發的奶泡，衝出濃醇口感。
                    </p>
                </div>
            </Col>
            <Col xs  md={4} lg={3} className="mt-3">
                <Image src="https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{width:"300px"}} className='img-fluid rounded-pill border border-light shadow'/>
            </Col>
        </Row>
    </div>
  )
}

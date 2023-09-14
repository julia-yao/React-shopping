import { Row, Col, Image } from 'react-bootstrap';

export default function MajorProduct() {
  return (
<<<<<<< Updated upstream
    <div className='my-5' >
        <Row className="flex-md-row flex-column-reverse justify-content-center align-items-center">
            <Col xs lg={5} className="mt-3">
                <div>
                    <span className="text-success mb-3">
                        FEATURED PRODUCTS
                    </span>
                    <h4 className="fw-bold text-success border-top py-2">美式培根早午餐</h4> 
=======
    <div className='container my-md-5 my-3' >
        <Row className="justify-content-center">
            <Col md={9} className="m-3 p-3 shadow-lg">
                <div className="p-3 text-break">
                    <p className="text-primary fs-4" >
                        Sara's Lunch 在2019年由兩位喜愛食物的女性創立，結合了新鮮豐富的作物和細緻烘焙的咖啡，
                        我們相信簡單新鮮勝過香料的添加，把為家人準備的餐點放上餐桌，共享歡聚時刻！
                    </p>
                </div>
            </Col>
        </Row>
        
        <Row className="flex-md-row flex-column justify-content-center align-items-center">
            <Col xs  md={4} lg={3} className="mt-md-3">
                <Image src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{hidth:"400px"}} className='img-fluid rounded-pill shadow'/>
            </Col>
            <Col xs  md={8} lg={5} className="mt-3">
                <div className='p-3'>
                    <span className="text-success mb-3">
                        FRESH PRODUCTS
                    </span>
                    <p className="fw-bold text-success border-top py-2 fs-4">新鮮作物</p>
                    <p className="text-dark fs-5">
                        我們使用富含營養的蔬菜，主食生菜沙拉內含洋蔥、芝麻葉美生菜配上堅果，創造爽脆口感，醬汁使用自製的大蒜橄欖油醋，自製舒芙蕾用紐西蘭奶油與農場雞蛋，維持外部焦香上色內部軟嫩口感，配上經典主食，一起用活力的食物開始一天。
                    </p>
                </div>
            </Col>
            
        </Row>
        <Row className="flex-md-row flex-column-reverse justify-content-center align-items-center">
            <Col xs  md={8} lg={5} className="mt-3">
                <div className='p-lg-0 p-3'>
                    <span className="text-success mb-3">
                        FEATURED PRODUCTS
                    </span>
                    <p className="fw-bold text-success border-top py-2 fs-4">特製拿鐵</p> 
>>>>>>> Stashed changes
                    <p className="text-dark fs-5">
                        新鮮現打蓬鬆舒芙蕾，一口滑嫩美式炒蛋加上培根及新鮮蔬菜，經典菜餚不能錯過。
                    </p>
                    <Button variant="success">了解更多</Button>
                </div>
            </Col>
<<<<<<< Updated upstream
            <Col xs lg="5">
                <Image src="https://sarabethsrestaurants.jp/_img/page/menu/07.jpg" className='img-fluid rounded'/>
=======
            <Col xs  md={4} lg={3} className="mt-3">
                <Image src="https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{width:"300px"}} className='img-fluid rounded-pill shadow'/>
>>>>>>> Stashed changes
            </Col>
        </Row>
    </div>
  )
}

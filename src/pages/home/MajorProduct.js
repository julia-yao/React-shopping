import { Row, Col, Button, Image } from 'react-bootstrap';

export default function MajorProduct() {
  return (
    <div className='container my-md-5 my-3' >
        <Row className="flex-md-row flex-column-reverse justify-content-center align-items-center">
            <Col xs lg={3} className="mt-md-3">
                <Image src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{width:"300px"}} className='img-fluid rounded shadow'/>
            </Col>
            <Col xs lg={5} className="mt-3">
                <div className='p-3'>
                    <h2 className="text-success mb-3 border-bottom py-2">
                        FRESH FOOD
                    </h2>
                    <p className="text-dark fs-5">
                        Sara's Lunch 在2019年由兩位喜愛食物的女性創立，結合了新鮮直送的作物和細緻烘焙的咖啡，把為家人準備的餐點放上餐桌，希望共享歡聚時刻！<br/>
                        我們使用富含營養的蔬菜，主食生菜沙拉內含洋蔥、芝麻葉美生菜配上堅果，創造爽脆口感，醬汁使用自製的大蒜橄欖油醋，自製舒芙蕾用紐西蘭奶油與農場雞蛋，維持外部焦香上色內部軟嫩口感，配上經典主食，一起用活力的食物開始一天。
                    </p>
                </div>
            </Col>
            
        </Row>
        <Row className="flex-md-row flex-column-reverse justify-content-center align-items-center">
            <Col xs lg={5} className="mt-3">
                <div className='p-lg-0 p-3'>
                    <span className="text-success mb-3">
                        FEATURED PRODUCTS
                    </span>
                    <h4 className="fw-bold text-success border-top py-2">特製拿鐵</h4> 
                    <p className="text-dark fs-5">
                        季節特選藝伎咖啡豆，配上細緻打發的奶泡，衝出濃醇口感。季節特選藝伎咖啡豆，配上細緻打發的奶泡，衝出濃醇口感。
                    </p>
                </div>
            </Col>
            <Col xs lg={3} className="mt-3">
                <Image src="https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{width:"300px"}} className='img-fluid rounded shadow'/>
            </Col>
        </Row>
    </div>
  )
}

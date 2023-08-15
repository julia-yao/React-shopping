import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function ProductMask() {
  return (
    <div className='my-5'>
        <Row  className='ProductMask g-0'>
            <Col xs={12} md={6} lg={3} className='g-0 maskcard'>
                <a href="meals.html#list-item-bs">
                    <Image src="https://sarabethsrestaurants.jp/_img/page/menu/10.jpg" alt="經典早午餐"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <h4 className="font-family text-wrap">
                            BREAKFAST＆SALAD<br/>
                            早午餐沙拉
                        </h4> 
                    </div>
                </a>
            </Col>
            <Col xs={12} md={6} lg={3} className='g-0 maskcard'>
                <a href="meals.html#list-item-fc">
                    <Image src="https://sarabethsrestaurants.jp/_img/page/menu/02.jpg" alt="草莓鮮奶油法式吐司"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <h4 className="font-family">
                            FRENCH TOAST＆CAKE<br/>
                            法式吐司蛋糕
                        </h4> 
                    </div>
                </a>
            </Col>
            <Col xs={12} md={6} lg={3} className='g-0 maskcard'>
                <a href="meals.html#list-item-ct">
                    <Image src="https://www.doutor.co.jp/product/file/20230329113848.jpg" alt="蜂蜜歐雷"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <h4 className="font-family">
                            COFFEE＆TEA<br/>
                            咖啡茶飲 
                        </h4> 
                    </div>
                </a>
            </Col>
            <Col xs={12} md={6} lg={3} className='g-0 maskcard'>
                <a href="meals.html#list-item-js">
                    <Image src="https://www.doutor.co.jp/product/file/20200618185939.jpg" alt="氣泡水"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <h4 className="font-family">
                            JUICE＆SODA<br/>
                            果汁氣泡 
                        </h4> 
                    </div>
                </a>
            </Col>
        </Row>
    </div>
  )
}

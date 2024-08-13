import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductMask() {
  return (
    <div className='container my-3'>
        <Row  className='productMask'>
            <Col xs={6} lg={3} className='g-0 maskCard'>
                <Link to="/products">
                    <Image src="https://sarabethsrestaurants.jp/_img/page/menu/10.jpg" fluid  alt="經典早午餐"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <span className="font-family text-wrap fs-md-5">
                            BREAKFAST＆SALAD<br/>
                            早午餐沙拉
                        </span> 
                    </div>
                </Link>
            </Col>
            <Col xs={6} lg={3} className='g-0 maskCard'>
                <Link to="/products">
                    <Image src="https://sarabethsrestaurants.jp/_img/page/menu/02.jpg" fluid alt="草莓鮮奶油法式吐司"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <span className="font-family fs-md-5">
                            FRENCH TOAST＆CAKE<br/>
                            法式吐司蛋糕
                        </span> 
                    </div>
                </Link>
            </Col>
            <Col xs={6} lg={3} className='g-0 maskCard'>
                <Link to="/products">
                    <Image src="https://www.doutor.co.jp/product/file/20230329113848.jpg" fluid alt="蜂蜜歐雷"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <span className="font-family fs-md-5">
                            COFFEE＆TEA<br/>
                            咖啡茶飲 
                        </span> 
                    </div>
                </Link>
            </Col>
            <Col xs={6} lg={3} className='g-0 maskCard'>
                <Link to="/products">
                    <Image src="https://www.doutor.co.jp/product/file/20200618185939.jpg" fluid alt="氣泡水"/>
                    <div className="mask"></div>
                    <div className="txt">
                        <span className="font-family fs-md-4">
                            JUICE＆SODA<br/>
                            果汁氣泡 
                        </span> 
                    </div>
                </Link>
            </Col>
        </Row>
    </div>
  )
}

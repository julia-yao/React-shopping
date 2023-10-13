import { Row, Col, Image } from 'react-bootstrap';

export default function Banner() {
    const myStyle={
      backgroundImage:
      "url('https://images.unsplash.com/photo-1525596201491-f6eae338a205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80')",
    };
    return (
      <>
      <div className="banner" style={myStyle}>
        <div className="bannerBgDark"></div>
        <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="bannerTxt text-center text-light">
                <h1 className="fw-bold fs-1">FRESHｘSWEET</h1>
                <p>用心準備餐點，分享新鮮美味</p>
            </div>
        </div>
      </div>
      <div className="container my-md-5 my-3 p-3">
        <Row className="justify-content-center">
          <Col md={5} className="cafelocation">
            <div className="m-5">
                <div className="p-3">
                  <h1 className='cafetitle fs-s text-info'>Sara's Lunch</h1>
                  <div className="my-5">
                    <span className="">
                      在2019年由兩位喜愛食物的女性創立，結合了新鮮豐富的作物和細緻烘焙的咖啡，
                      我們相信簡單新鮮勝過香料的添加，把為家人準備的餐點放上餐桌，共享歡聚時刻！
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-end mt-5">
                    <span className="fw-bold fst-italic">#FrenchToast</span>
                    <span className="fw-bold fst-italic">#Breakfast</span>
                    <span className="fw-bold fst-italic">#Coffee</span>
                  </div>
                </div>
                <div className="cafeline">
                  <hr className='border border-primary'/>
                  <span className='text-primary align-self-center'>CURATED WITH A UNIQUE SENSE</span>
                </div>
            </div>
          </Col>
          <Col md={3} className="">
            <div className="">
              <Image src="https://sarabethsrestaurants.jp/_img/page/location/lumine02.jpg" className="cafeImg shadow" alt=""/>
            </div>
          </Col>
          <Col md={3} className="">
            <div className="">
              <Image src="https://sarabethsrestaurants.jp/_img/page/location/nagoya02.jpg" className="cafeImg shadow" alt=""/>
            </div>
          </Col>
        </Row>
      </div>
      </>
    );
}

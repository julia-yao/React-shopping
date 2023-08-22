import { NavLink, Outlet } from "react-router-dom"
import { Container,Row,Col, Button } from 'react-bootstrap';


export default function HelpLayout() {
  return (
    
    <Container className="my-3 mx-auto">
      <Row>
        <Col>
            <Row>
              <Col lg={7}>
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill text-warning h2 p-3"></i>
                  <div>
                    <span className="h6 text-warning">OUR STORE</span>
                    <h3 className="text-success fw-bold">100 台北市中正區牯嶺街5巷2號</h3>
                  </div>
                </div>
                <p className="p-3 p-lg-4">Sara's Lunch 是由兩位女性共同創立，結合了新鮮直送的作物和細緻烘焙的咖啡，把為家人準備的餐點放上餐桌，希望與朋友共享歡聚時刻！</p>
              </Col>
              <Col lg={5}>
                <div className="col d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill text-warning h2 p-3"></i>
                  <div>
                    <span className="h6 text-warning">CALL US</span>
                    <h4 className="text-success fw-bold">0914-000-222</h4>
                  </div>
                </div>
                
                <div className="col d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill text-warning h2 p-3"></i>
                  <div>
                    <span className="h6 text-warning">TELL US</span>
                    <h4 className="text-success fw-bold">saraslunch@gmail.com</h4>
                  </div>
                </div>
                <div className="col d-flex align-items-start mb-3">
                  <i className="bi bi-clock-fill text-warning h2 p-3"></i>
                  <div>
                    <span className="h6 text-warning">OPENING TIME</span>
                    <h4 className="text-success fw-bold">
                      M0N. - FRI. 08:00~17:00<br/>
                      SAT. - SUN. 11:00~20:00
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
            
            <nav className="d-flex justify-content-center align-items-center m-2">
              <NavLink to="faq"><Button variant="success" className="m-2">View the FAQ</Button></NavLink>
              <NavLink to="contact"><Button variant="success" className="m-2">Contact Us</Button></NavLink>
            </nav>

            <Outlet />
        </Col>
      </Row>
    </Container>

      
      
    
  )
}
import { Row,Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FootLayout() {
  return (
    <div className='FootLayout bg-light'>
        <Row>
            <Col> 
              <div className="p-4">
                <div className="">
                  <Link className="fs-4 text-dark" to="/">
                    Sara's Lunch
                  </Link>
                  <p>用心為您準備每一份餐點，快速傳遞新鮮與美味。</p>
                </div>

                <ul className="list-unstyled d-flex">
                  <li>
                    <Link className="pe-3 link-secondary" href="#"><i className="h4 bi bi-facebook"></i></Link>
                  </li>
                  <li>
                    <Link className="pe-3 link-secondary" href="#"><i className="h4 bi bi-instagram"></i></Link>
                  </li>
                  <li>
                    <Link className="pe-3 link-secondary" href="#"><i className="h4 bi bi-twitter"></i></Link>
                  </li>
                  <li>
                    <Link className="pe-3 link-secondary" href="#"><i className="h4 bi bi-envelope"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="text-center my-2">
                <p className="text-muted small m-0">© 2023 Sara's Lunch. 僅為作品練習使用。</p>
              </div>
                
            </Col>
        </Row>
    </div>
  )
}

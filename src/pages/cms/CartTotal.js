import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

<<<<<<< Updated upstream
export default function CartTotal({data}) {
  let total = 0;
=======
let coupons = [{name: "love99",num : 0.1}];

function setDiscount(coupon) {
  for(let i=0;i<coupon.length;i++){
    if(coupons[i].name === coupon)
    return coupons[i].num
  }
  return 0
}

export default function CartTotal({data}) {
  
  const [ coupon, setCoupon ] = useState("");
  function couponChange(e){
    setCoupon(e.target.value)
  }

  
  let subTotal = 0;
>>>>>>> Stashed changes
  for(let i=0;i<data.length;i++)
    total+=data[i].st;

  return (
    <div className="container">
        <Row className="my-2 align-items-center justify-content-between ps-2">
          <Col md={6} className="">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>
                  <i className="bi bi-bell mx-1"></i>
                  購物節輸入優惠碼 love99 即享九折優惠
                </Form.Label>
                <Form.Control type="" placeholder="輸入優惠碼" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={5}>
              <div className="text-success fs-3">
                訂單總金額  NT. <strong className="">{total}</strong>元
              </div>
          </Col>
          <hr></hr>
        </Row>
        <div className="text-end d-flex justify-content-end my-2">
            <Link to="/products" className="btn btn-outline-success mx-2">繼續購物</Link>
            <Link to="/home" className="btn btn-warning">前往結帳</Link>
        </div>

      </div>
  )
}
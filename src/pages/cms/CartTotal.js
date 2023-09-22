import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

let coupons = [{name: "love99",num : 0.1}];

function setDiscount(coupon) {
  for(let i=0;i<coupon.length;i++){
    if(coupons[i].name == coupon)
    return coupons[i].num
  }
  return 0
}

export default function CartTotal({data,handleDelete}) {
  
  const [ coupon, setCoupon ] = useState("");
  function couponChange(e){
    setCoupon(e.target.value)
  }

  
  let subTotal = 0;
  for(let i=0;i<data.length;i++)
    subTotal+=data[i].st;

  let discount= subTotal*setDiscount(coupon);
  const total = subTotal-discount;

  return (
    <div className="container">
        <Row className="my-2 align-items-center justify-content-center ps-2">
          <Col md={6} className="">
            <Form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>
                  <i className="bi bi-bell mx-1"></i>
                  購物節輸入優惠碼 love99 即享九折優惠
                </Form.Label>
                <Form.Control type="" placeholder="輸入優惠碼" value={coupon} onChange={couponChange}/>
              </Form.Group>
            </Form>
          </Col>
          <Col md={5}>
              <div className="text-primary">
                <ul>
                  <li className="m-1 d-flex justify-content-end align-items-center" >訂單金額<span className="ms-2">{subTotal}</span></li>
                  <li className="m-1 d-flex justify-content-end align-items-center">折扣<span className="ms-2"> －{discount}</span></li> 
                  <li className="m-1 d-flex justify-content-end align-items-center">訂單總額<strong className="fs-5 ms-2">{total}</strong></li>
                </ul>
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
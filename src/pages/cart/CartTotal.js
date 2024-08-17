import { useState, useMemo } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const coupons = new Map([
  ["love99", 0.1],
]);

function getDiscount(coupon) {
  return coupons.get(coupon) || 0;
}

export default function CartTotal({ data }) {
  const [coupon, setCoupon] = useState("");

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const subTotal = useMemo(() => {
    return data.reduce((acc, item) => acc + item.st, 0);
  }, [data]);

  const discount = useMemo(() => {
    return subTotal * getDiscount(coupon);
  }, [subTotal, coupon]);

  const total = useMemo(() => {
    return subTotal - discount;
  }, [subTotal, discount]);

  return (
    <div className="container">
      <Row className="my-2 align-items-center justify-content-center ps-2">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="couponCode">
              <Form.Label>
                <i className="bi bi-bell mx-1"></i>
                購物節輸入優惠碼 love99 即享九折優惠
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="輸入優惠碼"
                value={coupon}
                onChange={handleCouponChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={5}>
          <div className="text-primary">
            <ul>
              <li className="m-1 d-flex justify-content-end align-items-center">
                訂單金額
                <span className="ms-2">{subTotal.toFixed(2)}</span>
              </li>
              <li className="m-1 d-flex justify-content-end align-items-center">
                折扣
                <span className="ms-2">－{discount.toFixed(2)}</span>
              </li>
              <li className="m-1 d-flex justify-content-end align-items-center">
                訂單總額
                <strong className="fs-5 ms-2">{total.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
        </Col>
        <hr />
      </Row>
      <div className="text-end d-flex justify-content-end mb-4">
        <Link to="/products" className="btn btn-outline-success mx-2">
          <i className="bi bi-caret-left-fill me-1"></i>
          繼續購物
        </Link>
        <Link to="/checkout" className="btn btn-warning">
          前往結帳
          <i className="bi bi-caret-right-fill ms-1"></i>
        </Link>
      </div>
    </div>
  );
}

import CheckItem from "./CheckItem";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { API_CARTS_GET_DATA } from '../../constants';
import OrderInfo from "./OrderInfo";
import swal from 'sweetalert';

async function checkoutLoader(setData) {
  try {
    const [ cartsRes ] = await Promise.all([
      fetch(API_CARTS_GET_DATA)
    ]);

    if (!cartsRes.ok) throw new Error('Failed to fetch cart data');

    const carts = await cartsRes.json();

    setData(carts);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
}

export default function Order() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const {state} = useLocation();

  useEffect(() => {
    checkoutLoader(setData);
    setInfo(state.orderInfo);
  }, [state.orderInfo]);
  

  const handleClick = () => {
    swal("送出訂單成功!", "您的訂單已送出，將於指定日期出貨！", "success");

    setTimeout(() => {
      navigate('/');
    }, 1000); // Numeric delay
  };

  return (
    <div className='Order py-3'>
      <Container>
        <h2>
          <i className="bi bi-bag-check-fill mx-2"></i>
          Sara's Lunch
        </h2>
        <hr />
        <Row className='justify-content-around m-2 flex-column flex-md-row'>
          <Col className='col-lg-5 border p-3 mx-md-2 mb-md-0 mb-2'>
            <CheckItem data={data} />
          </Col>
          
          <Col className='col-lg-5 border p-3 bg-light'>
            <OrderInfo info={info} /> 
          </Col>
        </Row>    
        <hr className='mb-2'/>
        <div className="d-flex justify-content-center m-3">
          <Button className="btn btn-warning" onClick={handleClick}>
            確認結帳
          </Button>
        </div>
      </Container>
    </div>
  );
}
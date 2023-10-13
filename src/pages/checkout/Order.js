import CheckItem from "./CheckItem";
import { Container, Row, Col,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { API_MEAL_GET_DATA, API_CARTS_GET_DATA } from '../../constants'
import OrderInfo from "./OrderInfo";
import swal from 'sweetalert';

async function checkoutLoader(setData,setInfo){
  let data =[];
  const res1 = await fetch(API_MEAL_GET_DATA);
  const res2 = await fetch(API_CARTS_GET_DATA);
  const res3 = await fetch ('http://localhost:8000/checkout')
  
  let meals = await res1.json();
  let carts = await res2.json();
  let checkout = await res3.json();
  setInfo(checkout);

  if(carts.length!==0){
      for(let i=0;i<carts.length;i++){
          for(let j=0;j<meals.length;j++){
              if(carts[i].id === meals[j].id){
                  meals[j].quantity = carts[i].quantity
                  data.push(meals[j])
              }
          }
      }
  } 
  setData(data);
}

  export default function Order() {
  const [data, setData] = useState([])
  const [info, setInfo] = useState([])
  const navigate = useNavigate();
  
  useEffect(()=>{
      checkoutLoader(setData,setInfo);}
  ,[]);

  const handleClick = (e)=>{
    swal("送出訂單成功!", "您的訂單已送出，三日內將出貨！", "success");  
    setTimeout(() => {
        navigate('/');
      }, "2000");
  }  

  return (
    <div className='Order'>
      <Container>
          <h2>
              <i className="bi bi-bag-check-fill mx-2"></i>
              Sara's Lunch
          </h2>
          <hr className=''/>
          <Row className='justify-content-around m-2 flex-column flex-md-row'>
              <Col className='col-lg-5 border p-3 mx-md-2 mb-md-0 mb-2'>
                <CheckItem data={data}/>
              </Col>
              
              <Col className='col-lg-5 border p-3 bg-light'>
                <OrderInfo info={info}/> 
              </Col>
          </Row>    
          <hr className='mb-2'/>
          <div className="d-flex justify-content-center m-3">
            <Button type="submit" className="btn btn-warning" onClick={handleClick}>確認結帳</Button>
          </div>
      </Container>
    </div>
  )
}


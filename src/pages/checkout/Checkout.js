import { Container, Row, Col,Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { API_MEAL_GET_DATA, API_CARTS_GET_DATA } from '../../constants'
import CheckInfo from './CheckInfo';
import CheckItem from './CheckItem';
import { Link } from 'react-router-dom';

async function checkoutLoader(setData){
    let data =[];
    const res1 = await fetch(API_MEAL_GET_DATA);
    const res2 = await fetch(API_CARTS_GET_DATA);
    
    let meals = await res1.json();
    let carts = await res2.json();

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

export default function Checkout() {
    const [data, setData] = useState([])
    const [ isPending,setIsPending ] = useState(false);

    useEffect(()=>{
        checkoutLoader(setData);}
    ,[]);
    
    
  return (
    <div className="checkout">
        <Container>
            <h2>
                <i className="bi bi-bag-check-fill mx-2"></i>
                確認訂單
            </h2>
            <hr className=''/>
            <Row className='justify-content-around m-2 flex-column flex-md-row'>
                <Col className='col-lg-5 border p-3 mx-md-2 mb-md-0 mb-2'>
                    <CheckItem data={data}/>
                </Col>
                
                <Col className='col-lg-5 border p-3 bg-light'>
                    <CheckInfo isPending={setIsPending}/>
                </Col>
            </Row>    
            <hr className='m-2'/>
            <div className="d-flex justify-content-end m-3">
                <Link to="/cart" className="btn btn-outline-success mx-2"><i className="bi bi-caret-left-fill me-1"></i>修改購物車</Link>
                {!isPending && <Link to="/order"><Button type="submit">送出訂單<i className="bi bi-caret-right-fill ms-1"></i></Button></Link>}
                {isPending && <Button disabled type="submit">正在送出資料...</Button>}
            </div>
        </Container>
    </div>
  )
}


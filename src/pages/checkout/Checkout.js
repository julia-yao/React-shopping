import { Table, Container, Row, Col, Image } from 'react-bootstrap';
import { Link,useLoaderData } from "react-router-dom";
import { useEffect} from 'react';
import Checkinfo from './Checkinfo';


export default function Checkout() {
    let carts = [];
    useEffect(() => {
        fetch('http://localhost:8000/carts')
        .then(res => {
          if(!res.ok)
            throw Error('頁面無法獲取資料');
          return res.json()
        })
        .then((x)=>{
           carts.push(x);
        })
    },[]);
      console.log(carts[0])
    
    const meals = useLoaderData();

    let data =[]
    if(carts!==''){
        for(let i=0;i<carts.length;i++){
            for(let j=0;j<meals.length;j++){
                if(carts[i].id === meals[j].id){
                    meals[j].quantity = carts[i].quantity
                    data.push(meals[j])
                }
            }
        }
    }

    let subTotal = 0
    for(let i=0;i<data.length;i++){
        subTotal = subTotal+data[i].quantity*data[i].price;
    }
    let discount= subTotal*(0.1);
    const total = subTotal-discount; 

  return (
    <div className="checkout">
        <>
        <Container>
            <h2>
                <i className="bi bi-bag-check-fill mx-2"></i>
                確認訂單
            </h2>
            <hr className=''/>
            <Row className='justify-content-around m-3'>
                <Col className='col-5 border p-3'>
                    <h5>訂單清單</h5>
                    <Table className='table-shadow'>
                        <thead>
                            <tr className="text-center">
                                <th className="d-none d-md-block">商品</th>
                                <th>商品名稱</th>
                                <th>數量</th>
                                <th>金額</th>
                                <th>總額</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(meal=>(
                                <tr className="align-middle text-center" to={meal.id.toString()} key={meal.id}>
                                    <td className="d-none d-md-block">
                                        <Image variant="top" src={meal.url} style={{ width:'8rem',objectFit:"cover" }}/>
                                    </td>
                                    <td>{meal.name}</td>
                                    <td>{meal.quantity}</td>
                                    <td>{meal.price} 元</td>
                                    <td>{meal.quantity*meal.price} 元</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="text-primary">
                        <ul>
                            <li className="m-1 d-flex justify-content-end align-items-center" >訂單金額<span className="ms-2">{subTotal}</span></li>
                            <li className="m-1 d-flex justify-content-end align-items-center">折扣<span className="ms-2"> －{discount}</span></li> 
                            <li className="m-1 d-flex justify-content-end align-items-center">訂單總額<strong className="fs-5 ms-2">{total}</strong></li>
                        </ul>
                    </div>
                </Col>
                
                <Col className='col-5 border p-3'>
                    <Checkinfo />
                </Col>
                <hr className='m-3'/>
                <div className="text-end d-flex justify-content-center">
                    <Link to="/" className="btn btn-outline-success mx-2">修改購物車</Link>
                    <Link to="/" className="btn btn-warning">送出訂單</Link>
                </div>
            </Row>    
        </Container>
        </>
    </div>
  )
}


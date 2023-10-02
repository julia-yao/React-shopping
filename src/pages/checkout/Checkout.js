import { Table, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function Checkout() {

    const Filterfun = (array,blan)=>{
        let result =[]
        for(let i=0;i<array.length;i++)
          if(blan(array[i])){
            result.push(array[i])
            result.concat(carts)
          }
        return result
      }
     
    let carts = 
      {
        "id": 1,
        "quantity": 7
      }
    
    let meals = [
        {
            "id": 1,
            "category": "breakfasts",
            "name": "德國培根早午餐",
            "price": 500,
            "url": "https://sarabethsrestaurants.jp/_img/page/menu/07.jpg",
            "info": "使用農場飼養雞蛋和煙燻培根，配上當日現作鬆餅和新鮮沙拉。",
            "danger": "雞蛋/培根/小麥麵粉"
          },
          {
            "id": 2,
            "category": "breakfasts",
            "name": "煙燻鮭魚早午餐",
            "price": 500,
            "url": "https://sarabethsrestaurants.jp/_img/page/menu/09.jpg",
            "info": "使用農場飼養雞蛋做成歐姆蛋和煙燻培根，配上當日現作鬆餅和新鮮沙拉。",
            "danger": "雞蛋/魚"
          },
          {
            "id": 3,
            "category": "breakfasts",
            "name": "香烤雞腿早午餐",
            "price": 500,
            "url": "https://sarabethsrestaurants.jp/_img/page/menu/10.jpg",
            "info": "使用農場飼養雞蛋和煙燻培根，配上當日現作鬆餅。",
            "danger": "雞蛋/小麥麵粉"
          }
    ]
    

    
    let data =[]
    if(carts!==""){
    data = Filterfun(meals,(x)=> x.id ===carts.id)
    console.log(data)
    }

        let quantity = data.quantity
        let subTotal = quantity*data.price;
        let discount= subTotal*(0.1);
        const total = subTotal-discount; 

  return (
    <div className="checkout">
        <>
        <Container>
            <h2>確認訂單</h2>
            <Row>
                <Col>
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
                                    <td>{quantity}</td>
                                    <td>{meal.price} 元</td>
                                    <td>{quantity*meal.price} 元</td>
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
                
                <Col>
                    
                    <div className="text-end d-flex justify-content-end my-2">
                        <Link to="/" className="btn btn-outline-success mx-2">修改購物車</Link>
                        <Link to="/" className="btn btn-warning">送出訂單</Link>
                    </div>
                </Col>
            </Row>    
        </Container>
        </>
    </div>
  )
}

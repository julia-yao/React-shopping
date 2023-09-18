import { useLoaderData, useParams } from "react-router-dom"
import { Row, Col, Image, Button } from 'react-bootstrap'
import swal from 'sweetalert';


export default function MealDetails() {
  const {id} = useParams()
  const meal = useLoaderData()
  
  const handleAddCart = async (e)=>{
    let res=null;
    let metd = 'POST';
    let url = 'http://localhost:8000/carts/';
    let pUrl = url+meal.id;
    let json = {id:meal.id, quantity:1}
    //check if the meal is in cart
    await fetch(pUrl)
          .then(x=>{
            if(!x.ok)return;
            return x.json();
          })
          .then(x=>res=x) 
          
    if(res!=null){
      console.log("already in cart");
      json.quantity = res.quantity +1;
      metd = 'PATCH';
      url = pUrl;
    }


    fetch(url, {
      method:metd,
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(json)
    }).then(() =>{
      console.log("carts added")
      swal("成功!", "商品已加入購物車", "success");
    });
  }

    return (
    <div className="MealDetails">
      <Row className="flex-md-row flex-column justify-content-center" onClick={handleAddCart}>
        <Col xs md={5} className="m-3 m-md-0 d-flex justify-content-center">
          <div className="" style={{ hidth:'270px'}}>
            <Image src={meal.url} className='img-fluid rounded shadow-sm mealDetailImg'/>
          </div>
        </Col>
        <Col xs md={6} className="px-2">
          <h2>{meal.name}</h2>
          <p>售價為 NT. {meal.price} 元</p>
          <div className="">
            <Button variant="warning me-2">
              加入購物車
            </Button>
            <Button variant="danger">
              <i className="bi bi-suit-heart fs-6 fw-bolder"/>
            </Button>
          </div>  
          <div className="details mt-3 border-top py-2">
            <p>餐點介紹：{meal.info}</p>
            <p>本餐點內含：{meal.danger}，有過敏體質者請注意。</p>
          </div>
        </Col>
      </Row>
    </div>
    )
}

export const mealDetailsLoader = async ({ params }) => {
    const { id } = params
  
    const res = await fetch('http://localhost:8000/meals/' + id)

    if(!res.ok){
      throw Error ("無法找到您輸入的餐點。")
    }
    return res.json()
  }
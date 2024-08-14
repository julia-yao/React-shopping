import { Row, Col, Image, Button } from 'react-bootstrap'
import swal from 'sweetalert';
import { useLoaderData } from 'react-router-dom';
import { API_CARTS_GET_DATA, API_MEAL_GET_DATA } from "../../constants";
import { useState } from "react";


export default function MealDetails() {
  
  const meal = useLoaderData();
  const [liked, setLiked] = useState(false);
  

  const handleAddCart = async (e)=>{
    let res=null;
    let metd = 'POST';
    let url = API_CARTS_GET_DATA;
    let pUrl = url+meal.id;
    let json = {id:meal.id, 
                quantity:1, 
                name:meal.name,
                price:meal.price,
                url:meal.url
              }
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
      
    })
  }

    const handleLike = () => {
      setLiked(!liked); // Toggle liked state
      swal("成功!", "已加入心願清單", "success");
  }
  

    return (
    <div className="MealDetails">
        <Row className="flex-mds-row flex-column justify-content-center align-content-center m-3">
          <Col xs md={5} className="m-3 m-md-0 d-flex justify-content-center">
            <div className="" style={{ hidth:'270px'}}>
              <Image src={meal.url} className='img-fluid rounded shadow-sm mealDetailImg'/>
            </div>
          </Col>
          <Col xs md={6} className="p-2 m-3 m-md-0 text-light">
            <h2>{meal.name}</h2>
            <p>售價為 NT. {meal.price} 元</p>
            <div className="">
              <Button variant="warning me-2" onClick={handleAddCart}>
                加入購物車
              </Button>
              <Button variant="danger" onClick={handleLike}>
                <i className={`bi ${liked ? 'bi-suit-heart-fill' : 'bi-suit-heart'} fs-6 fw-bolder`}></i>
              </Button>
            </div>  
            <div className="details mt-3 border-top py-2">
              <p>餐點介紹：{meal.info}</p>
              <p style={{ visibility: meal.danger ? 'visible' : 'hidden' }}>
                本餐點內含：{meal.danger}，有過敏體質者請注意。
              </p>
            </div>
          </Col>
        </Row>
    </div>
    )
}
export const mealDetailsLoader = async ({ params }) => {
  const { id } = params
    
  const res = await fetch( API_MEAL_GET_DATA + id)

  if(!res.ok){
        throw Error ("無法找到您輸入的餐點。")
  }
  return res.json()
}
import { Image, Button } from 'react-bootstrap';
import {API_MEAL_GET_DATA} from '../../constants';
import {API_CARTS_GET_DATA} from '../../constants';
import { useEffect, useState } from "react";


const CartItem = ({ data, handleDelete,setSub}) => {
    const [ meal, setMeal ] = useState(null)
    const [ quantity, setQuantity ] = useState(data.quantity)
    
    useEffect(() => {
        fetch( API_MEAL_GET_DATA + data.id)
        .then(x => x.json())
        .then(x => {setMeal(x); setSub(data.id,x.price*quantity);})
    },[]);

    const UpdateQuantity = (num) => {
        if(num<1)//escape when num == 0
            return;
        let option={
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({quantity:num})
        };
        
        fetch( API_CARTS_GET_DATA + data.id, option)
        .then(()=>{
            fetch( API_CARTS_GET_DATA + data.id)
            .then(x => x.json())
            .then(x => {setQuantity(x.quantity);setSub(data.id,meal.price*x.quantity);})
        });
    }
    
    if( meal == null || Object.keys(meal).length === 0)
      return (<tr><td>ERROR</td></tr>);
    return ( 
        <tr className="align-middle text-center" to={meal.id.toString()} key={meal.id}>
            <td className="d-none d-md-block">
                <Image variant="top" src={meal.url} style={{ width:'10rem',height:'10rem', objectFit:"cover" }}/>
            </td>
            <td>{meal.name}</td>
            <td>
                <div className='d-flex justify-content-center flex-column flex-md-row align-items-center'>
                    <Button className='mx-2 btn-sm' onClick={()=>UpdateQuantity(quantity-1)}>-</Button>
                        {quantity} {/*1*/}
                    <Button className='mx-2 btn-sm' onClick={()=>UpdateQuantity(quantity+1)}>+</Button>
                </div>
                
            </td>
            <td>{meal.price} 元</td>
            <td>{meal.price*quantity} 元</td>
            <td>
                <button onClick={()=>handleDelete(meal.id)} className="btn mx-auto">
                <i className="bi bi-trash3-fill fs-4"></i> 
                </button>
            </td>
        </tr>
    );
}
 
export default CartItem;
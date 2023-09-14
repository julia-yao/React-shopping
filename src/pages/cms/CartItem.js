import { Image } from 'react-bootstrap';
import {API_MEAL_GET_DATA,API_CARTS_GET_DATA} from '../../constants';
import { useEffect, useState } from "react";

<<<<<<< Updated upstream
const CartItem = ({ data, handleDelete}) => {
=======

const CartItem = ({ data, handleDelete,setSub}) => {
>>>>>>> Stashed changes
    const [ meal, setMeal ] = useState(null)
    const [ quantity, setQuantity] = useState(data.quantity)
    
    useEffect(() => {
        fetch(API_MEAL_GET_DATA + data.id)
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
<<<<<<< Updated upstream
        console.log(num);
        fetch(API_CARTS_GET_DATA + data.id, option)
=======
        
        fetch( API_CARTS_GET_DATA + data.id, option)
>>>>>>> Stashed changes
        .then(()=>{
            fetch(API_CARTS_GET_DATA + data.id)
            .then(x => x.json())
            .then(x => {setQuantity(x.quantity); setSub(data.id,meal.price*x.quantity);})
        });
    }
    
<<<<<<< Updated upstream
    if(meal==null)
        return (<tr></tr>);
=======
    if( meal == null || Object.keys(meal).length === 0)
      return (<tr><td>ERROR</td></tr>);
>>>>>>> Stashed changes
    return ( 
        <tr className="align-middle text-center" to={meal.id.toString()} key={meal.id}>
            <td><Image variant="top" src={meal.url} style={{ width:'12rem',objectFit:"cover" }}/></td>
            <td>{meal.name}</td>
            <td>
                <button onClick={()=>UpdateQuantity(quantity-1)}>-</button>
                    {quantity} {/*1*/}
                <button onClick={()=>UpdateQuantity(quantity+1)}>+</button>
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
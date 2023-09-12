import { Image, Button } from 'react-bootstrap';
import {API_MEAL_GET_DATA} from '../../constants';
import { useEffect, useState } from "react";

const CartItem = ({ data, handleDelete}) => {
    const [ meal, setMeal ] = useState(null)
    const [ quantity, setQuantity] = useState(data.quantity)
    
    useEffect(() => {
        fetch('http://localhost:8000/meals/' + data.id)
        .then(x => x.json())
        .then(x => setMeal(x))
    },[]);

    const UpdateQuantity = (num) => {
        if(num<1)//escape when num == 0
            return;
        let option={
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({quantity:num})
        };
        console.log(num);
        fetch('http://localhost:8000/carts/' + data.id, option)
        .then(()=>{
            fetch('http://localhost:8000/carts/' + data.id)
            .then(x => x.json())
            .then(x => setQuantity(x.quantity))
        });
    }
    
    if(meal==null)
        return (<tr></tr>);
    return ( 
        <tr className="align-middle text-center" to={meal.id.toString()} key={meal.id}>
            <td><Image variant="top" src={meal.url} style={{ width:'12rem' }}/></td>
            <td>{meal.name}</td>
            <td>
                <Button onClick={()=>UpdateQuantity(quantity-1)}>-</Button>
                    {quantity} {/*1*/}
                <Button onClick={()=>UpdateQuantity(quantity+1)}>+</Button>
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
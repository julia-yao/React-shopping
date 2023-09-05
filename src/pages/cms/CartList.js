import { useEffect, useState } from "react";
import Cart from "./Cart";

const CartList = () => { 
  const [ data, setData ] = useState(null)
  const [ isPending, setIsPending ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ quantity, setQuantity] = useState(0); 
  console.log("cartlist")
  useEffect(() => {
    fetch('http://localhost:8000/carts')
    .then(res => {
      if(!res.ok)
        throw Error('頁面無法獲取資料');
      return res.json()
    })
    .then(data => {
      setData(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err =>{
      setIsPending(false);
      setError(err.message);
    })
  },[]);
  
  const handleDelete = (id) => {
    fetch('http://localhost:8000/carts/'+id, {
      method:'DELETE'
    })
    .then(() =>{
      fetch('http://localhost:8000/carts/')
      .then(x=>x.json())
      .then(x=>setData(x))
    });
    //const newCart = data.filter(cart => cart.id !== id);
  }

  const increment = () => {
    setQuantity(quantity + 1);
  }

  const decrement = () => {
    if ( quantity > 0 )
      setQuantity(quantity - 1);
  }

  return (
    <div className="CartList">
      { error && <div> {error} </div>}
      { isPending && <div> Loading...</div>}
      { data && <Cart data={data} handleDelete={handleDelete} increment={increment} decrement={decrement} />}
    </div>
  );
}
 
export default CartList;


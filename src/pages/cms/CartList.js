import { useEffect, useState } from "react";
import Cart from "./Cart";

const CartList = () => { 
  const [ data, setData ] = useState(null)
  const [ isPending, setIsPending ] = useState(false)
  const [ error, setError ] = useState(null)
  
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
    fetch('http://localhost:8000/carts/' + id, {
      method:'DELETE'
    })
    .then(() =>{
      fetch('http://localhost:8000/carts/')
      .then(x=>x.json())
      .then(x=>setData(x))
    });
    //const newCart = data.filter(cart => cart.id !== id);
  }

  return (
    <div className="CartList">
      { error && <div> {error} </div>}
      { isPending && <div> Loading...</div>}
      { data && <Cart data={data} handleDelete={handleDelete} />}
    </div>
  );
}
 
export default CartList;

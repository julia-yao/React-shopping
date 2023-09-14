import { useEffect, useState } from "react";
import Cart from "./Cart";
<<<<<<< Updated upstream
=======
import CartTotal from "./CartTotal";
import swal from 'sweetalert';

let internalSubs = [];
>>>>>>> Stashed changes

const CartList = () => { 
  const [ data, setData ] = useState(null)
  const [ isPending, setIsPending ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ subTotals, setSubTotals ] = useState(internalSubs)
    
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

  const UpdateSubTotals = (id,st)=>{
    for(let i=0;i<internalSubs.length;i++)
      if(internalSubs[i].id===id){
        internalSubs[i].st=st;
        setSubTotals([...internalSubs]);
        return;
      }
    internalSubs.push({id:id,st:st});
    setSubTotals([...internalSubs]);
  };
  
  return (
    <div className="CartList">
      { error && <div> {error} </div>}
      { isPending && <div> Loading...</div>}
<<<<<<< Updated upstream
      { data && <Cart data={data} handleDelete={handleDelete} />}
=======
      { data && <Cart data={data} handleDelete={handleDelete} setSub={UpdateSubTotals} />}
      { subTotals && <CartTotal data={subTotals}/>}
>>>>>>> Stashed changes
    </div>
  );
}
 
export default CartList;
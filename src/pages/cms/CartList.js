import { useEffect, useState } from "react";
import Cart from "./Cart";
import swal from 'sweetalert';

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
    swal({
      title: "確定刪除嗎？",
      text: "此商品將從購物車消失",
      icon: "warning",
      buttons:  ["取消", "確定"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:8000/carts/' + id, {
          method:'DELETE'
        })
        .then(() =>{
          fetch('http://localhost:8000/carts/')
          .then(x=>x.json())
          .then(x=>setData(x))
        }).then(() =>{
          swal("成功!", "購物車商品已移除", "success");
        });
            
      } else {
        swal("保留喜愛商品！");
      }
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

import { useEffect, useState } from "react";
import Cart from "./Cart";
import CartTotal from "./CartTotal";
import swal from 'sweetalert';

const CartList = () => { 
  const [ data, setData ] = useState(null)
  const [ isPending, setIsPending ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ subTotals, setSubTotals ] = useState([])
    
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
      console.log("fetch")
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
          .then(x => x.json())
          .then(x => {
            setData(x);
            RemoveSubTotalItem(id);
          })
        }).then(() =>{
          swal("成功!", "購物車商品已移除", "success");
          console.log("handleDelete")
        });
            
      } else {
        swal("保留喜愛商品！");
      }
    });
  }
  {/* data.id  price*quantity */}
  const UpdateSubTotals = (id,st)=>{
    for(let i=0;i<subTotals.length;i++)
      if(subTotals[i].id===id){
        subTotals[i].st=st;
        setSubTotals([...subTotals]);
        return;
      }
      subTotals.push({id:id,st:st});
    setSubTotals([...subTotals]);
    console.log(UpdateSubTotals);
  };

  const RemoveSubTotalItem=(id)=>setSubTotals(subTotals.filter(x=>x.id!==id));
  
  if( data == null || Object.keys(data).length === 0)
      return (<div className="col">購物車內空空喔</div>);
  
  return (
    <div className="CartList">
      { error && <div> {error} </div>}
      { isPending && <div> Loading...</div>}
      { data && <Cart data={data} handleDelete={handleDelete} setSub={UpdateSubTotals} />}
      { subTotals && <CartTotal data={subTotals}/>}
    </div>
  );
}
 
export default CartList;
import { useEffect, useState } from "react";
import Cart from "./Cart";

const CartList = () => { 
    
  const [cart,setCart] = useState( [
    {
      "id": 1,
      "name": "德國培根早午餐",
      "price": 500,
      "url": "https://sarabethsrestaurants.jp/_img/page/menu/07.jpg",
      "info": "使用農場飼養雞蛋和煙燻培根，配上當日現作鬆餅和新鮮沙拉。",
      "danger": "雞蛋/培根/小麥麵粉"
    },
    {
      "id": 2,
      "name": "鮭魚培根早午餐",
      "price": 400,
      "url": "https://sarabethsrestaurants.jp/_img/page/menu/09.jpg",
      "info": "使用農場飼養雞蛋和煙燻培根，配上當日現作鬆餅和新鮮沙拉。",
      "danger": "雞蛋/培根/小麥麵粉"
    }
  ])

  const handleDelete = (id) => {
    const newCart = cart.filter(cart => cart.id !== id);
    setCart(newCart)
  }

  useEffect(() => {
    console.log('商品刪除成功')
  },[setCart]);
    
  return (
    <div className="CartList">
      <Cart cart={cart} handleDelete={handleDelete}/>
    </div>
  );
}
 
export default CartList;
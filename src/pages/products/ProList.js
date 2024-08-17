import { useNavigate } from 'react-router-dom';

function OnCategoryClick(s,data,_nav){
    _nav('/products');
    data(s);
}

export default function ProList({data}) {
    const nav = useNavigate();

  return (
    <div className="pro-list row">
        <div>
            <div className="pro-list-class col" onClick={OnCategoryClick("",data,nav)}>
                ALL FOODS<br/>所有商品
            </div>
            <div className="pro-list-class col" onClick={()=> OnCategoryClick("breakfasts",data,nav)}>
                BREAKFAST＆SALAD<br/>早午餐沙拉
            </div>
            <div className="pro-list-class col" onClick={() => OnCategoryClick("frenchtoast&cake",data,nav)}>
                FRENCH TOAST＆CAKE<br/>法式吐司蛋糕
            </div>
            <div className="pro-list-class col" onClick={() => OnCategoryClick("coffee&tea",data,nav)}>
                COFFEE＆TEA<br/>咖啡茶飲
            </div>
            <div className="pro-list-class col" onClick={() => OnCategoryClick("juice",data,nav)}>
                JUICE＆SODA<br/>果汁氣泡 
            </div>
        </div>
    </div>
  )
}

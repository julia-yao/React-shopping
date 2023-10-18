import { ListGroup } from "react-bootstrap"

export default function ProList({data}) {
    
  return (
    <div className="ProList">
        <div>
            <div className="list-group-hover" onClick={() => data("")}>
                ALL FOODS<br/>所有商品
            </div>
            <div className="list-group-hover" onClick={() => data("breakfasts")}>
                BREAKFAST＆SALAD<br/>早午餐沙拉
            </div>
            <div className="list-group-hover" onClick={() => data("frenchtoast&cake")}>
                FRENCH TOAST＆CAKE<br/>法式吐司蛋糕
            </div>
            <div className="list-group-hover" onClick={() => data("coffee&tea")}>
                COFFEE＆TEA<br/>咖啡茶飲
            </div>
            <div className="list-group-hover" onClick={() => data("juice")}>
                JUICE＆SODA<br/>果汁氣泡 
            </div>
        </div>
    </div>
  )
}

export default function ProList({data}) {
    
  return (
    <div className="pro-list">
        <div>
            <div className="pro-list-class" onClick={() => data("")}>
                ALL FOODS<br/>所有商品
            </div>
            <div className="pro-list-class" onClick={() => data("breakfasts")}>
                BREAKFAST＆SALAD<br/>早午餐沙拉
            </div>
            <div className="pro-list-class changecolor-1" onClick={() => data("frenchtoast&cake")}>
                FRENCH TOAST＆CAKE<br/>法式吐司蛋糕
            </div>
            <div className="pro-list-class changecolor-2" onClick={() => data("coffee&tea")}>
                COFFEE＆TEA<br/>咖啡茶飲
            </div>
            <div className="pro-list-class" onClick={() => data("juice")}>
                JUICE＆SODA<br/>果汁氣泡 
            </div>
        </div>
    </div>
  )
}

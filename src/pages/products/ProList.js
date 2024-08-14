export default function ProList({data}) {
    
  return (
    <div className="pro-list row">
        <div>
            <div className="pro-list-class col" onClick={() => data("")}>
                ALL FOODS<br/>所有商品
            </div>
            <div className="pro-list-class col" onClick={() => data("breakfasts")}>
                BREAKFAST＆SALAD<br/>早午餐沙拉
            </div>
            <div className="pro-list-class col" onClick={() => data("frenchtoast&cake")}>
                FRENCH TOAST＆CAKE<br/>法式吐司蛋糕
            </div>
            <div className="pro-list-class col" onClick={() => data("coffee&tea")}>
                COFFEE＆TEA<br/>咖啡茶飲
            </div>
            <div className="pro-list-class col" onClick={() => data("juice")}>
                JUICE＆SODA<br/>果汁氣泡 
            </div>
        </div>
    </div>
  )
}

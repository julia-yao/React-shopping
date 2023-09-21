import { ListGroup } from "react-bootstrap"

export default function ProList({data}) {
    
  return (
    <div className="ProList">
        <ListGroup>
            <ListGroup.Item variant="primary" onClick={() => data("breakfasts")}>
                BREAKFAST＆SALAD<br/>早午餐沙拉
            </ListGroup.Item>
            <ListGroup.Item onClick={() => data("frenchtoast&cake")}>
                FRENCH TOAST＆CAKE<br/>法式吐司蛋糕
            </ListGroup.Item>
            <ListGroup.Item onClick={() => data("coffee&tea")}>
                COFFEE＆TEA<br/>咖啡茶飲
            </ListGroup.Item>
            <ListGroup.Item onClick={() => data("juice")}>
                JUICE＆SODA<br/>果汁氣泡 
            </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

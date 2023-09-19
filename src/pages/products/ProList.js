import { ListGroup } from "react-bootstrap"

export default function ProList() {

  return (
    <div className="ProList">
        <ListGroup>
            <ListGroup.Item variant="primary" onClick={clickCate}>
                BREAKFAST＆SALAD<br/>早午餐沙拉
            </ListGroup.Item>
            <ListGroup.Item>
                FRENCH TOAST＆CAKE<br/>法式吐司蛋糕
            </ListGroup.Item>
            <ListGroup.Item>
                COFFEE＆TEA<br/>咖啡茶飲
            </ListGroup.Item>
            <ListGroup.Item>
                JUICE＆SODA<br/>果汁氣泡 
            </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

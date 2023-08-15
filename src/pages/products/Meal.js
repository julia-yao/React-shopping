import { Button, Card } from "react-bootstrap";

export default function Meal() {
  return (
    <div className='Meal'>
        <Card style={{ width:'18rem' }}>
            <Card.Img variant="top" src="https://sarabethsrestaurants.jp/_img/page/menu/07.jpg" />
            <Card.Body>
                <Card.Title>德國培根早午餐</Card.Title>
                <Button variant="primary">點我看更多</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

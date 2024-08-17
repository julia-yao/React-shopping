import { Row,Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

const MealList = ({data}) => {
    const meals = data;
   
  return (
    <div className="mealList">
        <Row className="">
            {meals.map(meal => (
                <Col xs={6} lg={4} className='g-0'>
                    <Link key={meal.id} to={meal.id.toString()}>
                    <Card className="m-2">
                        <div className="mealCard">
                            <Card.Img variant="top" src={meal.url} className="mealImg"/>
                        </div>
                        <Card.Body>
                        <Card.Title>{meal.name}</Card.Title>
                        <Card.Text>
                            售價為 NT. {meal.price} 元
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default MealList;
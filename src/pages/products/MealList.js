import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

const MealList = ({data}) => {
    const meals = data.name
  return (
    <div className="mealList">
        <div className=" d-flex flex-wrap me-2">
            {meals.map(meal => (
                <Link key={meal.id} to={meal.id.toString()}>
                <Card style={{ width: '16rem' }} className="mealCard m-2">
                    <Card.Img variant="top" src={meal.url} className="mealImg"/>
                    <Card.Body>
                    <Card.Title>{meal.name}</Card.Title>
                    <Card.Text>
                        售價為 NT. {meal.price} 元
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default MealList;
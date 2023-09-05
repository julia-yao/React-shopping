import { Link, useLoaderData } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import {API_MEAL_GET_DATA} from '../../constants'

export default function Meal() {
  const meals = useLoaderData()
  return (
    <div className="Meal d-flex flex-wrap me-2">
      {meals.map(meal => (
        <Link key={meal.id} to={meal.id.toString()}>
          <Card style={{ width: '16rem' }} className="m-2">
            <Card.Img variant="top" src={meal.url} />
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
  )
}

// data loader
export const mealLoader = async () => {
  const res = await fetch(API_MEAL_GET_DATA)

  if(!res.ok)
    throw Error ("無法取得整份菜單。")

  return res.json()
}
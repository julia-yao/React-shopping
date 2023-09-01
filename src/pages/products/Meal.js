import { Link, useLoaderData } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export default function Meal() {
  const meals = useLoaderData()

  return (
    <div className="Meal d-flex flex-wrap me-2">
      {meals.map(meals => (
        <Link to={meals.id.toString()} key={meals.idx}>
          <Card style={{ width: '16rem' }} className="m-2">
            <Card.Img variant="top" src={meals.url} />
            <Card.Body>
              <Card.Title>{meals.name}</Card.Title>
              <Card.Text>
                售價為 NT. {meals.price} 元
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
  const res = await fetch('http://localhost:8000/meals')

  if(!res.ok){
    throw Error ("無法取得整份菜單。")
  }

  return res.json()
  
}
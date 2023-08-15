import { Link, useLoaderData } from "react-router-dom"

export default function Meal() {
  const meals = useLoaderData()

  return (
    <div className="careers">
      {meals && meals.map(meals => (
        <Link to='/' key={meals.id}>
          <p>{meals.name}</p>
          <p>Based in {meals.price}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const mealLoader = async () => {
  const res = await fetch('http://localhost:8000/meals')

  return res.json()
  
}
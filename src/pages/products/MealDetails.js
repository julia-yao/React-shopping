import { useParams } from "react-router-dom"


export default function MealDetails() {
    const {id} = useParams
    const meal = useLoaderData()
    return (
    <div>
        <h2>Career Details for {meals.name}</h2>
      <p>Starting salary: {meal.price}</p>
      <p>Location: {meal.price}</p>
    </div>
  )
}

export const mealDetailsLoader = async ({ params }) => {
    const { id } = params
  
    const res = await fetch('http://localhost:8000/meals/' + id)
  
    return res.json()
  }

import { useLoaderData } from "react-router-dom"
import { API_MEAL_GET_DATA } from '../../constants'
import MealList from "./MealList";

export default function Meal() {
  const meals = useLoaderData()
  console.log(meals)
  
  return (

    <div className="meal">
        { meals && <MealList data={meals} title="all meals!"/>}
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
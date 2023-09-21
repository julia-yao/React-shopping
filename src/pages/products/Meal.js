import { useLoaderData, useOutletContext } from "react-router-dom"
import { API_MEAL_GET_DATA } from '../../constants'
import MealList from "./MealList";

export default function Meal() {
  
  const meals = useLoaderData();
  
  const cate = useOutletContext()[0];
  
  let filterData =[]

  if (cate!==""){
    filterData = meals.filter((x)=> x.category === cate)
  }
  else{
     filterData = meals
  }
  
  
  
  return (

    <div className="meal">
        { filterData && <MealList data={filterData}/>}

        {/*<MealList data={meals.filter((meals)=> meals.category === "breakfasts")}/>
        <MealList data={meals.filter((meals)=> meals.category === "frenchtoast&cake")}/>
        <MealList data={meals.filter((meals)=> meals.category === "coffee&tea")}/>
        <MealList data={meals.filter((meals)=> meals.category === "juice")}/> */}
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
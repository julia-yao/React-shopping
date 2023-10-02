import { useLoaderData, useOutletContext } from "react-router-dom"
import { API_MEAL_GET_DATA } from '../../constants'
import MealList from "./MealList";
import Filterfun from "../../components/Filterfun";


export default function Meal() {

  const meals = useLoaderData();
  
  const cate = useOutletContext()[0];
  
  let filterData =[]

  if (cate!==""){
    filterData = Filterfun(meals,(x)=> x.category === cate)
    
  }
  else{
     filterData = meals
  }
  
  
  
  return (

    <div className="meal">
        { filterData && <MealList data={filterData}/>}
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
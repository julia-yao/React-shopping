import { useOutletContext } from "react-router-dom"
import { API_MEAL_GET_DATA } from '../../constants'
import MealList from "./MealList";
import useFetch from "../../components/useFetch";
import Filterfun from "../../components/Filterfun";

export default function Meal() {

  const { data:meals } = useFetch( API_MEAL_GET_DATA );
  
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

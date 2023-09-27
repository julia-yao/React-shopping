import { useState } from "react";
import { useLoaderData,useOutletContext } from "react-router-dom"
import { API_MEAL_GET_DATA } from '../../constants'
import MealList from "./MealList";

export default function Meal() {
  const meals = useLoaderData()
  const [cat] = useOutletContext();

  let filteredList = meals;
  if(cat!=="")
    filteredList = meals.filter((x)=>x.category===cat);

  return (
    <div className="meal">
        { filteredList && <MealList data={filteredList}/>}
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
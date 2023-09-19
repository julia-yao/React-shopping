import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import { API_MEAL_GET_DATA } from '../../constants'
import MealList from "./MealList";

export default function Meal() {
  
  const meals = useLoaderData()

 
  
  return (

    <div className="meal">
        { meals && <MealList data={meals}/>}

        <MealList data={meals.filter((meals)=> meals.category === "breakfasts")}/>
        <MealList data={meals.filter((meals)=> meals.category === "frenchtoast&cake")}/>
        <MealList data={meals.filter((meals)=> meals.category === "coffee&tea")}/>
        <MealList data={meals.filter((meals)=> meals.category === "juice")}/>
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
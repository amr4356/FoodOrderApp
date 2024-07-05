import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "./MenuItem";

export default function Meals(){
    const [availableMeals,setAvailableMeals]=useState([]);
    useEffect(()=>{
        async function fetchMeals(){
            const response=await fetch('http://localhost:3000/meals');
            if(!response.ok){
                //
            }
            const resData=await response.json();
            setAvailableMeals(resData);
        }

        fetchMeals();

    },[]);


    return (
        <ul id='meals'>
            {availableMeals.map((meal)=>
                <MenuItem key={meal.id} meal={meal} />
            )}
        </ul>
    );
}

import useHttp from "../hooks/useHttp";
import MenuItem from "./MenuItem";

const requestConfig={};

export default function Meals(){
    const {data: loadedMeals,isLoading,error,}=useHttp('http://localhost:3000/meals',requestConfig,[]);

    if(isLoading){
        return <p>Fetching meals...</p>;
    }



    return (
        <ul id='meals'>
            {loadedMeals.map((meal)=>
                <MenuItem key={meal.id} meal={meal} />
            )}
        </ul>
    );
}
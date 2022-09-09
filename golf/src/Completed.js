import { set } from "date-fns";
import React,{useState,useEffect} from "react";
import Book from "./Book";
export default function Completed(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Courses")
          .then((r) => r.json())
          .then((data) => {
            setCars(data)
          });
      }, []);
      const displayed =cars.map((car)=>{
        return(
            <div className="fetched">
                 
                  <p> <strong>Car</strong>-{car.Car} ,<strong>Year</strong>:{car.Year}</p>
                 
                  <img  src={car.Image}  width='100px'/>

            </div>
          
            
        )
        })
     
 return(
<div id="completed">
   
    <h5>Golf courses in kenya</h5>

<div className="display">{displayed}</div>
{/* <div>{newCar}</div> */}
</div>
    )
}
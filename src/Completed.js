import React,{useState,useEffect} from "react";
import NewCourses from "./CreateCourse";
import {Form} from 'reactstrap';
export default function Completed(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("https://golfbakend.herokuapp.com/courses")
        
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
            setCars(data)


          });
      }, []);
      const displayed =cars.map((car)=>{
        return(
            <div className="fetched">
                  <p> <strong>Golf course ID</strong>-{car.id} ,<strong>location</strong>:{car.location},<strong>name</strong>:{car.name}</p>
                
            </div>
        )
        })
     
 return(
<div id="completed">
   
    <h5>below are  Golf courses in Kenya</h5>
    {displayed}

    <div>
    
      
        
    </div>
{/* <div className="display">{displayed}</div> */}




</div>
    )
}
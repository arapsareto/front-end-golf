import { setYear } from "date-fns";
import React from "react";
import { useState,useEffect } from "react";
import { Form, FormGroup } from "reactstrap";

export default  function Review()
{
    const [Car, setCar] = useState("");
    const [Year, setYear] = useState("");

  function handlename(event) {
    setCar( event.target.value );
    console.log(event.target.value);
  }
  function handleYear(event) {
    setYear( event.target.value );
     console.log(event.target.value);
  }  
  function handleSubmit ( event )
  {
   
    event.preventDefault();
    const formData = { "Car": Car, "Year": Year};
    console.log( formData );
    fetch("http://localhost:3000/Stuttgart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCar("");
        setYear("");
       
      });
  }
    return(
        <div>
            <h5>Give a review of a repaired sample</h5>
  <form action="#" onSubmit={handleSubmit }>
    <fieldset>
      <label for="car">Car:
        <input type="text" name="car name" required  onChange={Car}/>
      </label>
      <label for="car">Year:
        <input type="text" name="car name" required onChange={Year} />
      </label>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
   </fieldset>
    
  </form>
        </div>
    )
    

    }

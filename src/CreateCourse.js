import React from "react";
import { Form,FormGroup } from "reactstrap";
import { useState } from "react";

export default function NewCourses ({onAddCourse})
{ 
  const[formData,setFormData]=useState({location:"",name:""});
    function handleChange(event){
      setFormData({...formData,[event.target.name]: event.target.value})
    }
    
    function handleSubmit(event) {
        console.log(event)
      event.preventDefault();
      const courseFormData = { location: formData.location, name: formData.name };

      console.log( 'my',formData);

      

      fetch("https://golfbakend.herokuapp.com/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseFormData ),
      })
        .then((response) => response.json())
        .then((data) => {

          onAddCourse(data);
          setFormData({...formData, location: "", name:""})
         
        });
    }
    return(
    <div className="contact">
      

     <h3 className="h3">Add a new golf course that you know</h3>
     <FormGroup>
     <form onSubmit={handleSubmit}>
  
      <label for="location">location: <input type="text" name="location" required onChange={handleChange} /></label>
      <label for="name">name <input type="text" name="name" required  onChange={handleChange}/></label>
    <input type="submit" value="Submit"  onChange={handleChange} />
  </form>
     </FormGroup>
  </div>
)
 
}
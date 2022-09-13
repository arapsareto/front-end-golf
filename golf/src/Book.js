import React from "react";
// import {image1} from'./images/interior.jpg';
import {Form,FormGroup,Label} from 'reactstrap';
export default function Book(){
    return(
<div id="book" >
 <div id="form">
 <Form >
  <form action="#">
    <fieldset>
      <label for="name">Enter Name:
        <input type="text" name="first-name" required />
      </label>
      <label for="last-name">golf course <input type="text" name="golf course" required /></label>
      <label for="email">Enter Your Email: <input type="email" name="email" required />
      </label>
      <label for="number">Phone number :
        <input type="number" name="phone"  required /></label>
    </fieldset>
    <input type="submit" value="Submit request" />
  </form>
 </Form>
 </div>
    
</div>
    )
}
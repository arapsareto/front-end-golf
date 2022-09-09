import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar(){
    const styles={
        color:'black'
    }
    return(
        <nav>
            <ul className="navs">
                <NavLink to='/about' style={styles}>About</NavLink>
                <NavLink to='/courses' style={styles}>Golf courses</NavLink>
                <NavLink to='/book' style={styles}>Reserve</NavLink>
              
            </ul>
        </nav>
    );
}
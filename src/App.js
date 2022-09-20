
import React from 'react';
import './App.css';
import About from './About';
import Courses from './Completed';
import Review from './Review';
import Book from './Book';
import { NavBar } from './Nav';
import NewCourses from './CreateCourse';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Route  path='/about' exact component={About}/>
      <Route  path='/courses' exact component={Courses}/>
      <Route  path='/book' exact component={Book}/>
      <Route  path='/review' exact component={Review}/>
      <Route  path='/new' exact component={NewCourses}/>

      </BrowserRouter>
    </div>
  );
}

export default App;

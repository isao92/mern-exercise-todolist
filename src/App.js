import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component.js.js.js"
import ExercisesList from "./components/exercises-list.component"
import EditExercise from "./components/edit-exercises.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUsers from "./components/create-users.component"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUsers} />
        </Router>
      </div>
    </div>
  );
}

export default App;

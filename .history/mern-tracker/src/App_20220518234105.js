import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from "./components/NavBar.component";
import ExercisesList from "./components/ExercisesList.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisesList/>} />
          <Route path="/edit/:id" element={<EditExercise/>} />
          <Route path="/create" element={<CreateExercise/>} />
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

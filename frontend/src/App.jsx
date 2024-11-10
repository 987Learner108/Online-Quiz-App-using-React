// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import GeographyQuiz from './components/Quiz/GeographyQuiz'
import Math from './components/Quiz/Math'
import History from './components/Quiz/History'
import Literature from './components/Quiz/Literature'
import Science from './components/Quiz/Science'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/quiz/geography" element={<GeographyQuiz />} />
          <Route path="/quiz/math" element={<Math />} />
          <Route path="/quiz/history" element={<History />} />
          <Route path="/quiz/literature" element={<Literature />} />
          <Route path="/quiz/science" element={<Science />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
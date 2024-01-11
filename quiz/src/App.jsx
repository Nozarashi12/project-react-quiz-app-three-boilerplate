import React, { Component, useState } from 'react'
import Quiz from './Components/Quiz'
import Home from './Components/Home'
import Result from './Components/Result'
import { Route, Routes } from 'react-router-dom'




function App() {

  const[score,setScore]=useState(0);
  const[attempt,setAttempt]=useState(0);
  return (
    <div><Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Quiz' element={<Quiz score={score} setScore={setScore} attempt={attempt} setAttempt={setAttempt}/>}/>
       <Route path='/Result' element={<Result score={score} setScore={setScore} attempt={attempt} setAttempt={setAttempt}/>}/>
       
      </Routes></div>
  )
}

export default App
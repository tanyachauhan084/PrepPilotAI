import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import InterviewHistory from './pages/InterviewHistory'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element= {<Auth/>}/>
      <Route path='/interviewhistory' element={<InterviewHistory/>}/>
    </Routes>
  )
}

export default App
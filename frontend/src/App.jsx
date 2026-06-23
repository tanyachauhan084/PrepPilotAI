import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import axios from 'axios'
import Auth from './pages/Auth'
import InterviewHistory from './pages/InterviewHistory'
import { linkWithCredential } from 'firebase/auth'





export const serverUrl= "http://localhost:8880"

const App = () => {

 useEffect(() => {
   
  const getUser= async(req,res)=>{

    try{

      const result= await axios.get(serverUrl+ "/user/info", {withCredentials:true});
      console.log(result.data.data);
    }

    catch(error){

      console.log(error.response.data);
    }
  }
 

  getUser();
  
 }, [])
 


    
    
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element= {<Auth/>}/>
      <Route path='/interviewhistory' element={<InterviewHistory/>}/>
    </Routes>
  )

}
export default App
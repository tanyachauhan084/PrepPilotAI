import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import axios from 'axios'
import Auth from './pages/Auth'
import InterviewHistory from './pages/InterviewHistory'
import { linkWithCredential } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewReport from './pages/InterviewReport'
import Pricing from './pages/Pricing'






export const serverUrl= "http://localhost:8880"

const App = () => {


  const dispatch= useDispatch();
 useEffect(() => {
   
  const getUser= async(req,res)=>{

    try{

      const result= await axios.get(serverUrl+ "/user/info", {withCredentials:true});
      console.log(result.data);
     dispatch(setUserData(result.data))
    }

    catch(error){

      console.log(error.response.data);
      dispatch(setUserData(null) );
    }
  }
 

  getUser();
  
 }, [])
 


    
    
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element= {<Auth/>}/>
      <Route path='/interviewhistory' element={<InterviewHistory/>}/>
      
<Route path='/interview' element= {<InterviewPage/>}/>

 <Route path='/history' element={<InterviewHistory/>}/>
<Route path='/pricing' element={<Pricing/>}/>
<Route path='/report/:id' element={<InterviewReport/>}/>


    </Routes>
  )

}
export default App
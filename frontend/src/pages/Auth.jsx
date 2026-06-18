import React from 'react'
import {motion} from "motion/react"
import { BsRobot } from 'react-icons/bs';
import {IoSparkles} from 'react-icons/io5';
const Auth = () => {
  return (
     <div className= 'w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20'>
<motion.div
initial={{opacity:0 , y:-40}} 
        animate={{opacity:1 , y:0}} 
        transition={{duration:1.05}}
        className='w-full max-w-lg p-12 rounded-4xl bg-white shadow-2xl border border-gray-200'>

     <div className='flex items-center justify-center gap-3 mb-6'>
                  <div className='bg-black text-white p-2 rounded-lg'>
                      <BsRobot size={18}/>
  
                  </div>
                  <h2 className='font-semibold text-lg'>PrepPilot AI</h2>
              </div>
  

        <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                      Continue with
                      <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                          <IoSparkles size={16}/>
                          AI Smart Interview
      
                      </span>
                  </h1>
            

    
      <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interviews,
        track your progress, and unlock detailed performance insights.
            </p>


   
  

</motion.div>
     </div>
  )
}

export default Auth;
import React from 'react'
import { motion } from "framer-motion";
const Step1SetUp = ({onStart}) => {
  return (
    <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
               className='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4'>
   
               <div className='w-full max-w-6xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden'>
   
                  
              
               </div>
   
           </motion.div>
       )
   }
 

export default Step1SetUp
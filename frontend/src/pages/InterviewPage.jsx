import React from 'react'
import { useState } from 'react'

function InterviewPage() {
    const [step,setStep] = useState(1)




    return (
    <div className='min-h-screen bg-gray-50'>
       

       {step===1 && (
    <Step1SetUp
        onStart={()=>{
            setStep(2)
        }}
    />
)}
    </div>
  )
}

export default InterviewPage

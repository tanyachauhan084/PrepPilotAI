import React from 'react'
import { HiSparkles } from "react-icons/hi";
const Home = () => {
  return (
         <div className='min-h-screen bg-[#f3f3f3] flex flex-col'>

 <div className='flex-1 px-6 py-20'>
        <div className='max-w-6xl mx-auto'>

          <div className='flex justify-center mb-6'>
            <div className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2'>
              <HiSparkles size={16} className="bg-green-50 text-green-600" />
              AI Powered Smart Interview Platform
            </div>
          </div>

        </div>
      </div>
         </div>

  )
}

export default Home
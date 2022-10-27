import React from 'react'
import { useRouter } from "next/router";
import Header from "../components/Header";


import { CheckCircleIcon } from '@heroicons/react/24/solid'



function success() {
    const router = useRouter(); 
    
  return (
    <div className='text-center  bg-gray-200 h-screen '>
    <Header/>

    <main className='max-w-screen-lg mx-auto '>



    <div className=' flex flex-col p-10 bg-white'>

   <div className='flex flex-col items-center space-x-2 mb-5 content-center'> 
   <CheckCircleIcon className=' text-green-500 h-10 '/>
   <h1 className='text-2xl font-bold '>Success!! </h1>
    </div>

    <div>
<p>Thank you!</p>
<p>Your order has been confirmed.</p>
    <button onClick={() => router.push("/orders")} className='button mt-10 font-bold cursor-pointer mx-30'>Go to my orders</button>
</div>



    </div>

<div>
<button
    className=' button mt-20 font-bold cursor-pointer mx-30  '
    onClick={() => router.push('/')}
    >Return to main page</button>
</div>
   
    </main>
    
    </div>
  )
}

export default success;
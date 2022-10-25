import React from 'react'
import { useRouter } from "next/router";



function success() {
    const router = useRouter(); 
    
  return (
    <div className='text-center mt-20 bg-green-100 mx-20'>
    <h1 className='text-xl font-bold pt-10'>Success!!</h1>
    <p>Your order has been placed.</p>

    <p
    className=' button mt-10 font-bold cursor-pointer mx-30  '
    onClick={() => router.push('/')}
    >Return to main page</p>
    </div>
  )
}

export default success;
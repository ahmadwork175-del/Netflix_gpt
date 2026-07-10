import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignUpForm  , setSignUpForm ] = useState(false);
     const toggleSignUpForm =()=> {
        setSignUpForm(!isSignUpForm)
      
     }

  return (
   <>
 <Header />

  <div className="relative h-screen ">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/PK-en-20260706-TRIFECTA-perspective_e3544a9d-6c8b-40de-8218-bb8c30f55481_large.jpg"
      alt="hero-img"
    />
    <div className='absolute z-100 top-50 right-0 left-0 m-auto bg-black/80  p-10   text-white  w-full max-w-[400px]  rounded-md '>
        <form className=' flex flex-col '>
            <h2 className='text-3xl font-bold mb-8'> {isSignUpForm ? "Sign Up" : "Sign In" }</h2>
             {isSignUpForm && <input className='mb-3 p-3 border-1 border-white/20 bg-gray-800 rounded-md' type='text' placeholder=' Full name'></input>

             }
            <input className='mb-3 p-3 border-1 border-white/20 bg-gray-800 rounded-md' type='email' placeholder='Email Address'></input>
            <input className='mb-3 p-3 border-1 border-white/20 bg-gray-800 rounded-md' type='password' placeholder='Password'></input>
            <button className='bg-red-700 p-3 rounded-md mt-6'> {isSignUpForm  ? " Sign Up" : "Sign In"}  </button>

          
        </form>
          <p className='mt-15 p-2'>{ isSignUpForm  ? 'Already account ?' : "You are new " } <button onClick={()=> toggleSignUpForm()} className='font-bold cursor-pointer pl-1  '>  {isSignUpForm ? "Sign In" : "Sign Up"} now  </button></p>
    <div>
    </div>
    

    </div>
    <div className='absolute inset-0  bg-gradient-to-t from-black/80 via-black/60 to-black/80 '></div>
  </div>
   </>
  )
}

export default Login
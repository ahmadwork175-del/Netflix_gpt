import React from 'react'

const HeroTitle = ({title , overview}) => {
  return (
    <div className=' w-full h-full z-40 flex   text-white bg-gradient-to-r  from-black/80 to-black/10'>
        <div className='max-w-[800px] w-full gap-10 flex flex-col ml-8 justify-center '>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='text-xl'> {overview}</p>
      <div className='flex gap-5'>
        <button  className=' bg-white px-12 py-4 rounded-sm text-black font-bold cursor-pointer' > Play </button>
         <button  className=' bg-white/30 px-12 py-4 rounded-sm font-bold cursor-pointer'>! More info </button>
      </div>
      </div>
    </div>
  )
}

export default HeroTitle
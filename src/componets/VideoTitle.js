import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-16 absolute  text-white bg-gradient-to-r from-black'>

    <h1 className='text-5xl font-bold'>{title}</h1>
    <p className='py-6 text-md w-1/4'> {overview}</p>

    <div className=''>
      <button 
        className='bg-white text-black p-4 px-12 m text-lg hover:bg-opacity-80 rounded-md '>
        ▶︎ Play
      </button>
      <button  
      className=' mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-md '>
        ℹ️ More Info
      </button>
    </div>
    </div>
  )
}

export default VideoTitle
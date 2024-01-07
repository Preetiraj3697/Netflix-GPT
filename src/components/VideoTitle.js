import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-[40%] p-3'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='italic my-1'>{overview}</p>
      <div className='flex gap-2'>
        <button className='bg-red-700 p-3 px-8 m-2 rounded-lg'>▶️ PLAY</button>
        <button className='bg-gray-700 p-3 px-8 m-2 rounded-lg'>MORE SEE</button>
      </div>
    </div>
  )
}

export default VideoTitle
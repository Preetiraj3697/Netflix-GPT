import React from 'react'
import Header from './Header'

const Browse = () => {
  return (
    <>
    <div
      className="flex-1 bg-hero bg-cover bg-center bg-no-repeat"
      style={{ height: "900px" }}
    >
      <div className="bg-gradient-to-tr from-black h-full">
        <Header />
      </div>
    </div>
    <div className='absolute top-24 font-bold text-white text-3xl bg-black w-full'>
        Browse
    </div>
    </>
  )
}

export default Browse
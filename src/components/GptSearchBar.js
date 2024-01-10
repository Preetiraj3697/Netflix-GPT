import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant';

const GptSearchBar = () => {
    // const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang);
    const searchText = useRef(null);
    // const handleGptSearchClick = () => {
    //     dispatch()
    // }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center bg-white">
    <form
      className="w-full md:w-1/2 bg-gray-400 grid grid-cols-12 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className=" p-4 m-4 col-span-9 rounded-lg"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        // onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar
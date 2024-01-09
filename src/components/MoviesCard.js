import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MoviesCard = ({poster}) => {
    if (!poster) return null;
    return (
      <div className="w-48 pr-4">
        <img alt="Movie Card" src={IMG_CDN_URL + poster} />
      </div>
    );
}

export default MoviesCard
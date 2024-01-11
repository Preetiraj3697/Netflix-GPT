
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTION} from '../utils/constant'
import {addTopRatingMovies} from '../redux/moviesSlice'
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const getTopRatedMovies = async () => {
     const res =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', API_OPTION)
     const json = await res.json();
    //  console.log(json.results);
     dispatch(addTopRatingMovies(json.results))
    }
    useEffect(()=>{
      !topRatedMovies && getTopRatedMovies();
    },[])
}
export default useTopRatedMovies;
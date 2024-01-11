
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTION} from '../utils/constant'
import {addUpcomingMovies} from '../redux/moviesSlice'
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    const getUpcomingMovies = async () => {
     const res =  await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
     const json = await res.json();
    //  console.log(json.results);
     dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
      !upcomingMovies && getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;
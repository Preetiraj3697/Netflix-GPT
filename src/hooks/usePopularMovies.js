
import { useDispatch } from 'react-redux';
import {API_OPTION} from '../utils/constant'
import {addPopularMovies} from '../redux/moviesSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
     const res =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTION)
     const json = await res.json();
    //  console.log(json.results);
     dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
      getPopularMovies();
    },[])
}
export default usePopularMovies;
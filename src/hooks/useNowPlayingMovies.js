
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTION} from '../utils/constant'
import {addMovies} from '../redux/moviesSlice'
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
     const res =  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
     const json = await res.json();
    //  console.log(json.results);
     dispatch(addMovies(json.results))
    }
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;
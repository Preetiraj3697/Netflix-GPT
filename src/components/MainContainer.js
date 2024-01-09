import { useSelector } from 'react-redux'
import VideoBgContainer from './VideoBgContainer'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movies) return null;
    const mainMovie = movies[0];
    // console.log(mainMovie);
    const {original_title, overview,id} = mainMovie;
  return (
    <div className=" bg-black md:pt-0 text-white">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBgContainer movieId={id}/>
    </div>
  )
}

export default MainContainer
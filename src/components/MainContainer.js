import { useSelector } from 'react-redux'
import VideoBgContainer from './VideoBgContainer'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)
    if(!movies) return null;
    const mainMovie = movies[0];
    console.log(mainMovie);
  return (
    <div>
        <VideoTitle />
        <VideoBgContainer />
    </div>
  )
}

export default MainContainer
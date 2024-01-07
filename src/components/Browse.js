
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'

const Browse = () => {
   useNowPlayingMovies()
  return (
    <>
        <Header />
        <MainContainer />
        <SecondContainer />
    </>
  )
}

export default Browse
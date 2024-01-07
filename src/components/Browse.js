
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'

const Browse = () => {
   useNowPlayingMovies()
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
    <div className='absolute top-24 text-white bg-black w-full'>
        <MainContainer />
        <SecondContainer />
    </div>
    </>
  )
}

export default Browse
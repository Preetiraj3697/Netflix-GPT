import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/moviesSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTION
        );
        const json = await data.json();
        // console.log(json);
        const filterData = json?.results?.filter((item) => item.type === "Trailer");
        // console.log("filterDAta", filterData);
        dispatch(addTrailerVideo(filterData[0]));
      };
      useEffect(() => {
        getMovieVideo();
      }, []);
}
export default useTrailerVideo;
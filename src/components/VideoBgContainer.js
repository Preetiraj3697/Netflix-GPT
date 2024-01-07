import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/moviesSlice";

const VideoBgContainer = ({ movieId}) => {
  const dispatch = useDispatch();
  const TrailerId = useSelector(store => store.movies?.trailerVideo)
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((item) => item.type === "Trailer");
    console.log("filterDAta", filterData);
    dispatch(addTrailerVideo(filterData[0]));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${TrailerId.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBgContainer;

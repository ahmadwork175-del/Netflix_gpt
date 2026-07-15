import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getTrailer } from "../utils/moviesSlice";

const HeroBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo  = useSelector(store => store.movies?.movieTrailer);
  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options,
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (trailer) => trailer.type === "Trailer",
    );  
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(getTrailer(trailer));
  };

  return (
    <>
 <div className="absolute top-0 left-0 right-0 aspect-auto z-10 w-full overflow-hidden ">
    <iframe
className="w-screen aspect-video object-cover"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0`}

  frameBorder="0"
  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
</div>
    </>
  );
};

export default HeroBackground;

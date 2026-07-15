import React, { useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import { useSelector } from "react-redux";

const HeroSection = () => {

  const movies = useSelector(
    (store) => store.movies?.nowPlayMovies);

  if (movies.length === 0) return null;

  const heroMovie = movies[1];

 const {original_title ,overview , id} = heroMovie
  
  return (
    <>
    <div className="relative flex items-center  aspect-video   ">
      <HeroBackground  movieId= {id} />
      <HeroTitle title ={ original_title } overview={overview} />
      </div>
    </>
  );
};


export default HeroSection;
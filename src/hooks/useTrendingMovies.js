import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import {   addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {

  const dispatch = useDispatch();
 useEffect(()=> {
    getMovie();
 }, [])


 const getMovie = async ()=> {
     const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" , options);
     const json = await data.json();
     dispatch( addTrendingMovies(json.results))

 }




}

export default useTrendingMovies ;
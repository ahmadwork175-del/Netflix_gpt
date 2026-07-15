import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import {  addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch();
 useEffect(()=> {
    getMovie();
 }, [])


 const getMovie = async ()=> {
     const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" , options);
     const json = await data.json();
     console.log(json.results)
     dispatch( addPopularMovies(json.results))

 }




}

export default usePopularMovies ;
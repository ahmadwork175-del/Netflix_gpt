import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayMovies } from "../utils/moviesSlice";

const useNowPlayMovies = () => {

  const dispatch = useDispatch();
 useEffect(()=> {
    getMovie();
 }, [])


 const getMovie = async ()=> {
     const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" , options);
     const json = await data.json();
     console.log(json.results)
     dispatch( addNowPlayMovies(json.results))

 }




}

export default useNowPlayMovies ;
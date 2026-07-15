
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MoviesContainer from "./MoviesContainer";


const Browse = () => {
 useNowPlayMovies();
 useTrendingMovies();
 usePopularMovies();
 useUpcomingMovies();
  return (
    <>
      <Header />
      <HeroSection/>
      <MoviesContainer />
    </>
  );
};

export default Browse;

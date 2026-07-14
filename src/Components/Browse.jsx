
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import Header from "./Header";
import HeroSection from "./HeroSection";


const Browse = () => {
 useNowPlayMovies();
  return (
    <>
      <Header />
      <HeroSection/>
    </>
  );
};

export default Browse;

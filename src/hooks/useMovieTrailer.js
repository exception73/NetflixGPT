import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();

    const getMovieVideos = async() => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
        API_OPTIONS
      )
  
      const json = await data.json();
      
      console.log(json);
      const filterData = json?.results?.filter((video) => video.type === "Trailer")
      // console.log(trailer);
      const trailer = filterData?.length ? filterData[0] : json?.results[0];
  
      dispatch(addTrailerVideo(trailer));
  
    }
  
    useEffect(() => {
      getMovieVideos();
    }, [])
  
  
}

export default useMovieTrailer;
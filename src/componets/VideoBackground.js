import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  //fetch trailer video
  useMovieTrailer({movieId});

  return (
    <div>

      <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube-nocookie.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player" 
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       >
          
      </iframe>


    </div>
  )
}

export default VideoBackground
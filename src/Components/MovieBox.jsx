import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';




const API_IMG = "https://image.tmdb.org/t/p/w500/"
const MovieBox= ({ title, poster_path, vote_average,release_date, overview})=> {
  return (
    <div className='card text-center bg-secendary mb-3'>
        <Splide>
            <SplideSlide>
        <div className='card body'>
        <img src={API_IMG+poster_path} alt="resim"  className="card-img-top"></img>
        <div className='card-body'>
            <button type='button' className='btn btn-dark'>View More</button>
        </div>
        </div>
       
        </SplideSlide>
        </Splide>
        
    </div>
  )
}

export default MovieBox

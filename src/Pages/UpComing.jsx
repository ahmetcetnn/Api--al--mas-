import { useState,useEffect } from "react"
import '../App.css';
import MovieBox from "../Components/MovieBox";
import React from "react";
import '@splidejs/react-splide/css';





// "https://api.themoviedb.org/3/movie/popular?api_key=002f45e7d56066b7503bddca0e16ee67"
function UpComing() {
  const [movies,setMovies] =useState([])
  const API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=002f45e7d56066b7503bddca0e16ee67"
  
  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then (data => {
      console.log(data)
      setMovies(data.results)
    })
  },[])
  



  return (
    <div className="container">
      <h1>UPCOMING MOVIES</h1>
      <div className="grid">
      {movies.map((movie)=> <MovieBox 
      
      key={movie.id} {...movie}/> )}
      </div>
    </div>
  );
}

export default UpComing;

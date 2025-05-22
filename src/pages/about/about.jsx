import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

const About = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  if (id !== undefined) {

    // const movies = async()=>{
    //      useEffect(() => {
    //           fetch('https://api.themoviedb.org/3/movie/popular?api_key=d658b100138fa9f8f628a562f4f7fe6f')

    //       }, []);
    // }
    useEffect(() => {

      const getWeatherData = async () => {

        // * method 1
        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d658b100138fa9f8f628a562f4f7fe6f`)

        let data = await response.json()
        console.log(data);


        setMovies(data.results)

      }
      getWeatherData()
    }, [])
    const movie = movies.find(e => id == e.id);

    if (!movie) {
      return <div className="text-white text-center bg-black pt-10">Movie not found</div>;
    }

    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <Link to="/" className="text-[#f9e125] hover:underline mb-8 inline-block">
            Back to Movies
          </Link>

          <div className="flex flex-col md:flex-row gap-10 mt-8">
            <div className="w-full md:w-1/3">
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-image.png'} alt="erore404" className="w-full h-[70vh] rounded-lg shadow-lg" />
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-[#f9e125] pb-6">{movie.original_title}</h1>

              <div className="space-y-4">
                <div>
                  <span className="text-[#f9e125] font-semibold">date : </span>
                  <span>{movie.release_date}</span>
                </div>

                <div>
                  <span className="text-[#f9e125] font-semibold">popularity: </span>
                  <span>{movie.popularity}</span>
                </div>

                <div>
                  <span className="text-[#f9e125] font-semibold">original lange : </span>
                  <span>{movie.original_language}</span>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl text-[#f9e125] pb-4">Description</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


};

export default About; 
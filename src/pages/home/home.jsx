import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //    const data =  fetch('https://api.themoviedb.org/3/movie/popular?api_key=d658b100138fa9f8f628a562f4f7fe6f')
    //    console.log(data);


    // }, []);
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

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className=' bg-black    flex flex-col gap-[10vh]'>
            <div className='bg-[url("https://img.freepik.com/premium-photo/destroyed-car-background_871554-1588.jpg")]  bg-cover bg-center flex flex-col gap-[10vh]'>
                <div className="text-white flex justify-around items-center gap-20 pt-8 max-[480px]:flex-col">
                    <h1 className="text-[35px] text-[#f9e125]">Cinevision</h1>
                    <input
                        className="border border-black text-black w-[40vh] h-[4vh] rounded-[5px] p-2 focus:outline-none"
                        type="search"
                        placeholder="Chercher un film..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

              


                <div className='flex flex-col gap-[5vh] justify-center p-9  '>
                    <h1 className='text-[#f9e125] text-start text-[5vh] '>trending movies</h1>
                    <div className='gap-20  text-white  justify-center  grid md:[grid-template-columns:repeat(5,1fr)] grid-cols-1 '>

                        {filteredMovies.slice(0, 5).map((movie, id) => (

                            <div key={id} className="hover:scale-105 transform transition duration-300">

                                <Link to={`/about/${movie.id}`}>
                                    <img
                                        className='w-[35vh] h-[40vh] rounded-lg'
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-image.png'}
                                        alt={movie.title}
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-[3vh]'>{movie.title}</h1>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex gap-3'>
                                                <h1 className='text-[#f9e125] text-[2vh] flex items-center'>Date de sortie : </h1>
                                                <p>{movie.release_date}</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <h1 className='text-[#f9e125] text-[3vh] flex items-center'>Note : </h1>
                                                <p>{movie.vote_average}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>





            </div>

            <div className='flex flex-col gap-10 justify-center p-9'>
                <h1 className='text-[#f9e125] text-start text-[5vh] '>continue watching</h1>
                <div className='gap-20  text-white justify-center  grid md:[grid-template-columns:repeat(4,1fr)] grid-cols-1 '>
                    {filteredMovies.map((movie, id) => (
                        <div key={id} className="hover:scale-105 transform transition duration-300">

                            <Link to={`/about/${movie.id}`}>
                                <img
                                    className='w-[35vh] h-[40vh] rounded-lg'
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-image.png'}
                                    alt={movie.title}
                                />
                                <div className='flex flex-col gap-2'>
                                    <h1 className=''>{movie.title}</h1>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex gap-3'>
                                            <h1 className='text-[#f9e125]'>Date de sortie : </h1>
                                            <p>{movie.release_date}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <h1 className='text-[#f9e125]'>Note : </h1>
                                            <p>{movie.vote_average}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;
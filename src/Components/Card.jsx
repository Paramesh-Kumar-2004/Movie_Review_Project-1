import React, { useContext, useState } from 'react'
import { Store } from './ContextAPI'
import Loader from './Loader';
import axios from 'axios';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';



const Card = () => {

    const navigate = useNavigate()
    const { movies, loading, loadingMessage } = useContext(Store);


    function HandleMoreDetail(movie,) {
        navigate(`/movie/${movie.imdbID}`)
    }

    if (loading) {
        return (
            <div className='h-screen w-full flex justify-center items-center'>
                <Loader loadingMessage={loadingMessage} />
            </div>
        )
    }

    return (
        <>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> */}
            <div className="flex flex-wrap justify-around gap-4">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div key={index} className="w-64 bg-transparent shadow-2xl p-2 rounded hover:shadow-blue-500/50 duration-300 hover:scale-105 hover:shadow-lg border-2 hover:bg-sky-600 border-sky-400 flex flex-col justify-between">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h3 className="mt-2 font-bold">{movie.Title}</h3>
                            <p className="text-gray-50 font-extrabold text-sm">{movie.Year}</p>
                            <Rating />
                            <div className="text-center font-bold text-black-900 text-sm" >
                                <button className="bg-blue-800 py-1 px-3 rounded-md text-white hover:cursor-pointer hover:scale-125 duration-500 border-2 border-sky-400" onClick={() => HandleMoreDetail(movie)}>More Details</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="text-center text-white mt-10 text-xl">
                            No Data Found
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Card;
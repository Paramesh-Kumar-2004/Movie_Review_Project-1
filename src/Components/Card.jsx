import React, { useContext, useState } from 'react'
import { Store } from './ContextAPI'
import Loader from './Loader';
import axios from 'axios';
import Rating from './Rating';



const Card = () => {

    const { movies, loading, loadingMessage, setLoadingMessage } = useContext(Store);

    // const [] = useState(0)

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
                {movies ? (
                    movies.map((movie, index) => (
                        <div key={index} className="bg-sky-50 shadow-2xl p-2 rounded hover:shadow-blue-500/50 duration-300 hover:-translate-y-3 hover:shadow-lg border-2 hover:bg-green-100 border-gray-400 flex flex-col justify-between">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h3 className="mt-2 font-bold">{movie.Title}</h3>
                            <p className="text-gray-500 text-sm">{movie.Year}</p>
                            <Rating />
                            <div className="text-center font-bold text-black-900 text-sm" >
                                <button className="bg-sky-400 p-1 rounded-md text-black hover:cursor-pointer" onClick={() => HandleMoreDetail(movie)}>More Details</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="text-center text-gray-500 mt-10 text-xl">
                            No Data Found
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Card;

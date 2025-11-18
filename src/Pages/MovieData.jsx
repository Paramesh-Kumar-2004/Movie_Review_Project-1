import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieData = () => {

    const { id } = useParams()
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        GetMovie()
    }, [id])

    useEffect(() => {
        console.log(movieData);
    }, [movieData]);



    async function GetMovie() {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=747591dd&i=${id}`)
            console.log(response.data)
            setMovieData(response.data)
            // console.log(movieData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='h-screen w-full flex flex-wrap justify-center items-center bg-gray-200'>
                {Object.keys(movieData).length > 0 ? (
                    <div className="min-w-2xs w-[60%] h-[70%] bg-sky-50 shadow-2xl p-2 rounded hover:shadow-blue-500/50 duration-300 hover:-translate-y-3 hover:shadow-lg border-2 hover:bg-green-100 border-gray-400 flex gap-6">
                        <div>
                            <img
                                src={movieData.Poster}
                                alt={movieData.Title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className='flex flex-col justify-between flex-wrap'>
                            <h3 className="mt-2 font-bold">Movie : {movieData.Title}</h3>
                            <p className="text-gray-500 text-sm">Actors : {movieData.Actors}</p>
                            <p className="text-gray-500 text-sm">Director : {movieData.Director}</p>
                            <p className="text-gray-500 text-sm">Writer : {movieData.Writer}</p>
                            <p className="text-gray-500 text-sm">Year : {movieData.Year}</p>
                            <p className="text-gray-500 text-sm">BoxOffice : {movieData.BoxOffice}</p>
                            <p className="text-gray-500 text-sm">Type : {movieData.Type}</p>
                        </div>
                    </div>
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

export default MovieData
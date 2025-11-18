import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieData = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        GetMovie()
    }, [id])

    async function GetMovie() {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=747591dd&i=${id}`)
            setMovie(response.data)
            console.log(movie)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="flex flex-wrap justify-around gap-4">
                {movie.length > 0 ? (
                    movie.map((item, index) => (
                        <div key={index} className="bg-sky-50 shadow-2xl p-2 rounded hover:shadow-blue-500/50 duration-300 hover:-translate-y-3 hover:shadow-lg border-2 hover:bg-green-100 border-gray-400 flex flex-col justify-between">
                            <img
                                src={item.Poster}
                                alt={item.Title}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h3 className="mt-2 font-bold">{item.Title}</h3>
                            <p className="text-gray-500 text-sm">{item.Year}</p>
                            <p className="text-gray-500 text-sm">{item.Type}</p>
                            <Rating />
                            <div className="text-center font-bold text-black-900 text-sm" >
                                <button className="bg-sky-400 p-1 rounded-md text-black hover:cursor-pointer" onClick={() => HandleMoreDetail(item)}>More Details</button>
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

export default MovieData
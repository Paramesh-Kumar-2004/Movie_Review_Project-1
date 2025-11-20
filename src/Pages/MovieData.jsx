import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Store } from '../Components/ContextAPI'
import Loader from '../Components/Loader'



const MovieData = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const { loading, setLoading, loadingMessage } = useContext(Store)
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        GetMovie()
    }, [id])


    async function GetMovie() {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=747591dd&i=${id}`)
            console.log(response.data)
            setMovieData(response.data)
            // console.log(movieData)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
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
            <div className='h-screen w-full flex flex-wrap justify-center items-center bg-sky-900'>
                {Object.keys(movieData).length > 0 ? (
                    <div className="min-w-2xs w-[60%] min-h-[70%] bg-[rgba(0,0,0,0.2)] shadow-[inset_0_0px_126px_0px_rgba(0,0,255,0.3)] p-2 rounded hover:shadow-blue-500/50 duration-300 border-2 hover:bg-sky-900 border-sky-400 flex flex-wrap justify-center md:flex-nowrap gap-6 text-white ">
                        <div>
                            <img
                                src={movieData.Poster}
                                alt={movieData.Title}
                                className="w-full h-full min-w-40 min-h-80 object-cover rounded"
                            />
                        </div>
                        <div className='flex flex-col justify-between flex-wrap'>

                            <h3 className="mt-2 font-bold "><span className='text-black font-bold'>Movie : </span>{movieData.Title}</h3>

                            <p className="text-sm font-bold"><span className='text-black font-bold'>Actors : </span>{movieData.Actors}</p>

                            <p className="font-bold text-sm"><span className='text-black font-bold'>Director : </span>{movieData.Director}</p>

                            <p className="text-sm font-bold"><span className='text-black font-bold'>Writer : </span>{movieData.Writer}</p>

                            <p className="text-sm font-bold"><span className='text-black font-bold'>Release Year : </span>{movieData.Released}</p>

                            <p className="text-sm font-bold"><span className='text-black font-bold'>Duration : </span>{movieData.Runtime}</p>

                            <p className="text-sm font-bold"><span className='text-black font-bold'>Box Office : </span>{movieData.BoxOffice}</p>

                            <p className="text-sm font-bold"><span className='text-black font-bold'>IMDB Rating : </span>{movieData.imdbRating}</p>

                            <p className="text-sm font-bold"><span className='text-black font-semibold'>Type : </span> {(movieData.Type)}</p>

                            <div className='text-center'>
                                <button
                                    className='bg-blue-600 py-2 px-5 rounded-sm text-white cursor-pointer hover:scale-110 duration-150'
                                    onClick={() => navigate("/")}
                                >Back</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='h-screen w-full flex justify-center items-center'>
                            <Loader loadingMessage={loadingMessage} />
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default MovieData
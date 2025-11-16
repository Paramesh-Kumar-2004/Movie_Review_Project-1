import React, { useContext } from 'react'
import { Store } from './ContextAPI'
import Loader from './Loader';
import axios from 'axios';



const Card = () => {

    const { movies, loading, loadingMessage, setLoadingMessage } = useContext(Store);

    if (movies.length === 0) {
        return (
            <div className='h-screen w-full flex justify-center items-center'>
                <Loader loadingMessage={loadingMessage} />
            </div>
        )
    }

    async function getImage() {
        const options = {
            method: 'GET',
            url: 'https://imdb236.p.rapidapi.com/api/imdb/tt0816692',
            headers: {
                'x-rapidapi-key': '784ddacbc6msh0df9522750dbac2p152a3djsna8781a08619f',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div key={index} className="bg-white shadow-2xl p-2 rounded hover:shadow-blue-500/50 hover:shadow-lg border-2 border-gray-200 flex flex-col justify-between">
                            <img
                                src={movie.primaryImage ? movie.primaryImage : ""}
                                alt={movie.Title}
                                className="w-full h-64 object-cover rounded"
                            />
                            <h3 className="mt-2 font-bold">{movie.primaryTitle}</h3>
                            <p className="text-gray-500 text-sm">{movie.startYear}</p>
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

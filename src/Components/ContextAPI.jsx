import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
    const [movies, setMovies] = useState([])
    const [movieParams, setMovieParams] = useState("")

    useEffect(() => {
        fetchMovie()
    }, [])

    async function fetchMovie() {
        const options = {
            method: 'GET',
            url: 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles',
            headers: {
                'x-rapidapi-key': '784ddacbc6msh0df9522750dbac2p152a3djsna8781a08619f',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setMovies(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Store.Provider value={{
            movies, setMovies,
            movieParams, setMovieParams,
            loading, setLoading,
            loadingMessage, setLoadingMessage
        }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
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
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_KEY&query=spider&with_genres=28&primary_release_year=2022&page=2',
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
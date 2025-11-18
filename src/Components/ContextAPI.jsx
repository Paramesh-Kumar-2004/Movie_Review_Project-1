import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
    const [movies, setMovies] = useState([])
    const [movieData, setMovieData] = useState([])

    const [page, setPage] = useState(1)
    const [title, setTitle] = useState("")
    const [type, setType] = useState("movie")
    const [year, setYear] = useState()

    useEffect(() => {
        fetchMovie()
    }, [page, title, type])

    async function fetchMovie() {
        const options = {
            method: 'GET',
            url: `http://www.omdbapi.com/?apikey=747591dd&s=${title ? title : "Avengers"}&page=${page}&type=${type}&y=${year}`,
        };
        try {
            setLoading(true)
            const response = await axios.request(options);
            setMovies(response.data.Search || [])
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <Store.Provider value={{
            movies, setMovies,
            movieData, setMovieData,
            loading, setLoading,
            loadingMessage, setLoadingMessage,
            page, setPage,
            title, setTitle,
            type, setType,
            year, setYear,
        }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
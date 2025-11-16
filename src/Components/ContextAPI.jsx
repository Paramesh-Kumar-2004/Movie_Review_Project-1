import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
    const [movies, setMovies] = useState([])

    const [page, setPage] = useState(3)
    const [title, setTitle] = useState("")
    const [type, setType] = useState("movie")
    const [year, setYear] = useState()

    useEffect(() => {
        fetchMovie()
    }, [page])

    async function fetchMovie() {

        const options = {
            method: 'GET',
            url: `http://www.omdbapi.com/?apikey=747591dd&s=${title ? title : "Avengers"}&page=${page}&type=${type}&y=${year}`,
        };
        try {
            const response = await axios.request(options);
            setMovies(response.data.Search)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Store.Provider value={{
            movies, setMovies,
            loading, setLoading,
            loadingMessage, setLoadingMessage
        }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
    const [movies, setMovies] = useState([])
    const [refetch, setRefetch] = useState(false)

    const [page, setPage] = useState(1)
    const [title, setTitle] = useState("Avengers")
    const [type, setType] = useState("movie")
    const [year, setYear] = useState("All")

    useEffect(() => {
        fetchMovie()
    }, [page, title, type, year])

    async function fetchMovie() {

        let url = `https://www.omdbapi.com/?apikey=747591dd&s=${title}&page=${page}&type=${type}`

        if (year >= 1990) {
            url = `https://www.omdbapi.com/?apikey=747591dd&s=${title ? title : "Avengers"}&page=${page}&type=${type}&y=${year}`
        }

        try {
            setLoading(true)
            const response = await axios.get(url);
            setMovies(response.data.Search || [])
            // console.log(response.data.Search)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <Store.Provider value={{
            movies, setMovies,
            loading, setLoading,
            loadingMessage, setLoadingMessage,
            page, setPage,
            title, setTitle,
            type, setType,
            year, setYear,
            refetch, setRefetch
        }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
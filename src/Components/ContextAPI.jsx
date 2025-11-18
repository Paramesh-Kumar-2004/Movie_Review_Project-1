import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
    const [movies, setMovies] = useState([])

    const [page, setPage] = useState(1)
    const [title, setTitle] = useState("")
    const [type, setType] = useState("movie")
    const [year, setYear] = useState()

    useEffect(() => {
        fetchMovie()
    }, [page, title, type])

    async function fetchMovie() {
        const url = `http://www.omdbapi.com/?apikey=747591dd&s=${title ? title : "Avengers"}& page=${page}& type=${type}& y=${year} `
        const url2 = `http://www.omdbapi.com/?apikey=747591dd&s=${title ? title : "Avengers"}& page=${page + 1}& type=${type}& y=${year} `

        try {
            setLoading(true)
            const response = await axios.get(url);
            const response2 = await axios.get(url2);
            // const MoviesData = [...response.data.Search, ...response2.data.Search]
            // console.log(MoviesData)
            // setMovies(MoviesData || [])
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
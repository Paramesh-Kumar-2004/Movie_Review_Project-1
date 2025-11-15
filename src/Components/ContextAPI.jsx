import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Non")
    const [movies, setMovies] = useState([])
    const [movieParams, setMovieParams] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get(`
                https://imdb.iamidiotareyoutoo.com/search?
                q=${movieParams ? movieParams : 'CaptainAmerica'}
                `)
            console.log("Movies :", res.data.description)
            setMovies(res.data.description)
            setLoading(false)
        } catch (error) {
            console.log(error)
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
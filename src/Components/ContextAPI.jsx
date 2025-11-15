import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Non")
    const [movies, setMovies] = useState([])
    const [movieParams, setMovieParams] = useState("")

    useEffect(() => {
        // fetchData()
        getMovie()
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${movieParams ? movieParams : 'CaptainAmerica'}`)
            console.log("Movies :", res.data.description)
            setMovies(res.data.description)
            setLoading(false)
        } catch (error) {
            setLoadingMessage(error.message)
            console.log(error)
        }
    }


    async function getMovie() {
        const options = {
            method: 'GET',
            url: 'https://imdb236.p.rapidapi.com/api/imdb/search',
            params: {
                type: 'movie',
                genre: 'Drama',
                rows: '25',
                sortOrder: 'ASC',
                sortField: 'id'
            },
            headers: {
                'x-rapidapi-key': '784ddacbc6msh0df9522750dbac2p152a3djsna8781a08619f',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setMovies(response.data.results)
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
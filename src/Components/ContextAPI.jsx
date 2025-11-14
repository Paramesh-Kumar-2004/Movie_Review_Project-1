import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        // fetchData()
        getMovies()
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman")
            console.log("Movies :", res.data.description)
            setMovies(res.data.description)
        } catch (error) {
            console.log(error)
        }
    }

    async function getMovies() {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            headers: {
                'x-rapidapi-key': '784ddacbc6msh0df9522750dbac2p152a3djsna8781a08619f',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setMovies(response.data.results)
            console.log(response.data.result.primaryImage.url);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Store.Provider value={{ movies }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
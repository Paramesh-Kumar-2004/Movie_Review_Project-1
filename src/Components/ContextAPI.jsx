import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get("https://imdb.iamidiotareyoutoo.com/search?q=CaptainAmerica")
            console.log("Movies :", res.data.description)
            setMovies(res.data.description)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Store.Provider value={{ movies }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
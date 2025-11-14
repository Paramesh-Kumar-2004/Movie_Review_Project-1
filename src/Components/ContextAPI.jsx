import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman")
            console.log(res.data.description)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Store.Provider value={{ data }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
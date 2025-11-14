import React, { createContext, useState } from 'react'

export const Store = createContext()

const ContextAPI = ({ children }) => {

    const [data, setData] = useState("No")

    return (
        <Store.Provider value={{ data }}>
            {children}
        </Store.Provider>
    )
}

export default ContextAPI
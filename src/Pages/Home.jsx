import React, { useContext } from 'react'
import { Store } from '../Components/ContextAPI'



const Home = () => {

    const { data } = useContext(Store)

    return (
        <div>
            <h1>Home</h1>
            <p>{data}</p>
        </div>
    )
}

export default Home
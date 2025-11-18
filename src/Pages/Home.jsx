import React from 'react'
import Card from "../Components/Card.jsx"
import SearchBar from '../Components/SearchBar.jsx'


const Home = () => {
    return (
        <div>
            <div className='my-4'>
                <SearchBar />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default Home
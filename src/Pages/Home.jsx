import React from 'react'
import Card from "../Components/Card.jsx"
import SearchBar from '../Components/SearchBar.jsx'


const Home = () => {

    return (
        <div className='min-h-screen bg-sky-900 text-white py-4 px-2'>
            <div className='pb-2'>
                <SearchBar />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default Home
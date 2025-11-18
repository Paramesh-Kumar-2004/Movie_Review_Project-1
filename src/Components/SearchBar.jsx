import React, { useContext } from 'react'
import { Store } from './ContextAPI'



const SearchBar = () => {

    const { title, setTitle, setType } = useContext(Store)

    function HandleOnChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function HandleFilter(e) {
        const newType = e.target.value
        setType(newType)
    }

    return (
        <div className='flex flex-col justify-around items-center gap-2'>

            {/* Search Bar */}
            <div className='w-1/2'>
                <div className='text-center'>
                    <label htmlFor="search" className='font-bold'>Search : </label>
                    <input
                        value={title}
                        type="text"
                        placeholder='Search Movies Here...'
                        onChange={(e) => HandleOnChange(e)}
                        className='outline-none border-2 border-sky-600 rounded-md p-1'
                    />
                </div>
            </div>

            {/* Filter */}
            <div className='text-center w-1/2'>
                <span className='font-bold'>Filter :</span>
                <select onChange={(e) => HandleFilter(e)} className='items-center'>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                </select>   
            </div>

        </div >
    )
}

export default SearchBar
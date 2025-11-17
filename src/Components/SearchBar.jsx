import React, { useContext } from 'react'
import { Store } from './ContextAPI'



const SearchBar = () => {

    const { title, setTitle } = useContext(Store)

    function HandleOnChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function HandleFilter(e) {
        console.log("Filter :", e.target.value)
    }

    return (
        <div>

            {/* Search Bar */}
            <div>
                <div>
                    <label htmlFor="search">Search : </label>
                    <input
                        value={title}
                        type="text"
                        placeholder='Search Movies Here...'
                        onChange={(e) => HandleOnChange(e)}
                    />
                </div>
            </div>

            {/* Filter */}
            <div>
                Filter :
                <select onChange={(e) => HandleFilter(e)}>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                </select>
            </div>

        </div>
    )
}

export default SearchBar
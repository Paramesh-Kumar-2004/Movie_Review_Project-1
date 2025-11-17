import React, { useContext } from 'react'
import { Store } from './ContextAPI'



const SearchBar = () => {

    const { title, setTitle } = useContext(Store)

    function HandleOnChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    return (
        <div>
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
            <div>Filter</div>
        </div>
    )
}

export default SearchBar
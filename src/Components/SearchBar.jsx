import React, { useContext } from 'react'
import { Store } from './ContextAPI'



const SearchBar = () => {

    const { title, setTitle, type, setType, year, setYear, refetch, setRefetch } = useContext(Store)

    function HandleOnChange(e) {
        setTitle(e.target.value)
    }

    function HandleFilter(e) {
        const newType = e.target.value
        setType(newType)
    }

    function HandleYear(e) {
        console.log("HandleYear")
        setYear(e.target.value)
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
                        placeholder='Search Movies Here... Enter Minimum 3 Letters'
                        onChange={(e) => HandleOnChange(e)}
                        className='outline-none border-2 border-sky-600 rounded-md p-1 w-[60%]'
                    />
                    {/* <span onClick={() => setRefetch(!refetch)}>&#128269;</span> */}
                </div>
            </div>

            {/* Filter */}
            <div className='text-center w-1/2'>
                <div>
                    <span className='font-bold'>Filter :</span>
                    <select value={type} onChange={(e) => HandleFilter(e)} className='items-center'>
                        <option value="movie">Movies</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div>
                    <span className='font-bold'>Year : </span>
                    <select
                        className="border px-2 py-1 rounded overflow-hidden no-scrollbar"
                        onChange={(e) => HandleYear(e)}
                        value={year}
                    >
                        {(() => {
                            const currentYear = new Date().getFullYear();
                            const startYear = 1990;
                            const list = [];

                            for (let i = startYear; i <= currentYear; i++) {
                                list.push(i);
                            }

                            return list.map((yr) => (
                                <option key={yr} value={yr}
                                    className='text-black bg-sky-700'
                                >{yr}</option>
                            ));
                        })()}
                    </select>
                </div>

            </div>

        </div >
    )
}

export default SearchBar
import React, { useEffect, useState } from 'react'



const Rating = ({ setFinalRating }) => {

    const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1)

    const HandleRatingUpdate = (e) => {
        setRating(e.target.value)
    }

    return (
        <div>

            <div className='flex justify-between mt-1 mb-2 '>
                <option value="1"
                    onClick={(e) => HandleRatingUpdate(e)}
                    className={`${rating >= 1 ? 'text-amber-400' : 'text-gray-700'} text-xl font-extrabold cursor-pointer hover:scale-150 duration-200`}
                >&#9733;</option>

                <option value="2"
                    onClick={(e) => HandleRatingUpdate(e)}
                    className={`${rating >= 2 ? 'text-amber-400' : 'text-gray-700'} text-xl font-extrabold cursor-pointer hover:scale-150 duration-200`}
                >&#9733;</option>

                <option value="3"
                    onClick={(e) => HandleRatingUpdate(e)}
                    className={`${rating >= 3 ? 'text-amber-400' : 'text-gray-700'} text-xl font-extrabold cursor-pointer hover:scale-150 duration-200`}
                >&#9733;</option>

                <option value="4"
                    onClick={(e) => HandleRatingUpdate(e)}
                    className={`${rating >= 4 ? 'text-amber-400' : 'text-gray-700'} text-xl font-extrabold cursor-pointer hover:scale-150 duration-200`}
                >&#9733;</option>

                <option value="5"
                    onClick={(e) => HandleRatingUpdate(e)}
                    className={`${rating >= 5 ? 'text-amber-400' : 'text-gray-700'} text-xl font-extrabold cursor-pointer hover:scale-150 duration-200`}
                >&#9733;</option>
            </div>
        </div>
    )
}

export default Rating
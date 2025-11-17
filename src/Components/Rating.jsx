import React, { useState } from 'react'

const Rating = () => {

    const [rating, setRating] = useState(Math.round(Math.random(5) * 5))

    const HandleRatingUpdate = (e) => {
        if (e.target.value <= 5) {
            return setRating(e.target.value)
        }
        else {
            alert("Enter 1 to 5")
        }
    }

    return (
        <div>
            <input
                type="text"
                value={rating}
                placeholder='Enter The Number 1 to 5'
                onChange={(e) => { HandleRatingUpdate(e) }}
                className='border-2 border-sky-500 p-0.5'
            />
            Rating : {rating}
        </div>
    )
}

export default Rating
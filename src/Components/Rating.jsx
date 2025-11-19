import React, { useState } from 'react'

const Rating = () => {

    const [rating, setRating] = useState(Math.round(Math.random(5) * 5))

    const HandleRatingUpdate = (e) => {
        if (e.target.rating <= 5) {
            return setRating(e.target.rating)
        }
        else {
            alert("Enter 1 to 5")
        }
    }

    return (
        <div>
            <div className='bg-gray-400 flex justify-around'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            Rating : {rating}
        </div>
    )
}

export default Rating


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// export default function Rating() {

//     const [rating, setRating] = useState(Math.round(Math.random(5) * 5))

//     return (
//         <Box sx={{ '& > legend': { mt: 2 } }}>
//             <Typography component="legend">Controlled</Typography>
//             <Rating
//                 name="simple-controlled"
//                 rating={rating}
//                 onChange={(event, newValue) => {
//                     setRating(newValue);
//                 }}
//             />
//             <Typography component="legend">Uncontrolled</Typography>
//             <Rating
//                 name="simple-uncontrolled"
//                 onChange={(event, newValue) => {
//                     console.log(newValue);
//                 }}
//                 defaultValue={2}
//             />
//             <Typography component="legend">Read only</Typography>
//             <Rating name="read-only" rating={rating} readOnly />
//             <Typography component="legend">Disabled</Typography>
//             <Rating name="disabled" rating={rating} disabled />
//             <Typography component="legend">No rating given</Typography>
//             <Rating name="no-rating" rating={null} />
//         </Box>
//     );
// }

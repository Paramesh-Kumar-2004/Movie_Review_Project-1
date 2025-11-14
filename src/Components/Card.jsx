import React, { useContext } from 'react'
import { Store } from './ContextAPI'



const Card = () => {

    const { movies } = useContext(Store);

    return (
        <>
            {movies.map((item, index) => (
                <div key={index} className="movieCard">
                    <img
                        src={item.primaryImage?.url}
                        alt={item.titleText?.text}
                        width={200}
                    />

                    <h2>{item.titleText?.text}</h2>
                    <p>Year: {item.releaseYear?.year}</p>
                </div>
            ))}
        </>
    )
}

export default Card;

import React, { useContext } from 'react'
import { Store } from './ContextAPI'
import Loader from './Loader';



const Card = () => {

    const { movies, loading, loadingMessage, setLoadingMessage } = useContext(Store);

    if (movies.length === 0) {
        return (
            <Loader loadingMessage={loadingMessage} />
        )
    }


    return (
        <>
            {movies.length > 0 && movies.map((item, index) => (
                <div key={index} className="movieCard">
                    {/* <h2>{item["#TITLE"]}</h2>
                    <p>Year: {item["#YEAR"]}</p>
                    <p>IMDB ID: {item["#IMDB_ID"]}</p>
                    <p>Actors: {item["#ACTORS"]}</p>
                    <p>Rank: {item["#RANK"]}</p> */}
                    <img src={item.primaryImage} alt={item["#TITLE"]} width={200} />
                </div>
            ))}
        </>
    )
}

export default Card;

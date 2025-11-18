import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieData = () => {

    const { id } = useParams()
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        GetMovie()
    }, [id])

    async function GetMovie() {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=747591dd&i=${id}`)
            console.log(response.data)
            setMovieData(response.data)
            console.log(movieData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>Movie : {movieData.length}</div>
        </>
    )
}

export default MovieData
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieData = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState([])
    console.log(("Id :", id))

    useEffect(()=>{
        GetMovie()
    })

    async function GetMovie() {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=747591dd&i=${id}`)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>

            </div>
        </>
    )
}

export default MovieData
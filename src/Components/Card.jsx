import React, { useContext } from 'react'
import { Store } from './ContextAPI'



const Card = () => {

    const { data } = useContext(Store)

    return (
        <div>
            Cards
        </div>
    )
}

export default Card
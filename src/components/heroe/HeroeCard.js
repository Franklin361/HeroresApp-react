import React from 'react'
import { Link } from 'react-router-dom'

import '../../index.css'
export const HeroeCard = ({
    id,
    superhero
}) => {
    return (
        <>
            <div className="carta">
                <div className="title"><p>{superhero}</p></div>
                <div className="imagen">
                    <img src={`./assets/heroes/heroes/${id}.jpg`} alt={superhero} className="rounded"/>
                </div>
                <div className="pie">
                    <Link to={`./heroe/${id}`}
                        className="btn boton w-100 py-3 mt-3"
                    >See!</Link>
                </div>
            </div>
        </>
    )
}

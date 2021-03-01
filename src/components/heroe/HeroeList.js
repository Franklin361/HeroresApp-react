import React, { useMemo } from 'react'

import {getHeroesByPublisher} from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

    const heroes=     useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row text-center">
            <div className="col-10 mx-auto">
                <div className="row d-flex justify-content-center">
                    {
                        heroes.map(heroe => ( 
                            <HeroeCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }      
                </div> 
            </div>
        </div>
    )
}

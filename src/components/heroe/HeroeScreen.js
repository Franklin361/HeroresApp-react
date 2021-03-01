import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'

import {getHeroesById} from '../../selectors/getHeroeById'

export const HeroeScreen = ({history}) => {

    const {id} = useParams();

    const heroe = useMemo(() => getHeroesById(id), [id]);


    if(!heroe){
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }=heroe;

    const handleBack = (e) => {
         history.goBack();
    };

    return (
        <div className=" row mt-3 ">
            <div className="col-10 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <img src={`../assets/heroes/heroes/${heroe.id}.jpg`} className="card-img-top rounded" alt={heroe.superhero} style={{height:100+'%'}}/>
                    </div>
                    <div className="col-8 border border-dark rounded px-4 pt-3 bg-dark text-white">
                        <p className="text-center display-3 fw-bold mb-5">--{superhero}--</p>
                        <p className="fs-4 text-secondary border rounded py-2 px-4" >Alter ego: <span className="fw-bold text-white">{alter_ego}</span> </p>
                        <p className="fs-4 text-secondary border rounded py-2 px-4" >First appearance: <span className="fw-bold text-white">{first_appearance}</span> </p>
                        <p className="fs-4 text-secondary border rounded py-2 px-4" >Publisher: <span className="fw-bold text-white">{publisher}</span> </p>
                        {
                            (alter_ego !==characters)
                            && <p className="fs-4 text-secondary border rounded py-2 px-4" >Characters: <span className="fw-bold text-white">{characters}</span> </p>
                        }

                        <div className="row">
                            <div className="col-5 mx-auto m-0 p-0">
                                <button 
                                    className="btn btn-warning fs-5 fw-bold w-100 m-0 p-0 py-3"
                                    onClick={handleBack}    
                                >Return </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

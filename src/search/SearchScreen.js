import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../hooks/useForm';
import { HeroeCard } from '../components/heroe/HeroeCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    
    const { q = '' }=queryString.parse(location.search);

    
    const [formValue, handleChange]=useForm({
        searchText: q
    })
    
    
    const {searchText} = formValue
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };
    
    const heroesList = useMemo(() => getHeroesByName(q), [q]);
    
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col text-center">
                    <h4 className="mb-4">Search a superhero</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-8 mx-auto d-flex">
                                <input 
                                    type="text" 
                                    className="border border-dark form-control me-5"  id="exampleFormControlInput1" 
                                    placeholder="Search"
                                    name="searchText"
                                    value={searchText}
                                    onChange={handleChange}
                                />
                                <button className="btn btn-outline-success  py-2">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-8 mx-auto">
                    <div className="row text-center d-flex justify-content-between">

                        {
                            (q==="")                            
                            && 
                                <p className="fs-3 mt-5 w-75 mx-auto fw-bold alert alert-info">Search a hero ...</p>
                        }

                        {
 
                            (q !==""  && heroesList.length === 0) 
                            ?
                                <p className="fs-3 mt-5 w-75 mx-auto alert alert-danger">There's no hero with: <span className="fw-bold"> {q} </span>  </p>
                            :
                                heroesList.map(heroe => (
                                    <HeroeCard 
                                        key={heroe.id}
                                        {...heroe}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

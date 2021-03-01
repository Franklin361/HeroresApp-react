import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { type } from '../../types/types';

export const NavBar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({
            type: type.logout
        });

        history.replace('/login')
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <p className="navbar-brand p-0 m-0 fw-bold text-secondary me-5" href="#">Heroes App</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex justify-content-md-between" id="navbarText">

                    <ul className="navbar-nav d-flex justify-content-md-center w-100">
                        <li className="nav-item mx-md-5">
                            <NavLink activeClassName="fw-bold text-white" exact className="nav-link" to="/marvel">Marvel</NavLink>
                        </li>
                        <li className="nav-item mx-md-5">
                            <NavLink activeClassName="fw-bold text-white" exact className="nav-link"  to="/dc">Dc</NavLink>
                        </li>
                        <li className="nav-item mx-md-5">
                            <NavLink activeClassName="fw-bold text-white" exact className="nav-link"  to="/search">Search</NavLink>
                        </li>
                    </ul>

                    <span className="navbar-text text-center w-50 d-flex justify-content-md-center align-items-center">
                        <span className="me-5 fw-bold text-info d-sm-none d-md-block" >{ name }</span>
                        <button 
                            className="btn btn-danger"
                            onClick={handleLogout}
                        >Log out</button>
                    </span>

                </div>
            </div>
        </nav>
    )
}

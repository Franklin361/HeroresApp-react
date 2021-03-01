import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { type } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const path = localStorage.getItem('path') || '/'

    const handleLogin = () => {

        dispatch({
            type: type.login,
            payload: {name:'Franko'}
        })

         history.replace(path)
    };

    return (
        <div className="row">
            <div className="col-5 mx-auto bg-dark rounded my-5">
                <div className="row">
                    <div className="col mt-5">
                        <p className="p-0 m-0 text-center text-secondary display-1"> Login</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mx-auto text-center my-5">
                        <button
                            className="btn w-100 btn-primary py-3"
                            onClick={handleLogin}

                        >Open app</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

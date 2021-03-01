import { type } from "../types/types";

export const authReducer = (state={}, action) => {
    
    switch (action.type) {
        case type.login:
            return{
                ...action.payload,
                logged: true
            }
        case type.logout:
            return{
                logged: false
            }
        default:
            return state;
    }

}

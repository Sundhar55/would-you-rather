//inside src/reducers/users.js
import {
    RECEIVE_USERS,   
    SET_AUTHED_USER 
} from '../constants/constants'

export function users(state={},action){
    switch (action.type){
        case RECEIVE_USERS :
            return{
                ...state,
                ...action.users
            }
        default :
            return state
    }
}

export function LoggedInUser (state = null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id
        default :
            return state
    }
}
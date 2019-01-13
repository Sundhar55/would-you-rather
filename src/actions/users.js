//inside src/actions/users.js
import {
    RECEIVE_USERS,
    SET_AUTHED_USER
} from '../constants/constants'

export function receive_users(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

export function setLoginUser(id){
    return {
        type : SET_AUTHED_USER,
        id
    }
}


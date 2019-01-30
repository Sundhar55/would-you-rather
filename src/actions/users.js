//inside src/actions/users.js
import {
    RECEIVE_USERS,
    SET_AUTHED_USER, SAVE_USER_ANSWER,
    LOG_IN_USER
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

export function LoginInUser(id){
    return {
        type : LOG_IN_USER,
        id
    }
}

export function saveUserAnswer(user,qid,answer){
    return {
        type: SAVE_USER_ANSWER,
        qid, user, answer
    }
}

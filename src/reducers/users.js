//inside src/reducers/users.js
import {
    RECEIVE_USERS,   
    SET_AUTHED_USER, 
    SAVE_USER_ANSWER,
    LOG_IN_USER
} from '../constants/constants'

export function users(state={},action){
    switch (action.type){
        case RECEIVE_USERS :
            return{
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER :
            return{
                ...state,
                [action.user]:{
                    ...state[action.user],
                    answers:{
                        ...state[action.user].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default :
            return state
    }
}

export function LoggedInUser (state = null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id
        case LOG_IN_USER:
            return action.id
        default :
            return state
    }
}
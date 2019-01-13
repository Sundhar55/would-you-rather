//inside src/actions/shared.js
import {getInitialData} from '../utils/api'
import {receiveQuestions} from '../actions/questions'
import {receive_users} from '../actions/users'
import {setLoginUser} from '../actions/users'

const AUTHED_ID = 'johndoe'

export function handleInitialData(){
    return (dispatch)=>{
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(receiveQuestions(questions))
                dispatch(receive_users(users))
                dispatch(setLoginUser(AUTHED_ID))
            })
    }
}
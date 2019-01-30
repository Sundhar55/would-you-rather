//inside src/actions/shared.js
import {getInitialData,logInUser} from '../utils/api'
import {receiveQuestions} from '../actions/questions'
import {receive_users} from '../actions/users'
import {setLoginUser} from '../actions/users'
import Login from '../components/Login';


export function handleInitialData(){
    return (dispatch)=>{
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(receiveQuestions(questions))
                dispatch(receive_users(users))
            })
    }
}

export function handleLogin(id){
    console.log('from logout')
    return (dispatch)=>{
        return logInUser(id)
            .then((loggedUser)=>{
                console.log(loggedUser)
                dispatch(setLoginUser(loggedUser.id))
            })
    }

}
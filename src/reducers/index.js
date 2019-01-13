//inside src/reducers/index.js
import {combineReducers} from 'redux'
import questions from './questions'
import {users,LoggedInUser} from './users'

export default combineReducers({
    LoggedInUser,
    users,
    questions
})
//inside src/reducers/questions.js
import {
    RECEIVE_QUESTIONS,    
    ADD_QUESTION
} from '../constants/constants'

export default function users(state={},action){
    switch (action.type){
        case RECEIVE_QUESTIONS :
            return{
                ...state,
                ...action.questions
            }
        case ADD_QUESTION :

        const {question}=action.question
            return{
                ...state,
                 [action.question.id]:action.question
            }
        default :
            return state
    }

    
}
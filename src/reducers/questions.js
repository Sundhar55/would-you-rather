//inside src/reducers/questions.js
import {
    RECEIVE_QUESTIONS,    
    ADD_QUESTION,
    SAVE_QUES_ANSWER
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
        
        case SAVE_QUES_ANSWER :
            const qid= action.qid
            const user=action.LoggedInUser
            return{
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[qid][user],
                        votes: state[qid][action.answer].votes.concat([user]),
                        text: state[qid][action.answer].text
                    }

                }
                
            }

        default :
            return state
    }

    
}
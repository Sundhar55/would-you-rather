//inside src/actions/questions.js
import {RECEIVE_QUESTIONS,ADD_QUESTION} from '../constants/constants'
import { saveQuestion } from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading'
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
function addQuestion(question,questions){
    return{
        type: ADD_QUESTION,
        question,
        questions
    }
}

export function handleAddQuestion(question){
    console.log('in action hq', question)

    return(dispatch,getState) => {
        const {users,questions} = getState()
        console.log('getting state',questions)

        dispatch(showLoading())

        return saveQuestion(question)
            .then((quest)=>{
                console.log('after save in action hq', quest)
                dispatch(addQuestion(quest,questions))
            })
            .then(()=> dispatch(hideLoading()))
            
    }
}
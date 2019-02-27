//inside src/actions/questions.js
import {RECEIVE_QUESTIONS,ADD_QUESTION,SAVE_QUES_ANSWER} from '../constants/constants'
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading'
import {saveUserAnswer} from './users'
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

function saveQandA(LoggedInUser,qid,answer){
    return{
        type: SAVE_QUES_ANSWER,
        LoggedInUser,qid,answer,
        
    }
}

export function handleAddQuestion(question){
    return(dispatch,getState) => {
        const {questions} = getState()
        
        dispatch(showLoading())

        return saveQuestion(question)
            .then((quest)=>{
                dispatch(addQuestion(quest,questions))
            })
            .then(()=> dispatch(hideLoading()))
            
    }
}

export function handleSaveQstnAndAnswer(qid,answer){

    return(dispatch,getState) =>{
        const {LoggedInUser} = getState()
        dispatch(showLoading())

        return saveQuestionAnswer(LoggedInUser,qid, answer)
            .then((questions,users)=>{
                dispatch(saveQandA(LoggedInUser,qid,answer))
                dispatch(saveUserAnswer(LoggedInUser,qid,answer))
            })
    }
}
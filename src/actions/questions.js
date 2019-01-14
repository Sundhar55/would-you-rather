//inside src/actions/questions.js
import {RECEIVE_QUESTIONS,ADD_QUESTION,SAVE_QUES_ANSWER,SAVE_USER_ANSWER} from '../constants/constants'
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
    console.log('in ac ', qid,answer)
    return{
        type: SAVE_QUES_ANSWER,
        LoggedInUser,qid,answer,
        
    }
}

export function handleAddQuestion(question){
    console.log('in action hq', question)

    return(dispatch,getState) => {
        const {users,questions} = getState()
        
        dispatch(showLoading())

        return saveQuestion(question)
            .then((quest)=>{
                console.log('after save in action hq', quest)
                dispatch(addQuestion(quest,questions))
            })
            .then(()=> dispatch(hideLoading()))
            
    }
}

export function handleSaveQstnAndAnswer(qid,answer){
    console.log('in handle saveQstn&Ans',qid,answer)

    return(dispatch,getState) =>{
        const {users,questions,LoggedInUser} = getState()
        console.log(LoggedInUser)
        dispatch(showLoading())

        return saveQuestionAnswer(LoggedInUser,qid, answer)
            .then((questions,users)=>{
                console.log('after api call', questions,users)
                dispatch(saveQandA(LoggedInUser,qid,answer))
                dispatch(saveUserAnswer(LoggedInUser,qid,answer))
            })
    }
}
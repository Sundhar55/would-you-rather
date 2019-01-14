//inside src/api.js

import {
    _getUsers,
    _getQuestions,
    formatQuestion,
    _saveQuestion,
    _saveQuestionAnswer

} from './_DATA.js'

export function getInitialData(){
    return Promise.all([
            _getUsers(),
            _getQuestions()
        ]).then(([users,questions]) =>({
            users,
            questions
        }))
}

export function saveQuestion(question){
    return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser,qid,answer){
    console.log('in api save QA',qid,authedUser,answer)
    return _saveQuestionAnswer({authedUser,qid,answer})
    // return Promise([
    //     _saveQuestionAnswer(questionId,authedUser,answer)
    // ]).then(([users,questions])=>({
    //     users,
    //     questions
    // }))
}



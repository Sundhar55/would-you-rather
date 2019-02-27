//inside src/api.js

import {
    _getUsers,
    _getQuestions,
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
    return _saveQuestionAnswer({authedUser,qid,answer})
    
}




export function logInUser(userid){
    return new Promise((res, rej) => {
        res({id : userid})
      })
}



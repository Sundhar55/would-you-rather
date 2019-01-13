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
    console.log('in api')
    return _saveQuestion(question)
}



//inside src/components/Dashboard.js
import React from 'react'
import {connect} from 'react-redux'
import { users } from '../reducers/users';
import Poll from './Poll'
import LoginModal from './LoginModal';
import {Button,Modal} from 'react-bootstrap'
import ReactModalLogin from 'react-modal-login'


class Dashboard extends React.Component{
    state = {
        modal : false
    }
    showModal(){
        this.setState({modal:true})
    }
    render(){
        const {user,questions} = this.props
        console.log('dashboard',this.props)
        const answers = user !== undefined 
                     ? user.answers
                     : {}
        console.log('DB', user, questions)
        const answeredIds = Object.keys(answers).map((key=>(key) ))
        console.log('answList', answeredIds)
        //const answerKeys = Object.keys(this.props.user.answers) 
        const answeredPolls =  Object.keys(answers)
    return(
            <div>
                {user !== undefined && (
                    <div></div>
                /*<ul className='dashboard-list'>
                    {
                       Object.keys(answers).map((key)=>{
                          return <li key={key}>{answers[key]}</li>
                       })
                    }
                    
                </ul> */
                )}
                
                <ul className='questionsList'>
                    {
                       Object.keys(questions).map((key)=>{
                            return (!(key in answers) && 
                            ( 
                                
                                <li className='listitem' key={key}>
                                    <Poll id={key}  
                                        />
                                    
                                
                                </li>
                            ) )
                        /*   return <li key={key}>
                               <span>{questions[key].author}</span>
                               <div className = "option">
                                   <span>{questions[key].optionOne.text}</span>
                                   <span> votes :  {questions[key].optionOne.votes.length}</span>
                                </div>
                                <div className = "option">
                                   <span>{questions[key].optionTwo.text}</span>
                                </div>
                               <Poll />
                           </li>
                        */
                       })
                    }
                </ul>
                    <button onClick={(e)=>this.showModal(e)}>show modal</button>
                <div className="modal-container" style={{height:200}}>
                    <Modal animation={this.state.modal}
                        show={this.state.modal} aria-labelledby="contained-modal-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                CM
                            </Modal.Title>
                        </Modal.Header>
                    </Modal>
                    
                </div>
            </div>
      
            
        )
    }
}
function mapStateToProps({questions,users}){
    return{
        questions: questions,
        user: users['johndoe']
    }
}
export default connect(mapStateToProps)(Dashboard)
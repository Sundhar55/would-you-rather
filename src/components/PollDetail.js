//src/components/PollDetail.js

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleSaveQstnAndAnswer} from '../actions/questions'
import WouldYou from './WouldYou'
import Results from './Results';

class PollDetail extends React.Component{

    state ={
        selectedOption : 'optionOne',
        qid : this.props.match.params.id,
        submit : false,
        showResult : false
    }
    
    handleOptionChange=(e)=>{
        const selected = e.target.value
        this.setState({selectedOption : selected})

    }

    handleFormSubmit=(e)=>{
        e.preventDefault()
        const dispatch = this.props.dispatch
        dispatch(handleSaveQstnAndAnswer(this.state.qid,this.state.selectedOption))
        this.setState({submit : true})
    }

    render(){
        const {users,questions,userId} = this.props
        const id1 = this.state.qid

        let question={}
        if(id1 !== undefined){
            question = questions[id1]
        }

        var imgSrc = "/images/tyler.jpg"
        
        if( typeof(question)  !== undefined ){
            if(question.author === "sarahedo"){
                imgSrc = "/images/sarah2.jpg"
            }
            if(question.author === "johndoe"){
                imgSrc="/images/beard.jpg"
            }
        }

        //setting up validation to show result or polling option
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        let showResult = false 
        if(question.optionOne.votes.length > 0 && question.optionOne.votes.includes(userId)){
            showResult = true 
        }else if(question.optionTwo.votes.length > 0 && question.optionTwo.votes.includes(userId)){
             showResult = true  
        }
        
        return(
            //<Link className="poll" to={`/questions/${id1}`}>
                <div>
                {(!showResult && !this.state.submit) && (
                    <div className="container">
                    <div className='polldetail' >
                        <h4 className="center">{question.author} asks: </h4>
                        <img src ={imgSrc}
                        alt={question.author} className='avatar'/>
                        <div className="poll-info">
                            <form onSubmit={this.handleFormSubmit}>
                                <WouldYou />
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="optionOne"
                                        checked={this.state.selectedOption === "optionOne"}
                                        onChange={this.handleOptionChange}
                                        /> {question.optionOne.text}
                                    </label>
                                </div>
                                <div>
                                    <label className="label">OR</label>
                                </div>
                                
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="optionTwo"
                                        checked={this.state.selectedOption === "optionTwo"}
                                        onChange={this.handleOptionChange}
                                        /> {question.optionTwo.text}
                                    </label>
                                </div>
                                <button className='btn btn-secondary' type='submit' value="Submit">Submit</button>              
                            
                            </form>
                            
                        </div>
                    </div>
                </div>
                )}
                
                {(this.state.submit || showResult) &&(
                    <Results qid={this.state.qid} author={question.author} LoggedInUser={this.props.userId}
                    image = {imgSrc}/>
                )}
                
                </div>
            //</Link>
            
        )

    }
}

function mapStateToProps({users,questions,LoggedInUser}){
    return{
        users,
        questions,
        userId : LoggedInUser
        
    }
}

export default connect(mapStateToProps)(PollDetail)
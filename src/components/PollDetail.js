//src/components/PollDetail.js

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleSaveQstnAndAnswer} from '../actions/questions'
import WouldYou from './WouldYou'

class PollDetail extends React.Component{

    state ={
        selectedOption : 'optionOne',
        qid : this.props.match.params.id
    }
    
    handleOptionChange=(e)=>{
        const selected = e.target.value
        this.setState({selectedOption : selected})

    }

    handleFormSubmit=(e)=>{
        e.preventDefault()
        console.log('state ', this.state.selectedOption, this.state.qid)
        const dispatch = this.props.dispatch
        dispatch(handleSaveQstnAndAnswer(this.state.qid,this.state.selectedOption))
        
    }

    render(){
        const {users,questions,userId} = this.props
        console.log('polldetail componenet ', this.props)
        const id1 = this.state.qid

        let question={}
        if(id1 !== undefined){
            question = questions[id1]
        }

        var imgSrc = "/images/tyler.jpg"

        if(question.author === "sarahedo"){
            imgSrc = "/images/sarah.jpg"
        }
        
        return(
            //<Link className="poll" to={`/questions/${id1}`}>
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
                            <button className='btn' type='submit' value="Submit">Submit</button>              
                        
                        </form>
                        
                    </div>
                </div>
            //</Link>
            
        )

    }
}

function mapStateToProps({users,questions,LoggedInUser}){
    console.log('qqq', questions )
    return{
        users,
        questions,
        userId : LoggedInUser
        
    }
}

export default connect(mapStateToProps)(PollDetail)
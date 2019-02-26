//src/components/Poll.js
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import WouldYou from './WouldYou'

class Poll extends React.Component{
    submitPoll=(e)=>{
        e.preventDefault()
        alert('sub')
    }
    handleClick =(e,id)=>{
        this.props.history.push(`/questions/${id}`)
        
    }
    render(){
        const id1 = this.props.match.params.id
        let question = {}
        let id = this.props.id
        if(id1 !== undefined){
            question = this.props.questions[id1]
        }else{
            question = this.props.questions[id]
        }
        
        var imgSrc = "/images/tyler.jpg"
        var authorName = ''
        if(question.author === "sarahedo"){
            imgSrc = "/images/sarah2.jpg"
            authorName = this.props.users[question.author]["name"]
        }else if (question.author === "johndoe"){
            imgSrc="/images/beard.jpg"
            authorName = this.props.users[question.author]["name"]
        }else{
            authorName = this.props.users[question.author]["name"]
        }
        
        return(
            <div className="poll">
                <img src ={imgSrc}
                    alt={question.author} className='avatar'/>
                    
                <div className="poll-info">
                    <h4 className="center">{authorName} asks: </h4>
                    <WouldYou />
                    <div className="">
                        <div className = "center">
                            <label className="center">{question.optionOne.text}...</label>
                            
                        </div>
                        <div className = "center">
                            <span>{question.optionTwo.text}...</span>
                            
                        </div>
                        {id1 !== undefined 
                        ?  <button className ="btn btn-primary" id="submitPoll" onClick={(e)=>this.submitPoll(e)}>Submit</button>                          
                        :  <button className ="btn btn-primary" id="viewPoll" onClick={(e)=>this.handleClick(e,question.id)}>view poll</button>
                        }
                    </div>
                </div>
            </div>
        
        )
    }
}
function mapStateToProps({users,questions,LoggedInUser},{id}){
    return{
        questions : questions,
        id : id,
        userId : LoggedInUser,
        users : users

    }

}

export default withRouter(connect(mapStateToProps)(Poll))
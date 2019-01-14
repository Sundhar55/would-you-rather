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
        console.log('props in poll ',this.props)
        const id1 = this.props.match.params.id
        let question = {}
        let id = this.props.id
        if(id1 !== undefined){
            question = this.props.questions[id1]
        }else{
            question = this.props.questions[id]
        }
        console.log('id in oll ' , id1)
        
        var imgSrc = "/images/tyler.jpg"
        if(question.author === "sarahedo"){
            imgSrc = "/images/sarah.jpg"
        }
        console.log("question in poll s", question)
        return(
            <div className="poll">
                <img src ={imgSrc}
                    alt={question.author} className='avatar'/>
                    
                <div className="poll-info">
                    <h4 className="center">{question.author} asks: </h4>
                    <WouldYou />
                    <div className="">
                        <div className = "center">
                            <label className="center">{question.optionOne.text}...</label>
                            
                        </div>
                        <div className = "center">
                            <span>{question.optionTwo.text}...</span>
                            
                        </div>
                        {id1 !== undefined 
                        ?  <button className ="btn" id="submitPoll" onClick={(e)=>this.submitPoll(e)}>Submit</button>                          
                        :  <button className ="btn" id="viewPoll" onClick={(e)=>this.handleClick(e,question.id)}>view poll</button>
                        }
                    </div>
                </div>
            </div>
        
        )
    }
}
function mapStateToProps({users,questions,LoggedInUser},{id}){
    console.log('id is ', id, questions)
    console.log('userId ', LoggedInUser)
    return{
        questions : questions,
        id : id,
        userId : LoggedInUser

    }

}

export default withRouter(connect(mapStateToProps)(Poll))
//src/components/PollDetail.js

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class PollDetail extends React.Component{

    state ={
        selectedOption : 'option1'
    }
    
    handleOptionChange=(e)=>{
        const selected = e.target.value
        this.setState({selectedOption : selected})

    }

    handleFormSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.selectedOption)
       
    }

    render(){
        const {users,questions,userId} = this.props
        console.log('polldetail componenet ', this.props)
        const id1 = this.props.match.params.id

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
                <div className='center' >
                    <h4 className="center">{question.author} asks: </h4>
                    <img src ={imgSrc}
                    alt={question.author} className='avatar'/>
                    <div className="poll-info">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1"
                                       checked={this.state.selectedOption === "option1"}
                                       onChange={this.handleOptionChange}
                                    /> {question.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label className="label">OR</label>
                            </div>
                            
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option2"
                                       checked={this.state.selectedOption === "option2"}
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
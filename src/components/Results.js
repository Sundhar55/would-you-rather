//src/components/Results.js
import React from 'react'
import {connect} from 'react-redux'
import {ProgressBar} from 'react-bootstrap'
import {Badge} from 'reactstrap'
import Dashboard from './Dashboard';
class Results extends React.Component{
    render(){
        const {qid,authorName,author,LoggedInUser,image,question}=this.props
        console.log('RESULTS IS ',this.props)
        
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        let optiononeBadge = false 
        if(optionOneVotes > 0 && question.optionOne.votes.includes(LoggedInUser)){
            optiononeBadge = true
        }else if(optionTwoVotes > 0 && question.optionTwo.votes.includes(LoggedInUser)){
                optiononeBadge = false
        }
        const percentage1 = Math.round((optionOneVotes/3) * 100)
        const percentage2 = Math.round((optionTwoVotes/3) * 100)
        
        if(LoggedInUser != null)
        {
            return(
                <div className="result">
                    {/*<div className="polldetail"> */}
                        <div className="col-md-14">
                            <div className="header-row">
                                <h5>Asked by {authorName} </h5>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-3 float-center">
                                    <img src ={image}
                                    alt={author} className='result-img'/>
                                </div>
                                <div className="col-md-8">
                                    <h3>Results</h3>
                                    <div className="option">
                                        Would you rather {this.props.question.optionOne.text}
                                        {optiononeBadge && <span> <Badge pill color="warning">your vote</Badge></span>}
                                        <ProgressBar bsStyle="info" now={percentage1} label={`${percentage1}%`} />
                                        <p className='text'>{optionOneVotes} out of 3 votes</p>
                                    </div>
                                    <div className="option">
                                        Would you rather {this.props.question.optionTwo.text}
                                        {!optiononeBadge && <span> <Badge pill color="warning">your vote</Badge></span>}
                                        <ProgressBar bsStyle="info" now={percentage2} label={`${percentage2}%`} />
                                        <p className="p-center">{optionTwoVotes} out of 3 votes </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }else{
            return (<Dashboard />)
        }
    }
}
function mapStateToProps({questions},{qid}){
    console.log('qqq', questions )
    return{
        question : questions[qid]
        
        
    }
}

export default connect(mapStateToProps)(Results)
//src/components/Results.js
import React from 'react'
import {connect} from 'react-redux'
import {ProgressBar} from 'react-bootstrap'
import {Badge} from 'reactstrap'
class Results extends React.Component{
    render(){
        console.log('RESULTS IS ',this.props)
        const {qid,author,LoggedInUser,image,question}=this.props
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
        return(
            <div className="container result">
                {/*<div className="polldetail"> */}
                    <div className="col-md-9">
                        <div className="header-row">
                            <h5>Asked by {author} </h5>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3 float-left">
                                <img src ={image}
                                alt={author} className='avatar'/>
                            </div>
                            <div className="col-md-6">
                                <h3>Results</h3>
                                <div className="option">
                                    Would you rather {this.props.question.optionOne.text}
                                    {optiononeBadge && <span> <Badge pill color="warning">your vote</Badge></span>}
                                    <ProgressBar bsStyle="info" now={percentage1} label={`${percentage1}%`} />
                                    {optionOneVotes} out of 3 votes
                                </div>
                                <div className="option">
                                    Would you rather {this.props.question.optionTwo.text}
                                    {!optiononeBadge && <span> <Badge pill color="warning">your vote</Badge></span>}
                                    <ProgressBar bsStyle="info" now={percentage2} label={`${percentage2}%`} />
                                    {optionTwoVotes} out of 3 votes
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
function mapStateToProps({questions},{qid}){
    console.log('qqq', questions )
    return{
        question : questions[qid]
        
        
    }
}

export default connect(mapStateToProps)(Results)
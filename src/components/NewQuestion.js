//src/components/NewQuestion.js
import React from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/_DATA'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';

class NewQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            option1 : '',
            option2 : '',
            toHome : false
        }
    }
    handleOption2Change = (e)=>{
        e.preventDefault()
        this.setState({option2 : e.target.value})

    }
    handleOption1Change = (e) =>{
        e.preventDefault()
        this.setState({option1 : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const options = this.state;
        
        const question = formatQuestion(options.option1,options.option2,'johndoe')
        console.log(question)
        const dispatch= this.props.dispatch
        dispatch(handleAddQuestion(question))
        console.log('after dipacth')
        this.setState({option1: '' , option2 : '', toHome : true})
        
        
    }
    render(){
        const toHome = this.state.toHome
        console.log('newqstion comp', this.props.LoggedInUser)
        if(toHome){
            return <Redirect to='/' />
        }
        if(this.props.LoggedInUser != null){
        return(
                this.props.LoggedInUser === null 
                ? alert('kindly login2')
                :   <div>
                        <h3 className='center'>Create your new question</h3>
                        <div className='question'>
                            <label > Complete the question :</label>
                            
                            <form className='new-question' action="" onSubmit={this.handleSubmit}>
                            <h4 >Would you rather...</h4>   
                                <input type="text" name="optionA" 
                                    value={this.state.option1}
                                    placeholder="optionA text"
                                    onChange={this.handleOption1Change}
                                    id="optionA"/>
                                        OR
                                <input type="text" name="optionB" 
                                    value={this.state.option2}
                                    placeholder="optionB text"
                                    onChange={this.handleOption2Change}
                                    id="optionB"/>
                                <button className='btn' type='submit' value="Submit">submit</button>
                            </form>
                        
                        </div>
                    </div>
            )
        }else{
            return(
            <Dashboard />)
        }
        
    }
}
function mapStateToProps({LoggedInUser}){
    return {
      LoggedInUser:  LoggedInUser
    }
}
export default connect(mapStateToProps)(NewQuestion)
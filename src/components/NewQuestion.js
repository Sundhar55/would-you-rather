//src/components/NewQuestion.js
import React from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/_DATA'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import {Card} from 'semantic-ui-react'

class NewQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            option1 : '',
            option2 : '',
            toHome : false,
            error : false
        }
    }
    handleOption2Change = (e)=>{
        e.preventDefault()
        this.setState({option2 : e.target.value, error : false})

    }
    handleOption1Change = (e) =>{
        e.preventDefault()
        this.setState({option1 : e.target.value , error: false})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const options = this.state;
        if(options.option1 === "" || options.option2 === ""){
            
        }
        const question = formatQuestion(options.option1,options.option2,this.props.LoggedInUser)
        if(options.option1 === "" || options.option2 === ""){
            this.setState({error : true})
            return
        }else{
            const dispatch= this.props.dispatch
            dispatch(handleAddQuestion(question))
            this.setState({option1: '' , option2 : '', toHome : true})
        }
        
        
        
    }
    render(){
        const toHome = this.state.toHome
        if(toHome){
            return <Redirect to='/' />
        }
        if(this.props.LoggedInUser != null){
        return(
                this.props.LoggedInUser === null 
                ? alert('kindly login')
                :   
                <div className="container">
                        
                        <div className='question'>
                            <div className=""><h3 className='center'>Create your new question</h3></div>
                            <label className="form-label" > Complete the question :</label>
                            <form className='new-question' action="" onSubmit={this.handleSubmit}>
                            <h4 >Would you rather...</h4>   
                                <input type="text" name="optionA" 
                                    value={this.state.option1}
                                    placeholder="optionA text"
                                    onChange={this.handleOption1Change}
                                    id="optionA"/>
                                      <span className="center">OR</span>  
                                <input type="text" name="optionB" 
                                    value={this.state.option2}
                                    placeholder="optionB text"
                                    onChange={this.handleOption2Change}
                                    id="optionB"/>
                                    {this.state.error && <div className="alert alert-danger" role="alert">
                                    kindly fill all the input fields.
                                    </div>
                                   }
                                <button className='btn btn-info' type='submit' value="Submit">submit</button>
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
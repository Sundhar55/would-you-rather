//inside src/components/Nav.js
import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import { handleLogin } from '../actions/shared'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleSubmit(e){
        e.preventDefault()
        const loginFunc = this.props.handleLogin
        loginFunc(null)        
    }
    render(){
        const user = this.props.LoggedInUser
        const name = this.props.name
        const oddEvent = (match, location) => {
            if (!match) {
              return false
            }
            const eventID = parseInt(match.params.eventID)
            return !isNaN(eventID) && eventID % 2 === 1
          }
        console.log('user', user)
        return(
                <nav className='nav navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="collapse navbar-collapse" 
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbaritem">
                            <NavLink to='/' exact  activeStyle={{fontWeight:"bold"}} activeClassName='active' >Home</NavLink>
                        </li>
            
                        <li className="navbaritem" >
                            <NavLink to='/add' activeStyle={{fontWeight:"bold"}} activeClassName='active' >New Question</NavLink>
                        </li>
                        <li className="navbaritem">
                            <NavLink to='/leaderboard' activeStyle={{fontWeight:"bold"}} activeClassName='active' >LeaderBoard</NavLink>
                        </li>
                    </ul>
                    {user !== null &&
                        <form className="form-inline  my-2 my-lg-0"  onSubmit={this.handleSubmit}>
                            <label className="navbar-brand">Hello : {user}</label>
                            <button className="btn btn-warning btn-sm my-2 my-sm-0" type="submit">Logout</button>
                        </form>
                     }
                    
                </div>
                
            </nav>
            
        )
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        handleLogin : handleLogin
    },dispatch)
   
}
export default connect(null, mapDispatchToProps)(Navigation)
//inside src/components/Nav.js
import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import { handleLogin } from '../actions/shared'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
//import {Act}

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleSubmit(e){
        e.preventDefault()
        console.log('in handlesubmit of logoit ', this.props)
        const loginFunc = this.props.handleLogin
        //dispatch(handleLogin(null))
        loginFunc(null)
       // this.props.history.push("/leaderboard")
        
    }
    render(){
        const user = this.props.LoggedInUser
        console.log('lin user is', user, this.props)
        return(
        
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="collapse navbar-collapse" 
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbaritem">
                            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                        </li>
                        <li className="navbaritem" >
                            <NavLink to='/newquestion' activeClassName='active'>New Question</NavLink>
                        </li>
                        <li className="navbaritem">
                            <NavLink to='/leaderboard' activeClassName='active'>LeaderBoard</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline  my-2 my-lg-0"  onSubmit={this.handleSubmit}>
                        <label className="navbar-brand">Signed in as : {user}</label>
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-info btn-sm my-2 my-sm-0" type="submit">Logout</button>
                    </form>
                </div>
                
            </nav>
            // <nav className='navbar navbar-expand-lg navbar-light bg-light'>
             /* <ul>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/newquestion' activeClassName='active'>New Question</NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>LeaderBoard</NavLink>
                        </li>
                    </ul> */
        )
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        handleLogin : handleLogin
    },dispatch)
    //return Object.assign({dispatch: dispatch},bindActionCreators(ActionCreators, dispatch))
}
export default connect(null, mapDispatchToProps)(Nav)
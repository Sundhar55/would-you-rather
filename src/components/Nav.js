//inside src/components/Nav.js
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav(){
    return(
        
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/newquestion' activeClassName='active'>New Question</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>LeaderBoard</NavLink>
                    </li>
                </ul>
                <form className="form-inline  my-2 my-lg-0">
                    <label className="navbar-brand">User</label>
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
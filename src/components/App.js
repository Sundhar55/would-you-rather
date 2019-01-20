//inside src/components/app.js
import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import PollDetail from './PollDetail';
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading';
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log('user is' , this.props)
    return (
      <BrowserRouter>
        <Fragment>
            <Nav />
            <div className="container">
                  
                  { this.props.user !== undefined && 
                  
                  (<div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/newquestion' component={NewQuestion} />
                    {/*<Route path='/questions/:id' render={(props)=> <Poll {...props} id={'8xf0y6ziyjabvozdd253nd'} />} /> */}
                    <Route path='/questions/:id' component={PollDetail} />
                  </div>)
                  /* <Dashboard user = {this.props.user} />) */
                  
                  }
              </div>
            
            </Fragment>
      </BrowserRouter>
        
      

      
    );
  }
}

function mapStateToProps({users, questions,LoggedInUser}){
  return {
    user : users['johndoe'] ,
    
  }
}
export default connect(mapStateToProps)(App);
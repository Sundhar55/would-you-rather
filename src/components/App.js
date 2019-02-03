//inside src/components/app.js
import React, { Component, Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import Navigation from './Nav'
import PollDetail from './PollDetail'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
        <Navigation LoggedInUser={this.props.LoggedInUser} />
            
            <div className="container">
            
                  {
                    (<div>
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                      <Route path='/newquestion' component={NewQuestion} />
                      <Route path='/questions/:id' component={PollDetail} />
                    </div>)
                    
                  }

              </div>
            </Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({users, questions,LoggedInUser}){
  return {
    LoggedInUser : LoggedInUser,
    
  }
}
export default connect(mapStateToProps)(App);
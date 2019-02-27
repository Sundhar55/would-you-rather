//src/components/LeaderBoard.js
import React from 'react'
import {connect} from 'react-redux'
import {Grid} from 'react-bootstrap'
import Scorecard from './Scorecard'
import Dashboard from './Dashboard';
class LeaderBoard extends React.Component{
    render(){
        const users = this.props.users
        const userKeys = Object.keys(this.props.users)

        userKeys.forEach((value,index)=> {
            const tot = Object.keys(users[value].answers).length + users[value].questions.length
            users[value]["total"] = tot
            
        })

        let sortedUsers = userKeys.map(i => users[i])
        sortedUsers.sort((a,b)=> b.total - a.total)
        let rank=0
        sortedUsers.map(item => item.rank = ++rank )
        if(this.props.LoggedInUser != null){
            return(
            <div>
                <Grid>
                    {
                        sortedUsers.map(item => (<Scorecard key={item.id} answered = {Object.keys(item.answers).length}
                            questions = {item.questions.length} author = {item.name} rank={item.rank} authorId={item.id}
                        />))
                    }
                </Grid>
            </div>
            )
        }else{
            return(
                <Dashboard />
            )
        }  
         
    }
}

function mapStateToProps({users, LoggedInUser}){
    return {
        users : users,
        LoggedInUser : LoggedInUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)
//src/components/LeaderBoard.js
import React from 'react'
import {connect} from 'react-redux'
import {Well,Grid,Row,Col,Media} from 'react-bootstrap'
//import {Card,CardTitle, CardImg, CardText,CardBody,CardSubTitle} from 'reactstrap'
import LoginModal from './LoginModal';
import Scorecard from './Scorecard'
class LeaderBoard extends React.Component{
    render(){
        console.log('users in lb ', this.props.users)
        const users = this.props.users
        const userKeys = Object.keys(this.props.users)
        const badge = true
        const total =userKeys.map(item => ( Object.keys(users[item].answers).length + users[item].questions.length ))
        console.log(userKeys, 'total is' , total )
        const lastPosition = Object.keys(users)

        userKeys.forEach((value,index)=> {
            const tot = Object.keys(users[value].answers).length + users[value].questions.length
            console.log(index ,'is index and user is ', tot , value)
            users[value]["total"] = tot
            
        })

        let sortedUsers = userKeys.map(i => users[i])
        sortedUsers.sort((a,b)=> b.total - a.total)


        //const sob = Object.keys(users).map( k=>  users[k]).sort( (a,b) => (a.total > b.total)

        //console.log('after sort' , sob)

        
        
        //users.sort((a,b)=> users[a].tot - users[b].tot )
        console.log('sorted users are ', sortedUsers)
        return(
            <div>
            <Grid>

           
            
                {
                    sortedUsers.map(item => (<Scorecard key={item.id} answered = {Object.keys(item.answers).length}
                        questions = {item.questions.length} author = {item.name}
                     />))
                }
                
                
                {/*<div className="polldetail">         */}          
                {/*    <div className="row col-md-9">
                        <div className=" float-left">
                            <img src ="/images/sarah.jpg"
                            alt="sarahedo" className='avatar'/>
                        </div>
                        
                        <div className="col-md-8">
                                <h3>Author</h3>
                                <div className="row">  Anwered Questions
                                    <div className="numebr">8</div>
                                    <span className="number"> 8</span>
                                </div>
                                <div className="row">  Created Questions</div>
                        </div>
                        
                        <div className="col-md-2 float-right">
                            123
                        </div>
                    </div>
                    */}
            
            
            </Grid>
            
            <LoginModal users={this.props.users}/>
            </div>
                   /*  <Card>
                        <CardTitle>Author</CardTitle>
                        <CardBody>
                            Answerd Qstns
                        </CardBody>
                    </Card>
                    */

            
        )
    }
}

function mapStateToProps({users}){
    return {
        users : users
    }
}

export default connect(mapStateToProps)(LeaderBoard)
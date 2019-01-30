//inside src/components/Dashboard.js
import React from 'react'
import {connect} from 'react-redux'
import { users } from '../reducers/users';
import { handleInitialData } from '../actions/shared'

import Poll from './Poll'
import LoginModal from './LoginModal';
import {Button,Modal} from 'react-bootstrap'
import ReactModalLogin from 'react-modal-login'
import Login from './Login';
//import {Tabs, Tab, TabContainer, TabContent, TabPane,Row} from 'react-bootstrap'
import {Tab,Tabs,TabList, TabPanel} from 'react-tabs'
import "react-tabs/style/react-tabs.css"


class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modal : false,
            cdmFlag : false,
            tabKey : 1
        }
        this.handleSelect = this.handleSelect.bind(this)
        

    }

    componentDidMount(){
        console.log('Db cdm', this.props)
        this.props.dispatch(handleInitialData())
        this.setState({cdmFlag : true})
        
      }
    
    showModal(){
        this.setState({modal:true})
    }
    handleSelect(key){
        console.log('tab select', key)
        this.setState({tabKey : key})
    }
    render(){
        const {user,questions,LoggedInUser} = this.props
        console.log('Dashboard', LoggedInUser)
        const answers = user !== undefined 
                     ? user.answers
                     : {}
        console.log('DB', user, questions)
        const answeredIds = Object.keys(answers).map((key=>(key) ))
        console.log('answList', answeredIds)
        //const answerKeys = Object.keys(this.props.user.answers) 
        const answeredPolls =  Object.keys(answers)
    return(
            <div>
                {(LoggedInUser === null) 
                    ? <Login />
                    : 
                    <div>
                    {/*<Tabs activeKey={this.state.tabKey} onSelect={this.handleSelect} id="uncontrolled-tab-example">
                        <TabPane tabKey="1" name="tab1">
                            content
                        </TabPane>
                        <Tab eventKey={1}  title="UnAnswered">
                            1232
                            <TabContainer id={1}>
                                <TabContent>123</TabContent>
                            </TabContainer>
                                
                        </Tab>
                        <Tab eventKey={2} title = "Answered">
                         456
                         <TabContainer id={2}>
                             <TabContent>456</TabContent>
                         </TabContainer>
                        </Tab>
                    </Tabs> */}
                    <Tabs className="center">
                        <TabList>
                            <Tab>UnAnswered</Tab>
                            <Tab>Answered</Tab>
                        </TabList>
                        <TabPanel>
                        <ul className='questionsList'>
                            {
                            Object.keys(questions).map((key)=>{
                                    return (!(key in answers) && 
                                    ( 
                                        
                                        <li className='listitem' key={key}>
                                            <Poll id={key}  
                                                />
                                            
                                        
                                        </li>
                                    ) )
                                /*   return <li key={key}>
                                    <span>{questions[key].author}</span>
                                    <div className = "option">
                                        <span>{questions[key].optionOne.text}</span>
                                        <span> votes :  {questions[key].optionOne.votes.length}</span>
                                        </div>
                                        <div className = "option">
                                        <span>{questions[key].optionTwo.text}</span>
                                        </div>
                                    <Poll />
                                </li>
                                */
                            })
                            }
                            </ul>
                        </TabPanel>
                        <TabPanel>
                        <ul className='questionsList'>
                            {
                            Object.keys(questions).map((key)=>{
                                    return ((key in answers) && 
                                    ( 
                                        <li className='listitem' key={key}>
                                            <Poll id={key}  
                                                />
                                        </li>
                                    ) )
                                
                            })
                            }
                            </ul>
                        </TabPanel>
                    </Tabs>
                    </div>
                    
                    
                }

                
                {user !== undefined && (
                    <div></div>
                /*<ul className='dashboard-list'>
                    {
                       Object.keys(answers).map((key)=>{
                          return <li key={key}>{answers[key]}</li>
                       })
                    }
                    
                </ul> */
                )}
                
                
            </div>
      
            
        )
    }
}
function mapStateToProps({questions,users,LoggedInUser}){
    return{
        questions: questions,
        LoggedInUser : LoggedInUser,
        user: users[LoggedInUser],
    }
}
export default connect(mapStateToProps)(Dashboard)
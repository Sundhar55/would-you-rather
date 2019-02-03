//inside src/components/Dashboard.js
import React from 'react'
import {connect} from 'react-redux'
import { users } from '../reducers/users';
import { handleInitialData } from '../actions/shared'

import Poll from './Poll'
import Login from './Login';
import {Tab,Tabs,TabList, TabPanel} from 'react-tabs'
import "react-tabs/style/react-tabs.css"


class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modal : false,
            cdmFlag : false,
            tabKey : 0
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount(){
        this.props.dispatch(handleInitialData())
        this.setState({cdmFlag : true})
      }
    
    showModal(){
        this.setState({modal:true})
    }
    handleSelect(key){
        this.setState({tabKey : key})
    }
    render(){
        const {user,questions,LoggedInUser} = this.props
        
        const answers = user !== undefined 
                     ? user.answers
                     : {}
        const totqstn = (Object.keys(questions).length )
        const totanswer = (Object.keys(answers).length )
        
    return(
            <div>
                {(LoggedInUser === null) 
                    ? <Login />
                    : 
                    <div>
                    <Tabs className="center" selectedIndex={this.state.tabKey} onSelect={tabKey=> this.setState({tabKey})}>
                        <TabList>
                            <Tab>UnAnswered</Tab>
                            <Tab>Answered</Tab>
                        </TabList>
                        <TabPanel>
                            { totanswer !== totqstn ?
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
                                    })
                                }
                                </ul> : <p> <span>No more questions. Thank you</span> </p>
                            }          
                        
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
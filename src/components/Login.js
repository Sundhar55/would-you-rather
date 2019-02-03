//src/components/Login.js

import React from 'react'
import {Card,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,CardBody, CardTitle,CardText,Row,Button} from 'reactstrap'
import {Image} from 'react-bootstrap'
import {connect} from 'react-redux'
import { handleLogin } from '../actions/shared'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users : this.props.users,
            dropdownOpen : false,
            dropdownValue : null
            

        }
        this.toggleDropDown = this.toggleDropDown.bind(this)
        this.select = this.select.bind(this)
        this.handleClick = this.handleClick.bind(this)
        
    }

    onDropdownChange(){
        alert('1')
        
    }
    
    toggleDropDown(){
        const ddvalue = this.state.dropdownOpen
        this.setState({
            dropdownOpen : !ddvalue
        })
    }

    select(event){
        const selectedItem = (event.target)
        this.setState({dropdownValue : selectedItem.id})
    }
    
    handleClick(e){
        const val = this.state.dropdownValue
        this.props.dispatch(handleLogin(val))
    }
    render(){
        const users = this.props.users
        const keys= Object.keys(users)
        const i="Select User"
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle className="title">Welcome to the Would You Rather App!
                            <p>Please sign in to continue </p>
                        </CardTitle>
                    </CardBody>
                    <Image src="/images/app.jpg"  alt="wouldyou" className="center-image" rounded/>
                    <CardBody>
                        <p className="title">Sign in</p>
                        <Dropdown className="center" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>
                               {this.state.dropdownValue === null ? i : this.state.dropdownValue }  
                            </DropdownToggle>
                            <DropdownMenu>

                                {keys.map((id)=>(
                                <DropdownItem id={id} tabIndex={id} key={id} onClick={this.select}>{users[id].name}</DropdownItem> 
                                ))}

                            </DropdownMenu>
                        </Dropdown>
                        <Button className="center" color='info' onClick={this.handleClick} >Sign in</Button>
                    </CardBody>
                
                </Card>
            </div>
        )
    }
}
function mapStateToProps({users}){
    return{
        users : users
    }
}

export default connect(mapStateToProps)(Login)
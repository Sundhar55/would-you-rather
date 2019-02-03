import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown,DropdownItem,
DropdownMenu,DropdownToggle } from 'reactstrap';
import {Image} from 'react-bootstrap'

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen : false,
      user: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleDropDown(){
     
   }
  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
      const users = this.props.users
      const keys= Object.keys(users)
      const i=0
      return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Welcome to the Would You Rather App

          </ModalHeader>
          <ModalBody>
              <div className="center">
                  
                <span>Please sign in to continue </span> 
                <Image src="/images/app.jpg"  responsive  style={{display:"block"}} />
                
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                    Sign in 
                </DropdownToggle>
                <DropdownMenu>

                    {keys.map((id)=>(
                       <DropdownItem key={id} tabindex={i+1}>{users[id].name}</DropdownItem> 
                    ))}

                </DropdownMenu>
            </Dropdown>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
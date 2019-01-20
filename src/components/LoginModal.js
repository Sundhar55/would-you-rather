import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown,DropdownItem,
DropdownMenu,DropdownToggle } from 'reactstrap';
import {Image} from 'react-bootstrap'

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen : false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
          <ModalBody>
              <div>
                  
                <span>Login with one of the below options </span>
                <Image src="/images/app.jpg" fluid />
                </div>
            <Dropdown isOpen={this.state.dropdownOpen}>
                <DropdownToggle caret>
                    Login options
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>user1</DropdownItem>
                    <DropdownItem>user2</DropdownItem>
                    <DropdownItem>user3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
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
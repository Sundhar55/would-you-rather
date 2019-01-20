//src/components/LeaderBoard.js
import React from 'react'
import {connect} from 'react-redux'
import {Well,Grid,Row,Col,Media} from 'react-bootstrap'
//import {Card,CardTitle, CardImg, CardText,CardBody,CardSubTitle} from 'reactstrap'
import LoginModal from './LoginModal';
class LeaderBoard extends React.Component{
    render(){
        console.log('users in lb ', this.props.users)
        return(
            <div>
            <Grid>

           
            <div className="leaderboard"> Leader
            {/*<Media>
                <Media.Left align="middle">
                    <img width={64} height={64} src ="/images/sarah.jpg"
                            alt="sarahedo" className='avatar'/>
                </Media.Left>
                <Media.Body>
                    <h3>Author</h3>
                    <div className="row">  Anwered Questions</div>
                    <div className="row">  Created Questions</div>
                </Media.Body>
                <Media.Right align="middle">   
                    <div className="" width={64} height={64}>
                        <div className="row">
                            Score
                        </div>
                        <div className="row">
                            9
                        </div>
                    </div>
                </Media.Right>
            </Media>
            */}
            <Row className="show-grid">
                <Col xs={3} md={2} align="middle">
                <img src ="/images/sarah.jpg"
                            alt="sarahedo" className='avatar'/>
                </Col>
                <Col xs={7} md={5}>
                    <h3>Author</h3>
                    <div className="row">  Anwered Questions</div>
                    <div className="row">  Created Questions</div>
                </Col>
                <Col xs={4} md={2}>
                <div className="mark">
                    <div className="row">
                        Score
                    </div>
                    <div className="row">
                        9
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                123
            </Row>
                {/*<div className="polldetail"> */}
                   
                    <div className="row col-md-9">
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
                        
                        <div className="col-md-2 mark float-right">
                            123
                        </div>
                    </div>
                </div>
            
            </Grid>
            
            <LoginModal />
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
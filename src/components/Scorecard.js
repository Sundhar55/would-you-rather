import React from 'react'
import {Well,Grid,Row,Col,Media} from 'react-bootstrap'
import {FaTrophy} from 'react-icons/fa'

export default function Scorecard(props){
    return(
        <div className="group">
        <div className="rank">
        <Row className="show-grid">
                    <Col xs={3} md={2} align="middle">
                    
                    <FaTrophy className="trophy-svg"></FaTrophy>
                    <img src ="/images/sarah.jpg"
                                alt="sarahedo" className='avatar'/>
                    </Col>
                    <Col xs={7} md={5}>
                        <h5>{props.author}</h5>
                        <div className="row">  Anwered Questions</div>
                        <div className="row">  Created Questions</div>
                    </Col>
                    <Col xs={2} md={2}>
                        
                            <div className="row">
                                Score
                            </div>
                            <div className="row" id="answered">
                                {props.answered}
                            </div>
                            <div className="row" id ="questioned">
                                {props.questions }               
                            </div>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}
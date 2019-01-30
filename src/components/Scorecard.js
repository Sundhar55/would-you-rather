import React from 'react'
import {Well,Grid,Row,Col,Media} from 'react-bootstrap'

export default function Scorecard(props){
    return(
        <div>
        <Row className="show-grid">
                    <Col xs={3} md={2} align="middle">
                    <img src ="/images/sarah.jpg"
                                alt="sarahedo" className='avatar'/>
                    </Col>
                    <Col xs={7} md={5}>
                        <h4>{props.author}</h4>
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
    )
}
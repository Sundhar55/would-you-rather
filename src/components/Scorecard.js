import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {FaTrophy} from 'react-icons/fa'

export default function Scorecard(props){
    let trophyColor = 'trophy-svg'
    if(props.rank === 2)
        trophyColor = 'trophy-silver-svg'
    else if (props.rank > 2 )
    {
        trophyColor = 'trophy-black-svg'
    }
    var imgSrc = "/images/tyler.jpg"
        if(props.authorId === "sarahedo"){
            imgSrc = "/images/sarah2.jpg"
        }else if (props.authorId === "johndoe"){
            imgSrc="/images/beard.jpg"
        }
        
    return(
        <div className="group">
        <div className="rank">
        <Row className="show-grid">
                    <Col xs={3} md={3} align="left">
                    
                    <FaTrophy className={trophyColor}></FaTrophy>
                    <img src ={imgSrc}
                                alt="sarahedo" className='avatar'/>
                    </Col>
                    <Col xs={7} md={7}>
                        <h5>{props.author}</h5>
                        <div className="row">  Anwered Questions</div>
                        <div className="row">  Created Questions</div>
                    </Col>
                    <Col xs={2} md={2}>
                        
                            <div className="row">
                                <p className="text">Score</p>
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
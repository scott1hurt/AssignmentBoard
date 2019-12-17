import React, { Component } from 'react';
import '../LandingScreen/LandingScreen.css';
import Homescreen from '../Homescreen/Homescreen';
import { 
        Route, 
        BrowserRouter as Router,
        Link,
        Switch 
        } from 'react-router-dom';

class LandingScreen extends Component {
    render() {
        return (

            <div>
                <img className='landingBackground'></img>
                {/* <div className='layer'></div> */}
                <div className='landingBox'>
                    <h1>Tutors4You</h1>
                    
                    <p>Bridging the Educational Divide, One Student at a Time!</p>
                    <Link to='/home'>
                        <button>Get Started</button>
                    </Link>

            <div className='landingMain'>
                <div className='landingContainer'>
                    <div className='landingBox'>
                        <h1 className="landingHeading">Tutor Board</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default LandingScreen;
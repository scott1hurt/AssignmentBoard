import React, { Component } from 'react';
import '../LandingScreen/LandingScreen.css';

class LandingScreen extends Component {
    render() {
        return (
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
import React, { Component } from 'react';
import './Sidebar.css';
import image from '../../logo/tutor_img.png'

class Sidebar extends Component {
  render() {

    var classes = `o-sidebar ${this.props.class}1`

    return (
      <div className={classes}>
        <img src={image} alt='img'></img>
        <p className='heading'>Tutor Board</p>
        <div className='switcherMain'>
          <p className='switcherSwitch' onClick={() => this.props.subjectFilter("All")}>All</p>
          <p className='switcherSwitch' onClick={() => this.props.subjectFilter("Math")}>Math</p>
          <p className='switcherSwitch' onClick={() => this.props.subjectFilter("English")}>English</p>
          <p className='switcherSwitch' onClick={() => this.props.subjectFilter("Science")}>Science</p>
          <p className='switcherSwitch' onClick={() => this.props.subjectFilter("Art")}>Art</p>
          <p className='switcherSwitch' onClick={() => this.props.subjectFilter("Computer")}>Computer</p>
        </div>
      </div>
    )
  }
}


export default Sidebar
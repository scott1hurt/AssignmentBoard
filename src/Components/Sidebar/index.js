import React, { Component } from 'react';
import './Sidebar.css';
import image from '../../logo/tutor_img.png'

class Sidebar extends Component {
  render() {

    var classes = `o-sidebar ${this.props.class}`

    return (
      <div className={classes}>
        <img src={image}></img>
        <div className='switcherMain'>
          <p className='switcherSwitch'>Math</p>
          <p className='switcherSwitch'>English</p>
          <p className='switcherSwitch'>Science</p>
          <p className='switcherSwitch'>Art</p>
          <p className='switcherSwitch'>Computer</p>
        </div>
      </div>
    )
  }
}


export default Sidebar
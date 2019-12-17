import React, { Component } from 'react'
import './Backdrop.css'

class Backdrop extends Component {
  

  render() {
    var classes = `backdrop ${this.props.class}`
    
    return (
      <div className={classes} onClick={this.props.sidebarToggle}>
        
      </div>
    )
  }
}

export default Backdrop
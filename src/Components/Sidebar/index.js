import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
  render() {

    var classes = `o-sidebar ${this.props.class}`

    return (
      <div className={classes}>
      </div>
    )
  }
}


export default Sidebar
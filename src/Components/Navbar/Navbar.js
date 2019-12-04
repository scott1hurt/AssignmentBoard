import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p className='navbar-header'>Assignment Board</p>
        <button onClick={this.props.formToggle} className='navbar-button'>+</button>
      </div>
    )
  }
}

export default Navbar

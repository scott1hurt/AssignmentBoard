import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p className='navbar-header' onClick={this.props.formToggle}>Assignment Board</p>
        {/* DropDown Menu */}
        <div className='dropdown'>
          <button className='dropbtn'>☰ Tutoring</button>
          <div className='dropdown-content'>
            <a target='_blank' href='https://www.wku.edu/getready/tutoring_glasgow.php'>WKU</a>
            <a target='_blank' href='#'>Link 2</a>
          </div>
        </div>
        <button onClick={this.props.formToggle} className='navbar-button'>Add Assignment</button>
        <button onClick={this.props.sidebarToggle} className='navbar-button'>Open</button>
      </div>
    )
  }
}

export default Navbar

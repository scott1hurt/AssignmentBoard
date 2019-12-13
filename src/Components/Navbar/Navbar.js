import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p className='navbar-header'>Tutor Board</p>
        {/* DropDown Menu */}
        <div className='dropdown'>
          <button className='dropbtn'>☰ Tutoring Resources</button>
          <div className='dropdown-content'>
            <a rel="noopener noreferrer" target='_blank' href='https://www.wku.edu/getready/tutoring_glasgow.php'>WKU</a>
            <a rel="noopener noreferrer" target='_blank' href='https://southcentral.kctcs.edu/current-students/academic-resources/tutoring.aspx'>SKYCTC</a>
          </div>
        </div>
        <button onClick={this.props.formToggle} className='navbar-button'>Add Tutor</button>
        <button onClick={this.props.sidebarToggle} className='navbar-button'>Open</button>
      </div>
    )
  }
}

export default Navbar

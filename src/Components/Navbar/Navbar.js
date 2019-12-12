import React, { Component } from 'react'
import './Navbar.css'
import Darkmode from 'darkmode-js';

class Navbar extends Component {

  render() {

    var options = {
      bottom: '20px',
      right: '5px',
      left: 'unset',
      time: '.5s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      saveInCookies: false,
      label: '🌓',
      autoMatchOsTheme: true 
    }

    const darkmode = new Darkmode(options)
    darkmode.showWidget();

    return (
      <div className="navbar">
        <p className='navbar-header' onClick={this.props.formToggle}>Assignment Board</p>
        <div className='dropdown'>
          <button className='dropbtn'>☰ Tutoring</button>
          <div className='dropdown-content'>
            <a target='_blank' href='https://www.wku.edu/getready/tutoring_glasgow.php'>WKU</a>
            <a target='_blank' href='https://www.bgca.org/programs/education'>BGCA Education</a>
          </div>
        </div>
        <button onClick={this.props.formToggle} className='navbar-button'>Add Assignment</button>
        <button onClick={this.props.sidebarToggle} className='navbar-button'>Open</button>
      </div>
    )
  }
}

export default Navbar

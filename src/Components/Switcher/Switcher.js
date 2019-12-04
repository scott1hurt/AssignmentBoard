import React, { Component } from 'react'
import './Switcher.css'

class Switcher extends Component {
  render() {
    return (
      <div className='switcherMain'>
        <p className='switcherSwitch'>Math</p>
        <p className='switcherSwitch'>English</p>
        <p className='switcherSwitch'>Science</p>
        <p className='switcherSwitch'>Art</p>
        <p className='switcherSwitch'>Computer</p>
      </div>
    )
  }
}

export default Switcher
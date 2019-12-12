import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
  render() {

    var classes = `o-sidebar ${this.props.class}`

    return (
      <div className={classes}>
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
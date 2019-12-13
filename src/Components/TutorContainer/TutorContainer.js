import React, { Component } from 'react'
import Assignment from '../Tutor/Tutor'
import './TutorContainer.css'

class TutorContainer extends Component {


  renderTutors = () => {
    return (
      this.props.tutors.map((tutor, index) => (
        <Assignment
          key={index}
          name={tutor.name}
          description={tutor.description}
          subjects={tutor.subjects}
          dateAvailable={tutor.dateAvailable}
        />
      ))
    )
  }


  handleTutors = () => {
    if (this.props.tutors.length === 0) {
      return (
        <h1>There are no tutors</h1>
      )
    } else {
      return (
        this.renderTutors()
      )
    }
  }

  render() {
    return (
      <div className="assignmentsContainer">
        {this.handleTutors()}
      </div>
    )
  }
}

export default TutorContainer
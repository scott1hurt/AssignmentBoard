import React, { Component } from 'react'
import Assignment from '../Tutor/Tutor'
import './TutorContainer.css'

class AssignmentsContainer extends Component {

  render() {
    return (
      <div className="assignmentsContainer">
        {
          this.props.tutors.map((tutor, index) => (
            <Assignment
              key={index}
              name={tutor.name}
              description={tutor.description}
              subjects={tutor.subjects}
              dateAvailable={tutor.dateAvailable}
            />
          ))
        }

      </div>
    )
  }
}

export default AssignmentsContainer
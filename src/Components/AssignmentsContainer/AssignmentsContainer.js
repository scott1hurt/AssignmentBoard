import React, { Component } from 'react'
import Assignment from '../Assignment/Assignment'
import './AssignmentsContainer.css'

class AssignmentsContainer extends Component {

  render() {
    return (
      <div className="assignmentsContainer">
        {
          this.props.assignments.map((assignment, index) => (
            <Assignment
              key={index}
              name={assignment.name}
              description={assignment.description}
              requirements={assignment.requirements}
              dateAssigned={assignment.dateAssigned}
              dateDue={assignment.dateDue}
            />
          ))
        }

      </div>
    )
  }
}

export default AssignmentsContainer
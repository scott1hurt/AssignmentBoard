import React, { Component } from 'react'
import './AddAssignmentForm.css'
import assignments from '../../assignments'

class AddAssignmentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      requirements: [],
      groupProject: null,
      dateAssigned: '',
      dateDue: '',
      requirementToAdd: '',
      error: null
    }
  }


  handleInputChange = (event) => {
    console.log(event.target.value)

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitNewAssignment = () => {
    if (this.state.name === '' || this.state.description === '' || this.state.requirements.length === 0 || this.state.dateAssigned === '' || this.state.dateDue === '') {
      this.setState({
        error: "Please enter in all fields correctly."
      })
    } else {
      let newAssignment = {
        name: this.state.name,
        description: this.state.description,
        requirements: this.state.requirements,
        groupProject: this.state.groupProject,
        dateAssigned: this.state.dateAssigned,
        dateDue: this.state.dateDue
      }

      this.setState({
        error: null
      })

      assignments.push(newAssignment)
      this.props.formHandler()
    }
  }

  handleRequirementChange = (event) => {
    this.setState({
      requirementToAdd: event.target.value
    })
  }

  submitNewRequirement = () => {
    if (this.state.requirementToAdd === '') {
      this.setState({
        error: "Please enter a requirement"
      })
    } else {
      this.state.requirements.push(this.state.requirementToAdd)
      console.log(this.state.requirements)

      this.setState({
        requirementToAdd: '',
        error: ''
      })
    }
  }

  removeRequirementTag(reqTag) {
    for (var i = 0; i < this.state.requirements.length; i++) {
      if (this.state.requirements[i] === reqTag) {
        this.state.requirements.splice(i, 1);
        this.setState({ requirements: this.state.requirements })
      }
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.error ? "error show" : "error hide"}>{this.state.error}</div>

        <div onClick={this.props.formHandler} className='layer'></div>
        <div className='addContactForm'>
          <h1>Add Assignment</h1>

          <input placeholder='Name' className='input' onChange={this.handleInputChange} name='name' />

          <input placeholder='Description' className='input' onChange={this.handleInputChange} name='description' />

          <div className='requirements'>
            <input placeholder='Requirement' className='input' onChange={this.handleRequirementChange} name='requirement' value={this.state.requirementToAdd} />
            <button onClick={this.submitNewRequirement} className='button'>+</button>
          </div>

          <div className="requirementTags">
            {
              this.state.requirements.map((req, index) => (
                <div className="tag" key={index}>
                  <button className="tagButton" onClick={() => this.removeRequirementTag(req)}>X</button>
                  <p className="tagName">{req}</p>
                </div>
              ))
            }
          </div>

          <input placeholder='Date Assigned' className='input' onChange={this.handleInputChange} name='dateAssigned' />

          <input placeholder='Date Due' className='input' onChange={this.handleInputChange} name='dateDue' />

          <div className='actionButtons'>
            <button onClick={this.submitNewAssignment} className='button'>Add</button>
            <button onClick={this.props.formHandler} className='button'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAssignmentForm
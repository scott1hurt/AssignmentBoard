import React, { Component } from 'react'
import './AddAssignmentForm.css'
import tutors from '../../assignments'

class AddAssignmentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      subjects: [],
      dateAvailable: '',
      subjectToAdd: '',
      error: null
    }
  }


  handleInputChange = (event) => {
    console.log(event.target.value)

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitNewSubject = () => {
    if (this.state.name === '' || this.state.description === '' || this.state.subjects.length === 0 || this.state.dateAvailable === '') {
      this.setState({
        error: "Please enter in all fields correctly."
      })
    } else {
      let newSubject = {
        name: this.state.name,
        description: this.state.description,
        subjects: this.state.subjects,
        dateAvailable: this.state.dateAssigned
      }

      this.setState({
        error: null
      })

      tutors.push(newSubject)
      this.props.formHandler()
    }
  }

  handleSubjectChange = (event) => {
    this.setState({
      subjectToAdd: event.target.value
    })
  }

  submitNewRequirement = () => {
    if (this.state.subjectToAdd === '') {
      this.setState({
        error: "Please enter a requirement"
      })
    } else {
      this.state.subjects.push(this.state.subjectToAdd)
      console.log(this.state.subjects)

      this.setState({
        subjectToAdd: '',
        error: ''
      })
    }
  }

  removeSubjectTag(reqTag) {
    for (var i = 0; i < this.state.subjects.length; i++) {
      if (this.state.subjects[i] === reqTag) {
        this.state.subjects.splice(i, 1);
        this.setState({ subjects: this.state.subjects })
      }
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.error ? "error show" : "error hide"}>{this.state.error}</div>

        <div onClick={this.props.formHandler} className='layer'></div>
        <div className='addContactForm'>
          <h1>Add Tutor</h1>

          <input placeholder='Name' className='input' onChange={this.handleInputChange} name='name' />

          <input placeholder='Description' className='input' onChange={this.handleInputChange} name='description' />

          <div className='requirements'>
            <input placeholder='Requirement' className='input' onChange={this.handleSubjectChange} name='requirement' value={this.state.subjectToAdd} />
            <button onClick={this.submitNewRequirement} className='button'>+</button>
          </div>

          <div className="requirementTags">
            {
              this.state.subjects.map((req, index) => (
                <div className="tag" key={index}>
                  <button className="tagButton" onClick={() => this.removeSubjectTag(req)}>X</button>
                  <p className="tagName">{req}</p>
                </div>
              ))
            }
          </div>

          <input placeholder='Date Available' className='input' onChange={this.handleInputChange} name='dateAvailable' />

          <div className='actionButtons'>
            <button onClick={this.submitNewSubject} className='button'>Add</button>
            <button onClick={this.props.formHandler} className='button'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAssignmentForm
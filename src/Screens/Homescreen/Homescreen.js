import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import tutors from '../../tutors'
import AddAssignmentForm from '../../Components/AddTutorForm/AddTutorForm';
import AssignmentsContainer from '../../Components/TutorContainer/TutorContainer'
import Sidebar from '../../Components/Sidebar/'
import Backdrop from '../../Components/Backdrop'
import './Homescreen.css'

class Homescreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formHidden: true,
      allTutors: tutors,
      sidebarHidden: true,
      currentSubject: "",
    }
  }

  onToggleForm = () => {
    if (this.state.formHidden) {
      this.setState({
        formHidden: false
      })
    } else {
      this.setState({
        formHidden: true
      })
    }
  }

  toggleSidebar = () => {
    (this.state.sidebarHidden) ? this.setState({sidebarHidden: false}) : this.setState({sidebarHidden: true})
  }

  subjectFilter = subjectToSet => {
    this.setState({ currentSubject: subjectToSet })
    this.toggleSidebar()
    this.renderFilteredSubjects(subjectToSet)
  }

  renderFilteredSubjects = subjectName => {

    let currentArray = tutors
    let newArray = []

    for (const sub of currentArray) {
      for (const subName of sub.subjects) {
        if (subName === subjectName) {
          newArray.push(sub)
        } else if (subjectName === "All") {
          newArray = tutors
        }
      }
    }

    this.setState({ allTutors: newArray })

    return this.state.allTutors
  }

  render() {
    return (
      <div>
        <Navbar formToggle={this.onToggleForm} sidebarToggle={this.toggleSidebar}/>
        <AssignmentsContainer tutors={this.state.allTutors}/>
        {(this.state.formHidden ? null : <AddAssignmentForm formHandler={this.onToggleForm}/>)}
        <Sidebar class={this.state.sidebarHidden} subjectFilter={this.subjectFilter} /> 
        {(this.state.sidebarHidden) ? null : <Backdrop sidebarToggle={this.toggleSidebar} class={this.state.sidebarHidden}/>}
      </div>
    )
  }
}

export default Homescreen
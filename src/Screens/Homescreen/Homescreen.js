import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import assignments from '../../assignments'
import AddAssignmentForm from '../../Components/AddAssignmentForm/AddAssignmentForm';
import AssignmentsContainer from '../../Components/AssignmentsContainer/AssignmentsContainer'
import Switcher from '../../Components/Switcher/Switcher';
import Sidebar from '../../Components/Sidebar/'
import Backdrop from '../../Components/Backdrop'

class Homescreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formHidden: true,
      allAssignments: assignments,
      sidebarHidden: true
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


  render() {
    return (
      <div>
        <Navbar formToggle={this.onToggleForm} sidebarToggle={this.toggleSidebar}/>
        <Switcher />
        <AssignmentsContainer assignments={this.state.allAssignments}/>
        {(this.state.formHidden ? null : <AddAssignmentForm formHandler={this.onToggleForm}/>)}
        <Sidebar class={this.state.sidebarHidden} /> 
        {(this.state.sidebarHidden) ? null : <Backdrop sidebarToggle={this.toggleSidebar} class={this.state.sidebarHidden}/>}
      </div>
    )
  }
}

export default Homescreen
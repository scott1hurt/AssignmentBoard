import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import assignments from '../../assignments'
import AddAssignmentForm from '../../Components/AddAssignmentForm/AddAssignmentForm';
import AssignmentsContainer from '../../Components/AssignmentsContainer/AssignmentsContainer'
import Switcher from '../../Components/Switcher/Switcher';

class Homescreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formHidden: true,
      allAssignments: assignments
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



  render() {
    return (
      <div>
        <Navbar formToggle={this.onToggleForm}/>
        <Switcher />
        <AssignmentsContainer assignments={this.state.allAssignments}/>
        {(this.state.formHidden ? null : <AddAssignmentForm formHandler={this.onToggleForm}/>)}
      </div>
    )
  }
}

export default Homescreen
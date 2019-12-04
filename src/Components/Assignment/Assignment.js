import React from 'react'
import './Assignment.css'

function Assignment({ name, description, dateAssigned, dateDue, requirements }) {
  return (
    <div className="main">
      <p className="name"><b>{name}</b></p>
      <p className="description">{description}</p>
      <br />
      <p className="requirements"><b>Requirements</b></p>
      {
        requirements.map((requirement, index) => (
          <p key={index}>- {requirement}</p>
        ))
      }
      <br />
      <p className="date">Assigned: <b>{dateAssigned}</b></p>
      <p className="date">Due Date: <b>{dateDue}</b></p>
    </div>
  )
}

export default Assignment
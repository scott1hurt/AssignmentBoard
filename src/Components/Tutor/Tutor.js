import React from 'react'
import './Tutor.css'
import Upload from '../../Upload/Upload';

function Assignment({ name, description, dateAvailable, dateDue, subjects }) {
  return (
    <div className="main">
      <p className="name"><b>{name}</b></p>
      <p className="description">{description}</p>
      <br />
      <p className="requirements"><b>Subjects</b></p>
      {
        subjects.map((subject, index) => (
          <p key={index}>- {subject}</p>
        ))
      }
      <br />
      <p className="date">Available: <b>{dateAvailable}</b></p>
      <Upload />
    </div>
  )
}

export default Assignment
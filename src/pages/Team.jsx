import React from 'react'
import './Page.scss'

const teamMembers = [
  { id: 1, name: 'exemplo', role: 'função' },
  { id: 2, name: 'exemplo', role: 'função' },
  { id: 3, name: 'exemplo', role: 'função' },
  { id: 4, name: 'exemplo', role: 'função' }
]

function Team() {
  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Equipe</h1>
        <ul className="team-list">
          {teamMembers.map(member => (
            <li key={member.id} className="team-member">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team

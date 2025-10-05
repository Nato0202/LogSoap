import React from 'react'
import './Page.scss'

const teamGroups = [
  {
    role: 'Marketing',
    members: [
      { name: 'Danielle' },
      { name: 'Geovanna' },
      { name: 'Larissa' },
      { name: 'Leticia' },
      { name: 'Marcus', leader: true },
      { name: 'Rayssa' },
      { name: 'Isabella Suzart' },
      { name: 'Valentina' }
    ]
  },
  {
    role: 'Produção',
    members: [
      { name: 'Adrielly' },
      { name: 'Ana Clara', leader: true },
      { name: 'Beatriz' },
      { name: 'Evelyn' },
      { name: 'Geovanna Rodrigues' },
      { name: 'Isabella da cruz' },
      { name: 'Lorrane' },
      { name: 'Murilo' },
      { name: 'Nicolas' },
      { name: 'Renan Martins' }
    ]
  },
  {
    role: 'Vendas',
    members: [
      { name: 'Arthur' },
      { name: 'Flávia' },
      { name: 'Kaique' },
      { name: 'Kauã' },
      { name: 'Luis', leader: true },
      { name: 'Maria' },
      { name: 'Isabelli' },
      { name: 'Ruan' }
    ]
  },
  {
    role: 'Financeiro',
    members: [
      { name: 'Pablo' },
      { name: 'Kelvin' },
      { name: 'Renan Nunes' },
      { name: 'Roberta' },
      { name: 'Vinicius', leader: true }
    ]
  }
]

function Team() {
  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Equipe</h1>
        {teamGroups.map(group => (
          <div key={group.role} className="team-group">
            <h2>{group.role}</h2>
            <ul className="team-list">
              {group.members.map(member => (
                <li key={member.name} className={`team-member${member.leader ? ' leader' : ''}`}>
                  {member.name} {member.leader ? '(Líder)' : ''}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

import React from 'react'
import './Page.css'

function PelotaoPage() {
  return (
    <div className="page-container" style={{ backgroundColor: '#b33a3a' }}>
      <div className="content">
        <h1>Pelotão Log</h1>
        <p>
          O técnico em logística venderá no dia 10/10, sabões aromatizantes na feira do empreendedorismo.
        </p>
        <img src="/images/pelotao.png" alt="Pelotão Log Branding" className="page-image" />
      </div>
    </div>
  )
}

export default PelotaoPage

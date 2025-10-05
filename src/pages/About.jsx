import React from 'react'
import './Page.scss'

function About() {
  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Sobre Nós</h1>
        <p>
          A LogSoap é um projeto desenvolvido por uma turma dedicada de logística técnico.
          Nosso objetivo é criar produtos de qualidade que unem inovação e sustentabilidade.
        </p>
        <h2>Missão</h2>
        <p>Oferecer sabonetes que proporcionem bem-estar e cuidado.</p>
        <h2>Visão</h2>
        <p>Ser referência em produtos artesanais de higiene e beleza na comunidade.</p>
        <h2>Valores</h2>
        <ul>
          <li>Qualidade</li>
          <li>Sustentabilidade</li>
          <li>Inovação</li>
          <li>Compromisso</li>
        </ul>
        <h2>Contato</h2>
        <p>Para mais informações e contato, siga nosso Instagram:</p>
        <div className="social-links">
          <a href="https://www.instagram.com/pelotao.log" target="_blank" rel="noopener noreferrer">Instagram: @pelotao.log</a>
        </div>
      </div>
    </div>
  )
}

export default About

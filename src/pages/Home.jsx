import React from 'react'
import '../styles/main.scss'

function Home() {
  return (
    <div className="page-container" style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
      <div className="content">
        <h1>Bem-vindo à LogSoap</h1>
        <p>
          LogSoap é um sabonete aromatizante desenvolvido por uma dedicada turma de logística.
          Nosso produto une qualidade, aroma e cuidado para você.
        </p>
        <button className="btn-primary" onClick={() => window.location.href='/product'}>
          Conheça o Produto
        </button>
      </div>
    </div>
  )
}

export default Home

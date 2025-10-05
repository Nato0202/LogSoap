import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/main.scss'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="page-container" style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
      <div className="content home-content" style={{ textAlign: 'center' }}>
        <h1>Bem-vindo à LogSoap</h1>
        <p>
          LogSoap é um sabonete aromatizante desenvolvido por uma dedicada turma de logística.
          Nosso produto une qualidade, aroma e cuidado para você.
        </p>
        <button className="btn-primary" style={{ display: 'inline-block', marginBottom: '10px' }} onClick={() => navigate('/about')}>
          Conheça Sobre Nós
        </button>
        <br />
        <button className="btn-primary" style={{ display: 'inline-block' }} onClick={() => navigate('/product')}>
          Conheça o Produto
        </button>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src="/images/soap.png" alt="LogSoap" style={{ width: '350px', height: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default Home

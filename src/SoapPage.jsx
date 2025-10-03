import React from 'react'
import './Page.css'

function SoapPage() {
  return (
    <div className="page-container" style={{ backgroundColor: '#b33a3a' }}>
      <div className="content">
        <h1>Feira do Empreendedorismo - LogSoap</h1>
        <p>
          Bem-vindo à apresentação do sabonete aromatizante LogSoap, produzido pela turma da 2ª série de Logística Técnico.
        </p>
        <p>
          Participe conosco da Feira do Empreendedorismo, onde estaremos vendendo nossos sabonetes aromatizantes no dia 10/10.
        </p>
        <img src="/images/soap.png" alt="LogSoap Branding" className="page-image" />
      </div>
    </div>
  )
}

export default SoapPage

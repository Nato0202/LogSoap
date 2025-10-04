import React from 'react'
import './Page.scss'

function Policy() {
  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Política de Privacidade & Termos</h1>
        <p>
          Este site respeita a sua privacidade e está comprometido em proteger seus dados pessoais.
          Ao utilizar este site, você concorda com os termos e condições aqui descritos.
        </p>
        <h2>Coleta de Dados</h2>
        <p>Coletamos apenas as informações necessárias para contato e atendimento.</p>
        <h2>Uso das Informações</h2>
        <p>As informações fornecidas são usadas exclusivamente para responder suas solicitações.</p>
        <h2>Segurança</h2>
        <p>Adotamos medidas para proteger seus dados contra acesso não autorizado.</p>
        <h2>Contato</h2>
        <p>Para dúvidas sobre a política de privacidade, entre em contato conosco.</p>
      </div>
    </div>
  )
}

export default Policy

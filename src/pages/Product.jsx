import React from 'react'
import './Page.scss'
import soapImage from '/images/soap.png'

function Product() {
  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Produto</h1>
        <img src={soapImage} alt="LogSoap Sabonete Aromatizante" style={{ maxWidth: '300px', borderRadius: '8px' }} />
        <h2>Ingredientes</h2>
        <ul>
          <li>Óleos essenciais naturais</li>
          <li>Glicerina vegetal</li>
          <li>Corantes naturais</li>
          <li>Outros ingredientes sustentáveis</li>
        </ul>
        <h2>Benefícios</h2>
        <ul>
          <li>Aroma agradável e duradouro</li>
          <li>Hidratação da pele</li>
          <li>Produto artesanal e sustentável</li>
          <li>Ideal para uso diário</li>
        </ul>
        <h2>Perguntas Frequentes</h2>
        <dl>
          <dt>O sabonete é indicado para peles sensíveis?</dt>
          <dd>Sim, utilizamos ingredientes naturais que são suaves para a pele.</dd>
          <dt>Posso comprar online?</dt>
          <dd>Por enquanto, as vendas são feitas presencialmente na feira e via WhatsApp.</dd>
        </dl>
      </div>
    </div>
  )
}

export default Product

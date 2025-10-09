import React from 'react'
import './Page.scss'
import '../styles/Common.scss'
import './Product.scss'
function Product() {
  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Produto</h1>
        <video
          src="/videos/WhatsApp Video 2025-10-07 at 00.03.29.mp4"
          title="LogSoap Sabonete Aromatizante"
          className="content"
          style={{ width: '100%', maxWidth: '200px', height: '360px', borderRadius: '8px', display: 'block', margin: '0 auto' }}
          autoPlay
          loop
          muted
          playsInline
        />
        <h2>Ingredientes</h2>
        <ul>
          <li>Óleos essenciais naturais</li>
          <li>Glicerina vegetal</li>
          <li>Corantes naturais</li>
          <li>Outros ingredientes sustentáveis</li>
        </ul>
        <h2>Benefícios</h2>
        <ul>
          <li>Hidratação da pele</li>
          <li>Produto artesanal e sustentável</li>
          <li>Ideal para uso diário</li>
        </ul>
      </div>
    </div>
  )
}

export default Product

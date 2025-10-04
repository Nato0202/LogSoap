import React, { useState } from 'react'
import './Page.scss'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page-container" style={{ backgroundColor: '#fff', color: '#333' }}>
      <div className="content">
        <h1>Contato</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Nome:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Mensagem:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn-primary">Enviar</button>
        </form>
        <div className="social-links">
          <h2>Redes Sociais</h2>
          <a href="https://www.instagram.com/pelotao.log" target="_blank" rel="noopener noreferrer">Instagram</a> {' '}
        </div>
      </div>
    </div>
  )
}

export default Contact

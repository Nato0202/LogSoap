import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SoapPage from './SoapPage'
import PelotaoPage from './PelotaoPage'
import './App.css'

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/">LogSoap</Link>
        <Link to="/pelotao">Pelotão Log</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SoapPage />} />
        <Route path="/pelotao" element={<PelotaoPage />} />
      </Routes>
    </Router>
  )
}

export default App

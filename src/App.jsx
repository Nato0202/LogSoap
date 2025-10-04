import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SoapPage from './pages/SoapPage'
import PelotaoPage from './pages/PelotaoPage'
// Placeholder imports for new pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Policy from './pages/Policy'
import './App.scss'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/soap" element={<SoapPage />} />
        <Route path="/pelotao" element={<PelotaoPage />} />
      </Routes>
    </Router>
  )
}

export default App

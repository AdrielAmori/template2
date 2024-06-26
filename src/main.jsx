import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/section/Navbar.jsx'
import Presentation from './components/section/Presentation.jsx'
import Projects from './components/section/Projects.jsx'
import Sobre from './components/section/Sobre.jsx'
import Footer from './components/section/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Presentation/>
    <Projects/>
    <Sobre/>
    <Footer/>
  </React.StrictMode>,
)

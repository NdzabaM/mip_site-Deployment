import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <div>
        <nav className='navbar'>
           <div className='navbar-container'>
             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><img src="images/WhatsApp Image 2022-07-12 at 4.59.41 PM.jpeg" alt="logo" />
               
             </Link>
             <h1>Ministério Internacional Precursor</h1>
             <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                   Início
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link to='/dias-e-horarios-dos-cultos' className='nav-links' onClick={closeMobileMenu}>
                   Dias e Horários
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link to='/pastores' className='nav-links' onClick={closeMobileMenu}>
                   Pastores
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link to='/sobre-nos' className='nav-links' onClick={closeMobileMenu}>
                   Sobre Nós
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link to='/galeria' className='nav-links' onClick={closeMobileMenu}>
                   Galeria
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link to='/enderecos-e-contatos' className='nav-links' onClick={closeMobileMenu}>
                   Endereços e Contatos
                 </Link>
               </li>
             </ul>
             
           </div>
        </nav>
    </div>
  )
}

export default Navbar
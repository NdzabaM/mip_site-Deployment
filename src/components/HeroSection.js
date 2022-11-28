import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Button.css'
import './HeroSection.css'
import '../App.js'

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Seja Bem-Vindo</h1>
        <p>Preparando a terra para a vinda do Senhor</p>
        <div className='hero-btns'>
            <Button className='btns'>
              <Link to='/sobre-nos' className='link-text'>
                        Sobre Nós
              </Link>
            </Button>

            <Button className='btns'>
              <Link to='/dias-e-horarios-dos-cultos' className='link-text'>
            Dias e Horários
              </Link>
            </Button>

        </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
import './presentation.css'
import gifCode from './images/code.gif';
import linkedIcon from './images/linkedin.png'
import githubIcon from './images/github.png'
import instagramIcon from './images/instagram.png'
import cvIcon from './images/cvicon.png'
import foto from './images/PIERO.jpeg'

const Presentattion = () => {
  return (
    <div className="home-desc">
        <div className="left">
            <span className='present'>Hola, Soy Piero</span> <img className='logo-code' src={gifCode.src} alt="" />
            <h4 className='referencia'>O tambien Pyecom</h4>
            <h4 className='desarr'>Apasionado desarrollador FullStack con experiencia en la creación de soluciones digitales innovadoras desde el diseño hasta el desarrollo de apps web</h4>
            <div className="buttons-rs">
                <a className='button-rs' href="https://www.linkedin.com/in/pieroga/"><img className='icon-button-rs' src={linkedIcon.src}/> Linkedin</a>
                <a className='button-rs' href="https://github.com/ppyecom"><img className='icon-button-rs' src={githubIcon.src}/> GitHub</a>
                <a className='button-rs' href="https://instagram.com/pyecom"><img className='icon-button-rs' src={instagramIcon.src}/> Instagram</a>
                <a className='button-rs' href="https://www.linkedin.com/in/pieroga/"><img className='icon-button-rs' src={cvIcon.src}/> Download CV</a>
            </div>
        </div>

        <div className="right">
            <img className='foto' src={foto.src} alt="" />
        </div>
        
    </div>
  )
}

export default Presentattion
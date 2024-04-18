"use client";

import React, { useEffect, useRef, useState } from 'react'
import './menu.css'
import Link from 'next/link'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const menuLinks = [
    { path: '/', label: 'Home'},
    { path: '/work', label: 'Work'},
    { path: '/about', label: 'About'},
    { path: '/contact', label: 'Contact'},
    { path: '/lab', label: 'Lab'},
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const tl = useRef();

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
      gsap.set(".menu-link-item-holder", {y: 75});
      gsap.set(".menu-close-icon", {y: 100});
      tl.current = gsap.timeline({paused: true})
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        }).to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        }).to(".menu-close-icon", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        })
    }, {scope: container})

    useEffect(() => {
      if(isMenuOpen){
        tl.current.play()
      }else{
        tl.current.reverse()
      }
    
    }, [isMenuOpen])
    

  return (
    <div className='menu-container' ref={container}>
        <div className='menu-bar'>
          <div className='menu-logo'>
            <Link href="/">PYECOM</Link>
          </div>
          <div className='menu-open' onClick={toggleMenu}>
            <p>Menu</p>
          </div>
        </div>
        <div className='menu-overlay'>
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <Link href="/">PYECOM</Link>
            </div>
            <div className="menu-close" onClick={toggleMenu}>
              <p>Close</p>
            </div>
          </div>
          <div className="menu-close-icon">
            <p className='menu-close-icon-p' onClick={toggleMenu}>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((lnk,index) => { return(
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link href={lnk.path} className='menu-link'>
                      {lnk.label}
                    </Link>
                  </div>
                </div>
              )})}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <a href="https://github.com/ppyecom">GitHub &#8599;</a>
                <a href="https://www.linkedin.com/in/pieroga/">LinkedIn &#8599;</a>
                <a href="https://instagram.com/pyecom">Instagram &#8599;</a>
                <a href="#">TikTok &#8599;</a>
                <a href="#">Youtube &#8599;</a>
              </div>
              <div className="menu-info-col">
                <p>piero.neam@gmail.com</p>
                <p>+51 931551725</p>
              </div>
            </div>
          </div>
          <div className="menu-preview">
            <p>View Showreel</p>
          </div>
        </div>
    </div>
  )
}

export default Menu
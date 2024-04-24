"use client";

import React, { useEffect, useRef } from 'react'
import './aboutletters.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';

const AboutLetters = () => {

    
    const triggerRef = useRef(null)

    const useArrayRef = () => {
        const lettersRef = useRef([])
        lettersRef.current = []
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)]
    }

    const [lettersRef, setlettersRef] = useArrayRef()
    gsap.registerPlugin(ScrollTrigger)
    const letters = "Mi enfoque en el desarrollo se centra en la eficiencia, la calidad y la usabilidad. Tengo habilidades tanto en el desarrollo front-end como en el back-end, lo que me permite ofrecer soluciones completas y bien inteGradas."


    useGSAP(() => {
        gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom 70%"

                },
                color: "white",
                duration: 5,
                stagger: 1,
            })
    },{scope: triggerRef})



  return (
    <div className="reveal">
        <div className='reveal-div' ref={triggerRef}>
            {letters.split("").map((letter,indx) => {
                return (
                    <span className='reveal-text' key={indx} ref={setlettersRef}>{letter}</span>
                )
            })}
        </div>
    </div>
  )
}

export default AboutLetters
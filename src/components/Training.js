import React from 'react'

import './TrainingStyles.css'

import Pod from "../assets/pod.jpg"
import Moon from "../assets/moon.jpg"

import {Link} from "react-router-dom"

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Accusam clita dolor eos kasd takimata et sea accusam gubergren clita, lorem dolor accusam vero et amet rebum sed eirmod amet. Stet lorem justo et sea, rebum accusam lorem aliquyam.</p>
            <Link to='/contact'>
                <button className='btn'>
                    CONTACT
                </button>
            </Link>
        </div>
        
        <div className='right'>
            <div className='img-container'>
                
                <div className='image-stack top'>
                    <img src={Moon} alt="moon" className='img'/>
                </div>

                <div className='image-stack bottom'>
                    <img src={Pod} alt="pod" className='img'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Training
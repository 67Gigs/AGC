import React from 'react'
import './nav.css'

function Nav() {

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

      target.style.setProperty('--mouse-x', `${ x }px`)
      target.style.setProperty('--mouse-y', `${ y }px`)
  }

  return (
    <div className='Nav'>

        <a href='/' className='logo-container'>
            <div className='logo'></div>
        </a>
        <div className='nav-links'>
            <a href='/' className='links'>Home</a>
            <a href='/' className='links'>About</a>
            <a href='/' className='links'>Agenda</a>
            <a href='/' className='links'>Contact</a>
        </div>
        <div className='nav-buttons'>
            <a href='/register' className='register' onMouseMove={(e) => handleOnMouseMove(e)}>Register</a>
        </div>

    </div>
  )
}

export default Nav
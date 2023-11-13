import React from 'react'
import './Switch.css'

function Switch() {
  return (
    <div className='switch'>
        <h1 className='switch-title'><span className='up'>ARE YOU UP</span> FOR THE CHALLENGE ?</h1>
        <div className='switch-container'>
          <div className='chat-bot'>
              <div className='chat-bot-input-wrapper'>
                <input type='text' placeholder='Tap Here...' className='chat-bot-input' />
                <button className='chat-bot-send-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M0.399902 1.37671L3.2039 7.34712L14.5646 4.15489L4.85331 10.8591L7.65731 16.8295L22.291 0.526182L0.399902 1.37671Z" fill="#505050"/>
                  </svg>
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Switch
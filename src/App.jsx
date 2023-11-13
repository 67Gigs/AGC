import './App.css';
import Nav from './nav.jsx'
import React from 'react'
import About from './About.jsx';

function App() {

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

      target.style.setProperty('--mouse-x', `${ x }px`)
      target.style.setProperty('--mouse-y', `${ y }px`)
  }

  return (
    <div className="App">
      <Nav />
      <div className='background-mosaic'></div>
      <div className='header'>

        <div className='header'>
          <div className='switch'></div>
        </div>
        
        <About />

        <div className='hover' onMouseMove={(e) => handleOnMouseMove(e)} id='test' >

        </div>
      
      </div>
    </div>
  );
}

export default App;

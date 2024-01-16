import React from 'react'
import qrImage from './assets/image-qr-code.png'


function App() {

  return (
    <div className='container'>
      <img src={qrImage} alt={qrImage} />
      <h2 className='heading'>Improve your front-end skills by building projects</h2>
      <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default App

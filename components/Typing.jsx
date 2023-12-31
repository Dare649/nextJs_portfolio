"use client"

import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <div>
      <TypeAnimation
        className='font-bold text-7xl text-white'
      sequence={[
        'I\'m a Frontend Developer...',
        2000, 
        'I\'m a Tech Enthusiast...',
        2000,
        'I\'m a Team Player...',
        2000,
        'I\'m Passionate About Learning...',
        2000,
        'I\'m Resilient...',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default Typing

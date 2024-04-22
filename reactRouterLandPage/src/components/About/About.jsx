import React from 'react'
import { useEffect } from 'react'

function About() {
  const follower = 10;

  return (
    <div className='text-white border w-screen h-screen'>
      <div className="followers">
        <h1>Github Profile.</h1>
        <h5>Followers: {follower}</h5>
      </div>
    </div>
  )
}

export default About
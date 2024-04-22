import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Headers() {
  return (
    <div className='font-bold'>
        <ul className='flex gap-32 justify-center py-4 bg-black/30 text-white'>
            <li><NavLink className={({isActive}) => (`
            ${isActive ? "text-zinc-500" : "text-white"}
            `)} to="/">Portfolio</NavLink></li>
            <li><NavLink className={({isActive}) => (`
            ${isActive ? "text-zinc-500" : "text-white"}
            `)} to="/about">About</NavLink></li>
            <li><NavLink className={({isActive}) => (`
            ${isActive ? "text-zinc-500" : "text-white"}
            `)} to="/contact">Contact</NavLink></li>
            
        </ul>
    </div>
  )
}

export default Headers
import React from 'react'
import { NavLink, Link } from 'react-router'

function Layout() {
  return (
    <div>
        <nav className='flex gap-4 cursor-pointer'>
            <span>About</span>
            <NavLink  to='/dashboard'><span>Dashboard</span></NavLink>
        </nav>
    </div>
  )
}

export default Layout
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'


function Dashboard() {
  return (
    <div>
        <nav className='flex gap-4 cursor-pointer'>
            <Link to='/'><span>Home</span></Link>
            <NavLink to='profile' className={({isActive}) => isActive ? "active" : ""}><span>Profile</span></NavLink>
            <NavLink to='settings' className={({isActive}) => isActive ? "active" : ""}><span>Settings</span></NavLink>
        </nav>
        <Outlet /> 
    </div>
  )
}

export default Dashboard
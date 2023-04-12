import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';
import "./Header.css"

const Header = () => {
    return (
        <div className='background'>
            <div className=' grid grid-cols-1 md:grid-cols-3 items-center p-4 mx-28'>
                <Link to='/' className='text-3xl font-semibold'>Jobs Site Hub</Link>
                <nav className='grid grid-cols-1 md:grid-cols-3 gap-3 font-semibold text-1xl'>
                    <NavLink className={({ isActive }) => isActive ? "primary" : ''} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "primary" : ''} to="/jobs">Applied Jobs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "primary" : ''} to="/blogs">Blogs</NavLink>
                </nav>
                <Link className='flex justify-end'><button className='primary-btn'>Start Applying</button></Link>
            </div>
        </div>
    );
};

export default Header;
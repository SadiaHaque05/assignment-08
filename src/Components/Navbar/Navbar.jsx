import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/logo.png';
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
            <li className='font-bold'><NavLink to='/apps'>Apps</NavLink></li>
            <li className='font-bold'><NavLink to='/installation'>Installation</NavLink></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">
              <img className='h-[30px] w-[30px] ' src={logo} alt="" />
              <p className="inline-block font-bold
                bg-gradient-to-r from-[#632ee3] to-[#9f62f2]
                bg-clip-text text-transparent">HERO.IO</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
      <li className='font-bold'><NavLink to='/apps'>Apps</NavLink></li>
      <li className='font-bold'><NavLink to='/installation'>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://github.com/SadiaHaque05" target="_blank" rel="noopener noreferrer">
      <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-xl border-none flex items-center gap-2 hover:opacity-90"> <IoLogoGithub size={20} /> Contribute</button>
    </a>
  </div>
</div>
    );
};

export default Navbar;

import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query';
import logo from '../../assets/octalink_logo.png'
import './Navbar.css'


const NavBar = () => {

  const {user, theme, setTheme, logOut} = useContext(AuthContext)
  const location = useLocation();
  const axiosPublic = useAxiosPublic()










  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme('black');
    } else {
      setTheme('light');
    }
  };

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const { data: userDetails, isLoading } = useQuery({
    queryKey: ['userDetails'],
    queryFn: async () => {
      const res = await axiosPublic.get('/user');
      return res.data;
    }
  });
  

  const currentUser = userDetails?.find(userDetail => userDetail?.email === user?.email);

  useEffect(() => {
    if (currentUser) {
      console.log('Current User:', currentUser);
    }
  }, [currentUser]); // Only log currentUser when it changes

  


  const isActive = (path) => location.pathname === path ? 'active' : '';

  const NavOptions = <>
    <li className={`text-gray-400 tracking-wider font-bold mr-4 ${isActive('/')}`}>
      <Link to='/'>
        HOME
      </Link>
    </li>
    <li className={`text-gray-400 tracking-wider font-bold mr-4 ${isActive('/about')}`}>
      <Link to='/about'>
        ABOUT
      </Link>
    </li>
    <li className={`text-gray-400 tracking-wider font-bold mr-4 ${isActive('/products')}`}>
      <Link to='/products'>
        PRODUCTS
      </Link>
    </li>
  
    <li className={`text-gray-400 tracking-wider font-bold mr-4 ${isActive('/contact')}`}>
      <Link to='/contact'>
        CONTACTS
      </Link>
    </li>
  </>
  return (
    <div className="navbar mx-auto container my-4">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {NavOptions}
        </ul>
      </div>
      <Link to={'/'}>
      <div className="text-xl flex items-center gap-2 ">
        <img src={logo} className='h-[60px] rounded-xl' />
        <p className='font-bold hidden md:block lg:block xl:block'>OCTALINK GLOBAL <br /> SOURCING</p>
        </div></Link>
      
    </div>
 
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal ">
   
      {NavOptions}
      </ul>
    </div>
   
    <div className="navbar-end gap-4 flex items-center">
     {
      user && (
        <div className='relative group'>
          <img className='w-[50px] h-[50px] object-cover rounded-full'  src={currentUser?.image} alt="" />
          <div className='absolute -bottom-4/2 mb-12 left-1/2 transform -translate-x-3/4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200'>
          {
            currentUser?.role === "admin" && <div>
            
            <Link to='/dashboard'><button className={`${theme === 'light' ? 'mt-2 px-4 py-2 rounded bg-black text-white font-bold' : 'mt-2 px-4 py-2 rounded bg-white text-black font-bold'}`}>Dashboard</button></Link>
          </div>
          }
          </div>
        </div>
      )
     }
      {user ? (
        <button
          className='p-3 md:p-4 lg:p-4 xl:p-4 text-[13px] tracking-wider md:text-[14px] lg::text-[14px] xl:text-[14px] font-bold   border-0 text-white bg-black duration-700'
          onClick={handleSignOut}
        >
          SIGN OUT
        </button>
      ) : (
        <Link to="/login">
          <button
            className={"p-4 text-[14px] font-medium  tracking-wider border-0 text-white bg-black  "}
          >
            GET STARTED
          </button>
        </Link>
      )}

 
    </div>
    
  </div>
  );
};

export default NavBar;
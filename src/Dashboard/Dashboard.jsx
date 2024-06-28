
import { FaBars, FaCommentDots, FaHome, FaPen, FaPlus, FaServicestack, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import logo from '../assets/logo_Asset-1-1.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useSwipeable } from 'react-swipeable';
import { Helmet } from 'react-helmet';




const Dashboard = () => {

  const axiosPublic = useAxiosPublic()

  const {user} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const { data: userDetails, isLoading, isError, error } = useQuery({
    queryKey: ['userDetails'],
    queryFn: async () => {
      const res = await axiosPublic.get('/user');
      return res.data;
    }
  });

    
  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    onSwipedRight: () => setIsOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (isLoading) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }
  const currentUser = userDetails?.find(userDetail => userDetail?.email === user?.email);
  
  if (isError) {
    return <p>Error: {error.message}</p>;
  }


  
  return (
    <div className='flex gap-10 font-forum'>
  
      <Helmet>
      <meta charSet="utf-8" />
      <title>Dashboard - OCTALINK</title>

      </Helmet>



      <div {...handlers} className="relative flex  w-full my-auto">
      <div className="lg:hidden">
        <button
          className="text-gray-600 dark:text-gray-400 p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>
      
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 h-screen overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="text-xl flex items-center gap-2 justify-center p-4">
          <img src={logo} className='h-[50px] rounded-xl' alt="Logo" />
          <p className='text-white font-sans hidden md:block lg:block xl:block'>OCTALINK</p>
        </div>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img className="object-cover w-24 h-24 mx-2 rounded-full" src={currentUser?.image} alt="avatar" />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{currentUser?.name}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{currentUser?.email}</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <NavLink to='profile'>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FaServicestack />
                <span className="mx-4 font-medium">User Dashboard</span>
              </a>
            </NavLink>

            <NavLink to='usersmanagement'>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FaUser />
                <span className="mx-4 font-medium">Manage Users</span>
              </a>
            </NavLink>

            <NavLink to='addproducts'>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FaPlus />
                <span className="mx-4 font-medium">Add Products</span>
              </a>
            </NavLink>

            <NavLink to='editproducts'>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FaPen />
                <span className="mx-4 font-medium">Edit Products</span>
              </a>
            </NavLink>

            <NavLink to='usercontacts'>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FaCommentDots />
                <span className="mx-4 font-medium">User Contacts</span>
              </a>
            </NavLink>

            <div className="h-[1px] bg-white my-10"></div>

            <NavLink to='/'>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <FaHome />
                <span className="mx-4 font-medium">Home</span>
              </a>
            </NavLink>
          </nav>
        </div>
      </aside>

      <div className="flex-1 p-4 lg:pl-72 ">
      <Outlet></Outlet>
      </div>
    </div>



    </div>
  );
};

export default Dashboard;
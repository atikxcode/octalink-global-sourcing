
import { FaHome, FaPen, FaPlus, FaServicestack, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';



const Dashboard = () => {
  
  return (
    <div className='flex'>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    <a href="#" className="mx-auto">
        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
    </a>

    <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <NavLink to='profile' ><a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <FaServicestack />

                <span className="mx-4 font-medium">User Dashboard</span>
            </a></NavLink>

            <NavLink to='usersmanagement'><a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                <FaUser></FaUser>

                <span className="mx-4 font-medium">Manage Users</span>
            </a></NavLink>

            <NavLink to='addproducts'><a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
            <FaPlus />

                <span className="mx-4 font-medium">Add Products</span>
            </a></NavLink>

            <NavLink to='editproducts'><a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
            <FaPen />

                <span className="mx-4 font-medium">Add Products</span>
            </a></NavLink>

          <div className="h-[1px] bg-white my-10"></div> 

            <NavLink to='/'>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <FaHome />

                <span className="mx-4 font-medium">Home</span>
            </a>
            </NavLink>
        </nav>
    </div>
</aside>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
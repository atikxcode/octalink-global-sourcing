import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const Product = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const collection = location.state.collection;
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSubCategory, setFilteredSubCategory] = useState([]);

  console.log(collection);

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);





  const {isPending, isError, error, refetch, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get('/products');
      return res.data;
    }
  });



  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    onSwipedRight: () => setIsOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  
  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }



  let filteredProducts = products.filter(product => product.category === collection)
 
  // console.log(filteredProducts)
  

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const selectedSubCategory =  (subcategory) => {
    // console.log(subcategory)
    const filtered = filteredProducts?.filter(product => product?.subcategory === subcategory)
    // console.log(filteredSubCategory)
    setFilteredSubCategory(filtered)
  }




  return (


<div {...handlers} className="relative flex  w-full my-auto">
      <div className="lg:hidden">
        <button
          className="text-gray-600 dark:text-gray-400 p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>
      
      <aside className={` inset-y-0 left-0 z-30 w-64 h-screen overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out fixed sm:fixed md:fixed lg:static xl:static rounded-tr-[20px]`}>
        <div className="text-xl flex items-center gap-2 justify-center p-4">
          {/* <img src={logo} className='h-[50px] rounded-xl' alt="Logo" /> */}
          <p className='text-white text-lg font-sans hidden md:block lg:block xl:block uppercase'>{collection}'s collection</p>
        </div>

        <div className="flex flex-col items-center mt-6 -mx-2">
          {/* <img className="object-cover w-24 h-24 mx-2 rounded-full" src={currentUser?.image} alt="avatar" />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{currentUser?.name}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{currentUser?.email}</p> */}
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            
          {
        [...new Set(filteredProducts?.map(product => product.subcategory))].map(subcategory => 
          <a key={subcategory}  onClick={() => selectedSubCategory(subcategory)} className="flex italic font-sans tracking-[2px] uppercase items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer">
          <span className="mx-4 font-semibold">{subcategory.replace(/-/g, ' ')}</span>
        </a>
        )
      }
            

            
          </nav>
        </div>
      </aside>

      <div className="flex-1  md:p-0 lg:p-4 xl:p-10 ">

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
        {
    (filteredSubCategory.length > 0 ? filteredSubCategory : filteredProducts)?.map((product, idx) => (
      <div key={product?._id}>
        <div className={`bg-base-100 rounded-tr-[20%] rounded-bl-[20%] font-sans font-semibold mx-auto w-[90%] md:w-[90%] lg:w-[350px] xl:w-[350px] p-4 flex flex-col items-center gap-6 auto hover:translate-y-[-10px] duration-500`}>
          <img className='h-[300px] hover:scale-110 hover:rotate-[10deg] duration-500' src={product?.image} alt="" />
          <p className='text-gray-600 italic'>
            <span className='font-bold text-black tracking-[1px]'>Fabric/Material:</span> {product?.fabricOrMaterial}
          </p>
          <button onClick={()=>document.getElementById(`${idx}`).showModal()} className='p-3 italic font-semibold rounded-tr-[20%] rounded-bl-[20%] md:p-4 lg:p-4 xl:p-4 text-[13px] tracking-wider md:text-[14px] lg:text-[14px] xl:text-[14px] border-0 text-white bg-black hover:bg-[#797F54] duration-300'>
            View Details
          </button>
          <dialog id={`${idx}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col gap-4 items-center">
          <h3 className="font-bold text-xl uppercase">{product?.category}'s Category</h3>
          <img className='h-[300px] hover:scale-110 duration-500' src={product?.image} alt="" />
          <h3 className="font-bold text-lg uppercase italic">{product?.subcategory}</h3>
          <p className='text-[14px] italic  text-center'><span className='font-bold text-[16px]'>Fabric/Material:</span> {product?.fabricOrMaterial}</p>
          <p className='text-[14px] italic text-center'><span className='font-bold text-[16px]'>Design Details:</span> {product?.designDetails}</p>
          <p className='text-[14px] italic text-center'><span className='font-bold text-[16px]'>Sustainability:</span> {product?.sustainability}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
        </div>
      </div>
      
    ))
    
  }
        </div>

       


      
      </div>

      
    </div>







  

  );
};

export default Product;
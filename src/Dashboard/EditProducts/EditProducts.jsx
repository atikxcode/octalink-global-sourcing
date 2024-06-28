import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const categoryOptions = {
  kids: ["coat-pant", "denim", "sweaters", "hoodie", "jacket", "shorts", "swipe-shirt", "t-shirt", "trouser"],
  women: ["coat-long-pants", "coat-tops", "denim-long-pants", "ladies-skirts", "tops", "twill", "sweaters"],
  men: ["coat-jacket", "hoodie", "mens-cargo-pant", "mens-long-pant", "polo-shirt", "sweaters", "swipe-shirt", "t-shirt"]
};



const EditProducts = () => {

  const axiosPublic = useAxiosPublic();

  // const [category, setCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedSubCategory, setSelectedSubCategory] = useState([])

  const {isPending, isError, error, refetch, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get('/products');
      return res.data;
    }
  });


  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();



  
  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }

  // console.log(products)
  

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

 
  const handleCategorySelect = (newValue) => {
    // setCategory(newValue);
    // console.log(category)
    let filteredCategory = products?.filter(product => product?.category === newValue);
    // console.log(selectedCategory)
    setSelectedCategory(filteredCategory)
    refetch();
    
  };

  const handleSubcategorySelect = (value) => {
    // console.log(value)
    // console.log(selectedCategory);
    let filteredSubCategory = selectedCategory?.filter(product => product?.subcategory === value)
    // console.log(filteredSubCategory)
    setSelectedSubCategory(filteredSubCategory)
    refetch();
    // console.log(selectSubCategory)

  }

  const resetAll = () => {
    setSelectedCategory([])
    setSelectedSubCategory([])
    refetch();
  }

  // const onSubmit = async (data) => {

  //   const imageFile = {image: data.image[0]}
  //   const res = await axiosPublic.post(image_hosting_api, imageFile, {
  //     headers: {
  //       'content-type' : 'multipart/form-data'
  //     }
  //   })
  //   if(res.data.success){
  //     const newProductImage = {

  //               image: res.data.data.display_url,
                
  //     }
  //     console.log(newProductImage)
  //     axiosPublic.put(`/products/image/id`, newProductImage)
  //     .then(res => {
  //       if(res.data.insertedId){
  //         Swal.fire({
  //           toast:true,
  //           position: "top-end",
  //           icon: "success",
  //           title: "Product Updated to the server Successfully.",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
      
  
  //       } 
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  //   }

  // };



  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/products/${id}`)
          .then(response => {
            const data = response.data;
            if (data.deletedCount > 0) {
              Swal.fire({
                // toast:true,
                title: "Deleted!",
                text: "Product Has Been Deleted",
                icon: "success"
              }).then(() => {
                window.location.reload();
              });
              
            }
            
          })
          
          .catch(error => {
            console.error('Error deleting file:', error);
            Swal.fire({
              // toast:true,
              title: "Error",
              text: "An error occurred while deleting the file.",
              icon: "error"
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          // toast:true,
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  };

  return (
<div className="my-20 mx-auto container min-h-screen">
  <div className="flex flex-col  mb-20 items-center">
    <h2 className='font-sans tracking-[2px] text-center font-semibold text-[16px] text-[#797F54] mb-8'>Luxury Fabrics, Timeless Elegance</h2>
    <p className="text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-normal text-center">Discover the Art of Quality and Craftsmanship in Every Thread</p>
  </div>

<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a onClick={() => handleCategorySelect('kids')}>Kids</a>
          <ul className="p-2">
            <li onClick={() => handleSubcategorySelect('coat-pant')}><a>Coat Pant</a></li>
            <li onClick={() => handleSubcategorySelect('denim')}><a>Denim</a></li>
            <li onClick={() => handleSubcategorySelect('hoodie')}><a>Hoodie</a></li>
            <li onClick={() => handleSubcategorySelect('jacket')}><a>Jacket</a></li>
            <li onClick={() => handleSubcategorySelect('shorts')}><a>Shorts</a></li>
            <li onClick={() => handleSubcategorySelect('swipe-shirt')}><a>Swipe Shirt</a></li>
            <li onClick={() => handleSubcategorySelect('t-shirt')}><a>T-shirt</a></li>
            <li onClick={() => handleSubcategorySelect('trouser')}><a>Trouser</a></li>
            {/* <li onClick={() => handleSubcategorySelect('kids')}><a>Sweaters</a></li> */}
          </ul>
        </li>
        <li>
          <a onClick={() => handleCategorySelect('women')}>Women</a>
          <ul className="p-2">
            <li onClick={() => handleSubcategorySelect('coat-long-pants')}><a>Coat Long Pants</a></li>
            <li onClick={() => handleSubcategorySelect('coat-tops')}><a>Coat Tops</a></li>
            <li onClick={() => handleSubcategorySelect('denim-long-pants')}><a>Denim Long Pants</a></li>
            <li onClick={() => handleSubcategorySelect('ladies-skirts')}><a>Ladies Skirts</a></li>
            <li onClick={() => handleSubcategorySelect('tops')}><a>Tops</a></li>
            <li onClick={() => handleSubcategorySelect('twill')}><a>Twill</a></li>
            {/* <li onClick={() => handleSubcategorySelect('coat-pant')}><a>Sweaters</a></li> */}
          </ul>
        </li>
        <li>
          <a onClick={() => handleCategorySelect('men')}>Mens</a>
          <ul className="p-2">
            <li onClick={() => handleSubcategorySelect('coat-jacket')}><a>Coat Jacket</a></li>
            <li onClick={() => handleSubcategorySelect('hoodie')}><a>Hoodie</a></li>
            <li onClick={() => handleSubcategorySelect('mens-cargo-pant')}><a>Mens Cargo Pant</a></li>
            <li onClick={() => handleSubcategorySelect('mens-long-pant')}><a>Mens Long Pant</a></li>
            <li onClick={() => handleSubcategorySelect('polo-shirt')}><a>Polo Shirt</a></li>
            <li onClick={() => handleSubcategorySelect('sweaters')}><a>Sweaters</a></li>
            <li onClick={() => handleSubcategorySelect('swipe-shirt')}><a>Swipe Shirt</a></li>
            <li onClick={() => handleSubcategorySelect('t-shirt')}><a>T-Shirt</a></li>
            {/* <li onClick={() => handleSubcategorySelect('coat-long-pants')}><a>Sweaters</a></li> */}
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" onClick={resetAll}>Show All Products</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10" >
    <li className="">
        <details>
          <summary onClick={() => handleCategorySelect('kids')}>Kids</summary>
          <ul className="p-2 w-36">
          <li onClick={() => handleSubcategorySelect('coat-pant')}><a>Coat Pant</a></li>
            <li onClick={() => handleSubcategorySelect('denim')}><a>Denim</a></li>
            <li onClick={() => handleSubcategorySelect('hoodie')}><a>Hoodie</a></li>
            <li onClick={() => handleSubcategorySelect('jacket')}><a>Jacket</a></li>
            <li onClick={() => handleSubcategorySelect('shorts')}><a>Shorts</a></li>
            <li onClick={() => handleSubcategorySelect('swipe-shirt')}><a>Swipe Shirt</a></li>
            <li onClick={() => handleSubcategorySelect('t-shirt')}><a>T-shirt</a></li>
            <li onClick={() => handleSubcategorySelect('trouser')}><a>Trouser</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary onClick={() => handleCategorySelect('women')}>Women</summary>
          <ul className="p-2 w-36">
            <li onClick={() => handleSubcategorySelect('coat-long-pants')}><a>Coat Long Pants</a></li>
            <li onClick={() => handleSubcategorySelect('coat-tops')}><a>Coat Tops</a></li>
            <li onClick={() => handleSubcategorySelect('denim-long-pants')}><a>Denim Long Pants</a></li>
            <li onClick={() => handleSubcategorySelect('ladies-skirts')}><a>Ladies Skirts</a></li>
            <li onClick={() => handleSubcategorySelect('tops')}><a>Tops</a></li>
            <li onClick={() => handleSubcategorySelect('twill')}><a>Twill</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary onClick={() => handleCategorySelect('men')}>Mens</summary>
          <ul className="p-2 w-36">

            <li onClick={() => handleSubcategorySelect('coat-jacket')}><a>Coat Jacket</a></li>
            <li onClick={() => handleSubcategorySelect('hoodie')}><a>Hoodie</a></li>
            <li onClick={() => handleSubcategorySelect('mens-cargo-pant')}><a>Mens Cargo Pant</a></li>
            <li onClick={() => handleSubcategorySelect('mens-long-pant')}><a>Mens Long Pant</a></li>
            <li onClick={() => handleSubcategorySelect('polo-shirt')}><a>Polo Shirt</a></li>
            <li onClick={() => handleSubcategorySelect('sweaters')}><a>Sweaters</a></li>
            <li onClick={() => handleSubcategorySelect('swipe-shirt')}><a>Swipe Shirt</a></li>
            <li onClick={() => handleSubcategorySelect('t-shirt')}><a>T-Shirt</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 my-20 gap-10">
{
  (selectedCategory?.length > 0 ? (selectedSubCategory?.length > 0 ? selectedSubCategory : selectedCategory) : products)?.map(product => <div key={product._id}>
    <div className=" flex flex-col items-center bg-white px-6 py-4 rounded-tl-[50px] rounded-br-[50px] hover:translate-y-[-20px] duration-500">
      <p className="uppercase tracking-[2px] mb-2 text-xl font-semibold font-sans">{product?.category}</p>
      <img className="h-[340px] full bg-gray-100 p-4 rounded-tl-[50px] rounded-br-[50px]" src={product?.image} alt="" />
      <div className="flex items-center  justify-around w-full">
        <div>
        <h2 className="text-[#797F54] uppercase tracking-[2px] font-[17px] mt-4">{product?.subcategory?.replace(/-/g, ' ')}</h2>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Link to={`/dashboard/editproduct/${product?._id}`}><button className='p-3 md:p-4 lg:p-4 xl:p-4 text-[13px] tracking-wider md:text-[14px] lg::text-[14px] xl:text-[14px] rounded-2xl font-bold   border-0 text-white bg-black hover:bg-[#797F54] duration-300'>Edit</button></Link>
          <button onClick={() => handleDelete(product?._id)} className='p-3 md:p-4 lg:p-4 xl:p-4 text-[13px] tracking-wider md:text-[14px] lg::text-[14px] xl:text-[14px] rounded-2xl font-bold   border-0 text-white bg-black hover:bg-[#797F54] duration-300'>Delete</button>
        </div>
      </div>
    </div>
  </div>)
}
</div>


</div>
  );
};

export default EditProducts;
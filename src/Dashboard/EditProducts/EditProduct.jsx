import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Controller, useForm } from "react-hook-form";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const categoryOptions = {
  kids: ["coat-pant", "denim", "sweaters", "hoodie", "jacket", "shorts", "swipe-shirt", "t-shirt", "trouser"],
  women: ["coat-long-pants", "coat-tops", "denim-long-pants", "ladies-skirts", "tops", "twill", "sweaters"],
  men: ["coat-jacket", "hoodie", "mens-cargo-pant", "mens-long-pant", "polo-shirt", "sweaters", "swipe-shirt", "t-shirt"]
};


const EditProduct = () => {

  const product = useLoaderData();

  const axiosPublic = useAxiosPublic();


  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  
  const category = watch("category");
  
  React.useEffect(() => {
      if (category) {
          setSubCategoryOptions(categoryOptions[category]);
      } else {
          setSubCategoryOptions([]);
      }
  }, [category]);
  
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success){
      const newProducts = {
                category: data.category,
                subcategory: data.subcategory,
                image: res.data.data.display_url,
                fabricOrMaterial: data.fabricORmaterial,
                designDetails: data.designDetails,
                sustainability: data.sustainability
      }
      console.log(newProducts)
      axiosPublic.put(`/products/image/${product?._id}`, newProducts)
      .then(res => {
        if(res.data.modifiedCount > 0){
          Swal.fire({
            toast:true,
            position: "top-end",
            icon: "success",
            title: "Product Updated Successfully.",
            showConfirmButton: false,
            timer: 1500
          });
      
  
        } 
      })
      .catch(error => {
        console.error(error)
      })
    }
  
   
  };
  

  return (
    <div className=' mx-auto container my-auto'>

    <div className='flex justify-center my-20'>
      <h2 className='text-[#797F54] text-4xl'>Edit Product Details</h2>
    </div>
  <form onSubmit={handleSubmit(onSubmit)}>


   <div className='flex-col md:flex lg:flex xl:flex items-center   rounded-xl shadow-custom'>


     <div className='flex flex-col flex-1 p-4  '>
       <div className='flex flex-col items-start gap-4'>
       <label  className="text-[14px]    tracking-[2px] font-sans text-black" >Category</label>
       <select  className="block w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"  {...register("category", { required: true })}>
                  <option value={product?.category}>{product?.category}</option>
                  <option value="kids">Kids</option>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
              </select>
              {errors.category && <span>This field is required</span>}
         
        
      
       </div>

       <div  className='flex flex-col items-start gap-4'>
       <label   className="text-[14px]  tracking-[2px] font-sans text-black" >Sub Category</label>
       <Controller
                  name="subcategory"
                  control={control}
                  defaultValue={product?.subcategory || ''}
                  
                  render={({ field }) => (
                      <select className="block  w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" {...field}>
                          <option value="">Select...</option>
                          {subCategoryOptions.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                          ))}
                      </select>
                  )}
              />
              {errors.subcategory && <span>This field is required</span>}
         
      
       </div>

       <div  className='flex flex-col items-start gap-4'>
       <label   className="text-[14px] tracking-[2px] font-sans text-black" >Photo</label>
       <input required {...register('image', {required: true})}  type="file" className="file-input w-full max-w-xs font-sans" />
       </div>


       <div className='flex flex-col items-start gap-4 mt-6'>
         <label  className="text-[14px]    tracking-[2px] font-sans text-black" >Fabric/Material</label>
         <input  {...register("fabricORmaterial", { required: true })} type="text" name="fabricORmaterial" placeholder="Fabric/Material Details" className="block  w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.fabricORmaterial && <span className='text-red-600'>This field is required</span>}
         </div>


         <div className='flex flex-col items-start gap-4 mt-6'>
         <label  className="text-[14px]    tracking-[2px] font-sans text-black" >Deisgn Details</label>
         <input {...register("designDetails", { required: true })} type="text" name="designDetails" placeholder="Give Design Details" className="block  w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.designDetails && <span className='text-red-600'>This field is required</span>}
         </div>

         <div className='flex flex-col items-start gap-4 mt-6'>
         <label  className="text-[14px]    tracking-[2px] font-sans text-black" >Sustainability</label>
         <input {...register("sustainability", { required: true })} type="text" name="sustainability" placeholder="Give Sustainability Information" className="block  w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.sustainability && <span className='text-red-600'>This field is required</span>}
         </div>


     
     <button 
         type="submit" 
         className='mt-6 btn bg-black text-white text-sm text-center hover:bg-[#797F54] duration-500' 
         
       >
         Confirm Edit
       </button>
     
     </div>
   </div>
 </form>
</div>
  );
};

export default EditProduct;
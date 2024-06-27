import { useContext, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Profile = () => {
  const axiosPublic = useAxiosPublic();





  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);


  const {isPending, isError, error, refetch, data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: async () => {
      const res = await axiosPublic.get('/user');
      return res.data;
    }
  });
 



  const buttonUnlock = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };

  const { register, handleSubmit, reset,  formState: { errors }} = useForm();




  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }

  

  if (isError) {
    return <p>Error: {error.message}</p>;
  }


  const currentUser = userDetails?.filter(users => users?.email == user?.email)

  // console.log(currentUser)



  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success){
      const updatedProfile = {
                name: data.name,
                image: res.data.data.display_url,
                
      }
      console.log(updatedProfile)
      axiosPublic.put(`/user/${currentUser[0]?._id}`, updatedProfile)
      .then(res => {
        if(res.data.modifiedCount > 0){
          Swal.fire({
            toast:true,
            position: "top-end",
            icon: "success",
            title: "Your Profile Updated Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
         

          setDisabled(true)

        } 
      })
      .catch(error => {
        console.error(error)
      })
    }

   
  };

  return (
    <div className=' mx-auto container my-10 md:my-20 lg:my-32 xl:my-32  h-auto'>
       <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex p-4 justify-end md:justify-end lg:justify-end xl:justify-end w-full '>
          <button  onClick={buttonUnlock} className="text-white text-[14px] font-sans font-semibold h-[40px] w-[150px] bg-black hover:bg-[#797F54] duration-300">
            {disabled ? 'EDIT' : 'CANCEL'}
          </button>
        </div>

        
        <div className='flex flex-col items-center justify-center rounded-xl shadow-custom mx-auto '>
         
         <div>
           <img className='h-[200px] w-[200px] rounded-[50%] p-4' src={currentUser[0]?.image} alt="" />
         </div>

         <div className='flex flex-col flex-1 p-4  '>
           <div className='flex flex-col items-start gap-4'>
           <label  className="text-[14px] tracking-[2px] font-sans text-black" >User Name</label>
           <input
             required
             defaultValue={currentUser[0]?.name} 
             {...register("name", {required: true})} 
             disabled={disabled}
             className="block w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
           />
           </div>

           <div  className='flex flex-col items-start gap-4'>
           <label   className="text-[14px]  tracking-[2px] font-sans text-black" >Email</label>
           <input 
             defaultValue={currentUser[0]?.email} 
             {...register("email")} 
             readOnly
             className="block  w-full font-sans px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
           />
           </div>

           <div  className='flex flex-col items-start gap-4'>
           <label   className="text-[14px] tracking-[2px] font-sans text-black" >Photo</label>
           <input required {...register('image', {required: true})} disabled={disabled} type="file" className="file-input w-full max-w-xs font-sans" />
           </div>


         
         <button 
             type="submit" 
             className='mt-6 btn bg-black text-white text-sm text-center hover:bg-[#797F54] duration-500' 
             disabled={disabled}
           >
             Save
           </button>
         
         </div>

       </div>
        

      </form>
    </div>
  );
};

export default Profile;
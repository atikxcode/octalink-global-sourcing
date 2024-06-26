import React, { useContext, useEffect } from 'react';
import img from '../../assets/contactimg.jpg'
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import 'aos/dist/aos.css'
import Aos from "aos";
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

import Swal from 'sweetalert2'



const Contact = () => {

  const axiosPublic = useAxiosPublic();

  const {user} = useContext(AuthContext)

  useEffect(() => {
    Aos.init();
  },[])


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullName: user ? user?.displayName : '',
      email: user ? user?.email : ''
    }
  });

  const onSubmit = data => {
    
    const UserMessage = {
      userName: data.fullName,
      userEmail: data.email,
      userPhoneNumber: data.phone,
      userMessage: data.message,
      status: 'unread'
    }
    console.log(UserMessage);
    axiosPublic.post('/usermessage', UserMessage)
    .then(res => {
      if(res.data.insertedId){
        reset(),
        Swal.fire({
          toast:true,

          position: "top-end",
          icon: "success",
          title: "Thanks For Contacting Us. We Will Reach Out To You As Soon As Possible.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  };


  return (
    <div className='mt-24 '>

      <div className='flex flex-col  gap-8 items-center mx-auto container'>
      <h2 className='text-5xl mb-10 font-normal'>Our Contact</h2>
      <img className='h-[400px] w-[90%] bg-no-repeat mb-20 bg-cover bg-center rounded-lg' src={img} alt="" />
      
      </div>


     <div className='mx-auto container' data-aos="fade-up"
     data-aos-duration="1500">

     <div className='flex flex-col items-center mb-20 mt-20 gap-8'>
     <h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">OUR CONTACT</h2>
     <p className="text-5xl font-normal">Get In Touch With Octalink Global Sourcing</p>
     </div>

     <div className='flex gap-16'>

<div className="flex flex-col border-[1px]  border-gray-400 p-8">
<iframe className='w-[600px] h-[450px] mb-8 filter grayscale hover:filter-none transition-all duration-300' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.856244076833!2d90.39696697533932!3d23.85923797859631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c519d145d4f5%3A0xd2064d7d7b9e674c!2sOctalink%20Global%20Sourcing!5e0!3m2!1sen!2sbd!4v1719182793802!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
<div className='flex flex-col gap-2 items-start'>
  <h2 className='font-sans font-semibold text-gray-500 tracking-[1px]'>ADDRESS</h2>
  <p className='text-gray-500 text-lg font-normal hover:text-black duration-500 mb-8'>16 Road No.11, Dhaka 1230</p>

  <h2 className='font-sans font-semibold text-gray-500 tracking-[1px]'>CONTACT</h2>
  <p className='text-gray-500 text-lg font-normal hover:text-black duration-500 '>+880 1718854866</p>
  <p className='text-gray-500 text-lg font-normal hover:text-black duration-500 mb-8'>octalink@gmail.com</p>

  <h2 className='font-sans font-semibold text-gray-500 tracking-[1px] mb-2'>FOLLOW US</h2>
 <div className='flex gap-4'>
 <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaFacebookF /></p>
<p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaTwitter /></p>
<p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaInstagram /></p>
<p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaDribbble /></p>
 </div>
</div>


</div>

    <div className='border-[1px]  border-gray-400 p-8'>

  <h2 className="text-3xl font-normal mb-6">Send us a message</h2>
  <p className='font-sans text-lg font-normal mb-10 text-gray-500'>We're here to assist you with any inquiries or concerns you may have. Please don't hesitate to reach out and share your thoughts, questions, or feedback. Your message is important to us, and we look forward to hearing from you soon.</p>
   

  <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 flex flex-col gap-4">
          <label className="text-gray-500 font-sans font-semibold text-[12px] tracking-[1px]" htmlFor="fullName">
            FULL NAME*
          </label>
          <input
            className="bg-inherit border-b-[1px] border-gray-400 font-normal font-sans text-lg   w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
            id="fullName"
            type="text"
            placeholder="Your Full Name"
            defaultValue={user ? user.displayName : ''}
            {...register('fullName', { required: true })}
          />
          {errors.fullName && <p className="text-red-500 text-xs italic">Full Name is required.</p>}
        </div>
        <div className="mb-4 flex gap-8">

          <div className='w-1/2'>
          <label className="text-gray-500 font-sans font-semibold text-[12px] tracking-[2px]" htmlFor="email">
            Email
          </label>
          <input
            className="bg-inherit border-b-[1px] border-gray-400 font-normal font-sans text-lg   w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
            id="email"
            type="email"
            placeholder="Your Email"
            defaultValue={user ? user.email : ''}
            {...register('email', { required: true })}
          />
          {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
          </div>

          <div className='w-1/2'>
          <label className="text-gray-500 font-sans font-semibold text-[12px] tracking-[2px]" htmlFor="phone">
            Phone
          </label>
          <input
          className="bg-inherit border-b-[1px] border-gray-400 font-normal font-sans text-lg   w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
            id="phone"
            type="number"
            placeholder="Your Phone Number"
            {...register('phone', { required: true })}
          />
          {errors.phone && <p className="text-red-500 text-xs italic">Phone number is required.</p>}
          </div>

        </div>


        <div className="mb-4 mt-8">
          <label className="text-gray-500 font-sans font-semibold text-[12px] tracking-[2px]" htmlFor="message">
            Message
          </label>
          <textarea
           className="bg-inherit border-b-[1px] border-gray-400 font-normal font-sans text-lg   w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-black"
            id="message"
            rows="6"
            placeholder="Your Message"
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">Message is required.</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-[14px] w-full text-white font-sans font-medium mt-10 bg-black translate-y-[40px]  px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
   
    </div>

    </div>


     </div>

     <div className=" mt-32 mb-0 w-full p-32 bg-[#f8f2e7]" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="container mx-auto">

      <div className="flex flex-row  gap-16">

        {/* 1st part */}
        <div className=" w-1/2">

        <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3 " defaultChecked /> 
        <div className="collapse-title text-[22px] font-medium">
          How long has your company has been established?
        </div>
        <div className="collapse-content"> 
          <p className="font-sans font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptas blanditiis dolor reiciendis </p>
        </div>
      </div>

        <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3 "  /> 
        <div className="collapse-title text-[22px] font-medium">
          How many people work at Octalink Global Sourcing
        </div>
        <div className="collapse-content"> 
        <p className="font-sans font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptas blanditiis dolor reiciendis </p>

        </div>
      </div>

        <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3 " /> 
        <div className="collapse-title text-[22px] font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div>


      <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-[22px] font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div>

      <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-[22px] font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
        </div>
        {/* 2nd part */}

        <div className="w-1/2 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#797F54] font-sans font-semibold tracking-[8px] text-[16px]">FAQS</h2>
          <p className="text-5xl font-normal mb-10">Frequently Asked Questions</p>
          <p className="font-normal text-[16px]  font-sans text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <div className="divider "></div> 

          <div className="flex flex-row justify-between">
            
            <div>
              <h2 className="font-sans text-[14px] font-semibold text-[#797F54]">PHONE</h2>
              <p className="text-xl font-normal mt-2 text-gray-500">+880 1999999999</p>
              <p className="text-xl font-normal mt-2 text-gray-500">+880 1826766666</p>
            </div>

            <div>
              <h2 className="font-sans text-[14px] font-semibold text-[#797F54]">EMAIL</h2>
              <p className="text-xl font-normal mt-2 text-gray-500">octalink@gmail.com</p>
              <p className="text-xl font-normal mt-2 text-gray-500">octalinkglob@gmail.com</p>
            </div>
          </div>

        </div>

        </div>
      </div>

      </div>

    </div>

    </div>
  );
};

export default Contact;
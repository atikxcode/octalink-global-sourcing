import React, { useContext, useEffect } from 'react';
import img from '../../assets/contactimg.jpg'
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import 'aos/dist/aos.css'
import Aos from "aos";
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';



const Contact = () => {

  const axiosPublic = useAxiosPublic();

  const {user} = useContext(AuthContext)

  useEffect(() => {
    Aos.init();
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

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
    <div className='mt-24 ' data-aos="fade-up"
    data-aos-duration="1500">

    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact - OCTALINK</title>

      </Helmet>

      <div className='flex flex-col  gap-8 items-center mx-auto container'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-10 font-normal'>Our Contact</h2>
      <img className='h-[400px] w-[90%] bg-no-repeat mb-20 bg-cover bg-center rounded-lg ' src={img} alt="" />
      
      </div>


     <div className='mx-auto container' data-aos="fade-up"
     data-aos-duration="1500">

     <div className='flex flex-col items-center mb-20 mt-20 gap-8'>
     <h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">OUR CONTACT</h2>
     <p className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-normal text-center">Get In Touch With Octalink Global Sourcing</p>
     </div>

     <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-16 p-4 md:p-4 lg:p-4 xl:p-0'>

<div className="flex flex-col border-[1px]  border-gray-400 p-8 ">
<iframe className='xl:w-[600px] h-[450px] mb-8 filter grayscale hover:filter-none transition-all duration-300' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.856244076833!2d90.39696697533932!3d23.85923797859631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c519d145d4f5%3A0xd2064d7d7b9e674c!2sOctalink%20Global%20Sourcing!5e0!3m2!1sen!2sbd!4v1719182793802!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

    <div className='border-[1px]  border-gray-400 p-16 md:p-16 lg:p-16 xl:p-8'>

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

     <div className=" mt-10 w-full p-4 md:p-16 lg:p-16 xl:p-32 bg-[#f8f2e7]" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="container mx-auto">

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  gap-16">

        {/* 1st part */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 order-2 md:order-1 lg:order-1 xl:order-1">

        <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3 " defaultChecked /> 
        <div className="collapse-title text-[22px] font-medium">
          How long has your company has been established?
        </div>
        <div className="collapse-content"> 
          <p className="font-sans font-normal">Octalink Global Sourcing has been established since 2012, bringing over a decade of experience in the textile and garment sourcing industry.</p>
        </div>
      </div>

        <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3 "  /> 
        <div className="collapse-title text-[22px] font-medium">
          How many people work at Octalink Global Sourcing?
        </div>
        <div className="collapse-content"> 
        <p className="font-sans font-normal">Octalink Global Sourcing employs approximately 200 skilled professionals who are dedicated to ensuring quality and efficiency in every aspect of our operations.</p>

        </div>
      </div>

        <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3 " /> 
        <div className="collapse-title text-[22px] font-medium">
        How does Octalink Global Sourcing ensure product quality?
        </div>
        <div className="collapse-content"> 
        <p className="font-sans font-normal">We maintain rigorous quality control measures at every stage of production, from sourcing raw materials to final inspection. Our team conducts thorough inspections and tests to guarantee that all products meet our high standards and client specifications.</p>
        </div>
      </div>


      <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-[22px] font-medium">
        Can Octalink Global Sourcing handle custom orders and designs?
        </div>
        <div className="collapse-content"> 
        <p className="font-sans font-normal">Yes, Octalink Global Sourcing specializes in handling custom orders and designs. We work closely with clients to understand their specific requirements and preferences, ensuring that we deliver tailor-made solutions that meet their exact needs.</p>
        </div>
      </div>

      <div className="collapse collapse-plus border-b-[1px] rounded-[0px] border-gray-400">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-[22px] font-medium">
        How does Octalink Global Sourcing ensure timely delivery of orders?
        </div>
        <div className="collapse-content"> 
        <p className="font-sans font-normal">We prioritize efficient logistics and production planning to ensure timely delivery of orders. Our robust supply chain management and proactive communication with suppliers and clients help us anticipate and resolve any potential delays, ensuring on-time delivery of every order.</p>
        </div>
      </div>
        </div>
        {/* 2nd part */}

        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 order-1 md:order-2 lg:order-2 xl:order-2">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#797F54] font-sans font-semibold tracking-[8px] text-[16px] w-full text-center md:text-start lg:text-start xl:text-start ">FAQS</h2>
          <p className="text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] w-full text-center md:text-start lg:text-start xl:text-start font-normal mb-10">Frequently Asked Questions</p>
          <p className="font-normal text-[16px]  font-sans text-gray-400  ">Explore answers to commonly asked questions about Octalink Global Sourcing to learn more about our services, products, and commitment to excellence.</p>
          <div className="divider "></div> 

          <div className="flex flex-row justify-between">
            
            <div>
              <h2 className="font-sans text-[14px] font-semibold text-[#797F54]">PHONE</h2>
              <p className="text-[14px] md:text-[14px] lg:text-xl xl:text-xl font-normal mt-2 text-gray-500 ">+880 1999999999</p>
              <p className="text-[14px] md:text-[14px] lg:text-xl xl:text-xl font-normal mt-2 text-gray-500 ">+880 1826766666</p>
            </div>

            <div>
              <h2 className="font-sans text-[14px] font-semibold text-[#797F54]">EMAIL</h2>
              <p className="text-[14px] md:text-[14px] lg:text-xl xl:text-xl font-normal mt-2 text-gray-500">octalink@gmail.com</p>
              <p className="text-[14px] md:text-[14px] lg:text-xl xl:text-xl font-normal mt-2 text-gray-500">octalinkglob@gmail.com</p>
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
import CountUp from 'react-countup';
import image from '../../assets/man-s-hands-sewing-leather-workshop-textile-vintage-industrial-man-female-profession-gender-equality-concept_155003-18345.jpg'
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import Aos from "aos";
import image2 from '../../assets/aboutsectionimage2.jpg'
import image3 from '../../assets/tailoring-processs_1098-17986.avif'
import image4 from '../../assets/fashionable-boutique-owner-measures-dress-black-white-studio-generated-by-ai_188544-11428.avif'
import Marquee from "react-fast-marquee";
import brand1 from '../../assets/brand.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'
import brand6 from '../../assets/brand6.png'
import member1 from '../../assets/members.jpg'
import member2 from '../../assets/members2.jpg'
import member3 from '../../assets/members3.jpg'
import member4 from '../../assets/members4.jpg'
import { FaChartBar, FaCog, FaFacebook, FaFacebookF, FaInstagram, FaLock, FaPen, FaRegUser, FaTwitter, FaUser, FaUsers } from 'react-icons/fa';
import './About.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'


const About = () => {

  useEffect(() => {
    Aos.init();
  },[])



  return (
    <div>

      <div className="flex items-center justify-between mt-24 mb-36">

        {/* 1st part */}
        <div className="flex flex-col items-start gap-10 ml-20 w-1/2">
          <h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">ABOUT OCTALINK GLOBAL SOURCING</h2>
          <p className="text-6xl font-normal w-[400px]">Embrace Every Thread Embody Every Style</p>
        </div>

        {/* 2nd part */}

        <div className='w-full '>
          <img className='w-[95%]' src={image} alt="" />
        </div>
          
      </div>

      <div className='mb-[250px] flex flex-col items-center gap-8 mx-auto container'>
        <h2 className='font-sans tracking-[2px] font-semibold text-[14px] text-[#797F54]'>THE OCTALINK GLOBAL SOURCING MISSION</h2>
        <p className='text-3xl font-normal text-center text-gray-600'>"Seamlessly blend <span className='text-black'>Style and Comfort</span>, offering a curated collection of garments that empower individuals to express their <span className='text-black'>Unique Identity. Our mission</span> extends beyond clothing – <span className='text-black'>We Envision a World</span> where each thread tells a story of <span className='text-black'>Ethical Production</span>, environmental responsibility, and the <span className='text-black'>Celebration Of Individuality</span>."</p>
      </div>


      <div className='flex  border-black items-center mx-auto container mb-[200px] justify-between' data-aos="fade-up"
     data-aos-duration="1500">
        {/* img boxes */}

      <div className='flex gap-8 w-[60%] '>

        <div className='flex flex-col gap-8'>
          <img className='w-[300px] h-[285px]' src={image3} alt="" />
          <img className='w-[300px] h-[285px] rounded-[50%]' src={image4} alt="" />
        </div>

        <div>
      <img className='w-[350px] h-[600px]' src={image2} alt="" />
        </div>

      </div>

      {/* information boxes */}
      <div className='flex flex-col w-[40%]   flex-start text-start gap-8'>
        <h2 className='font-sans tracking-[2px] font-semibold text-[14px] text-[#797F54]'>ABOUT OUR JOURNEY</h2>
        <p className='text-5xl text-start font-normal  text-black'>We Provide The Best Textile Industry Since 1998</p>
        <p className='text-[14px]  font-sans text-start font-semibold  text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptate aliquam accusamus praesentium voluptatem molestiae molestias nulla consectetur neque vero, ad autem minus nihil! Repellat quas quo pariatur et officiis iure qui, sequi, eius necessitatibus labore architecto esse optio doloremque quae? Autem non, rerum rem accusamus distinctio aliquid, ea sunt molestiae eius ut vero laborum ipsum saepe! Et officia voluptas repellat possimus facere consequuntur, dolore, consectetur culpa molestiae eos dolor nobis eveniet ipsum, alias provident! Nesciunt perspiciatis culpa aut deleniti architecto accusantium maiores voluptate odit, ut veritatis vitae quia quaerat assumenda similique ipsum cupiditate quos repudiandae inventore. Eligendi, natus et!</p>
        <button className="text-[14px] w-1/3 text-white font-sans font-medium mt-10 bg-black translate-y-[40px]  px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">LEARN MORE</button>
      </div>

      </div>


      <div className='bg-black text-white p-20 mb-32'>
        <div className='flex flex-col items-center gap-10'>
        <h2 className='font-sans font-semibold text-gray-400 text-xl'>We've worked with <span className='text-white'>Renowned Companies and Brands</span> globally</h2>
        <Marquee>
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand1} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand2} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand3} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand4} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand5} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand6} alt="" />
    </Marquee>
        </div>
        
      </div>

      <div className='mb-32 mx-auto container' data-aos="fade-up"
     data-aos-duration="1500">

        <div className='flex items-center flex-col gap-6 mb-20'>
          <h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">OUR VALUES</h2>
          <p className="text-5xl font-normal">Clothes That Fit Your Personality</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>


          <div className='flex gap-4 p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaPen /></p>
            <h2 className='text-3xl font-normal'>Passion</h2>
            <p className='w-[300px] text-gray-600 font-sans font-normal text-lg'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.</p>
          </div>

          <div className='flex gap-4 p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaUsers /></p>
            <h2 className='text-3xl font-normal'>Community</h2>
            <p className='w-[300px] text-gray-600 font-sans font-normal text-lg'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.</p>
          </div>
          
          <div className='flex gap-4 p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaCog /></p>
            <h2 className='text-3xl font-normal'>Commitment</h2>
            <p className='w-[300px] text-gray-600 font-sans font-normal text-lg'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.</p>
          </div>

          <div className='flex gap-4 p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaChartBar /></p>
            <h2 className='text-3xl font-normal'>Growth</h2>
            <p className='w-[300px] text-gray-600 font-sans font-normal text-lg'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.</p>
          </div>

          <div className='flex gap-4 p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaLock /></p>
            <h2 className='text-3xl font-normal'>Honesty</h2>
            <p className='w-[300px] text-gray-600 font-sans font-normal text-lg'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.</p>
          </div>

          <div className='flex gap-4 p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaUser /></p>
            <h2 className='text-3xl font-normal'>Team Work</h2>
            <p className='w-[300px] text-gray-600 font-sans font-normal text-lg'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.</p>
          </div>

          


        </div>

      </div>


    <div className='flex flex-col' data-aos="fade-up"
     data-aos-duration="1500">

 {/* team section */}
    <div className=' pt-[200px] pb-[200px]  bg-[#f8f2e7]'>

<div className='flex flex-col items-center mb-20 gap-10'>
<h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">OUR TEAM</h2>
<p className="text-5xl font-normal">Meet Our Professional Team</p>
</div>

<div className='flex justify-center items-center gap-14 mx-auto container '>

<div className="relative group h-[350px] w-[250px] rounded-b-[200px] rounded-t-[200px]  overflow-hidden ">
{/* Image */}
<img 
  src={member2} 
  alt="Sample" 
  className="w-full h-full object-cover rounded-lg"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out flex justify-center items-center rounded-lg gap-4">
  {/* <FaFacebook className="text-white text-4xl          " /> */}
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaFacebookF /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaTwitter /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaInstagram /></p>
</div>
</div>

<div className="relative group h-[350px] w-[250px] rounded-b-[200px] rounded-t-[200px]  overflow-hidden ">
{/* Image */}
<img 
  src={member1} 
  alt="Sample" 
  className="w-full h-full object-cover rounded-lg"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out flex justify-center items-center rounded-lg gap-4">
  {/* <FaFacebook className="text-white text-4xl          " /> */}
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaFacebookF /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaTwitter /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaInstagram /></p>
</div>
</div>

<div className="relative group h-[350px] w-[250px] rounded-b-[200px] rounded-t-[200px]  overflow-hidden ">
{/* Image */}
<img 
  src={member3} 
  alt="Sample" 
  className="w-full h-full object-cover rounded-lg"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out flex justify-center items-center rounded-lg gap-4">
  {/* <FaFacebook className="text-white text-4xl          " /> */}
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaFacebookF /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaTwitter /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaInstagram /></p>
</div>
</div>

<div className="relative group h-[350px] w-[250px] rounded-b-[200px] rounded-t-[200px]  overflow-hidden ">
{/* Image */}
<img 
  src={member4} 
  alt="Sample" 
  className="w-full h-full object-cover rounded-lg"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out flex justify-center items-center rounded-lg gap-4">
  {/* <FaFacebook className="text-white text-4xl          " /> */}
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaFacebookF /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaTwitter /></p>
<p className="rounded-[50%] text-[#797F54] text-[15px] border-[1px] border-white p-[7px] bg-white hover:text-black  hover:border-[1px] hover:border-white duration-700 opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out"><FaInstagram /></p>
</div>
</div>

</div>

</div>

{/* another section */}

<div >
<div className="flex flex-col gap-8  items-center pt-[250px] pb-[100px]  bg-black text-white w-full" >







<div className="flex flex-col items-center gap-8" >
<h2 className="font-sans font-semibold tracking-[6px] mb-8 text-gray-100">HOW IT WORKS</h2>
<p className="font-forum text-3xl font-semibold tracking-[6px] mb-8 text-gray-100">Refined Style for Discerning Tastes</p>

<div className="grid grid-cols-3 gap-16">

  <div className="flex flex-col items-center  border-r-[1px] border-gray-600 p-4">
    <img className="h-[60px] w-[60px] mb-5" src={icon1} alt="" />
    <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Receive Our Catalog</h2>
    <p className="w-[300px] text-center leading-7 font-sans font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>       
    </div>

  <div className="flex flex-col items-center  border-r-[1px] border-gray-600 p-4">
    <img className="h-[60px] w-[60px] mb-5" src={icon2} alt="" />
    <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Book Appointment</h2>
    <p className="w-[300px] text-center leading-7 font-sans font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>       
    </div>

  <div className="flex flex-col items-center   p-4">
    <img className="h-[60px] w-[60px] mb-5" src={icon3} alt="" />
    <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Create Your Product</h2>
    <p className="w-[300px] text-center leading-7 font-sans font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>       
    </div>

</div>

<button className="text-[14px] font-sans font-medium mt-10 bg-white text-black px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">BOOK AN APPOINTMENT</button>
</div>


</div>
</div>

{/* another section */}

<div className='bg-[#797F54] p-32'>
    <div className='flex flex-col items-center'>
    <h2 className="font-sans mb-8 font-semibold tracking-[3px] text-[white]">GET STARTED</h2>
    <p className="text-[68px] text-center w-[700px] text-white font-normal">A Classic Ensemble From Head To Toe</p>
    <button className="text-[14px] font-sans font-medium mt-10 bg-black text-white px-8 py-3 hover:text-black hover:bg-white duration-500">LEARN MORE</button>

    </div>
    </div>

    </div>



   




    </div>
  );
};

export default About;
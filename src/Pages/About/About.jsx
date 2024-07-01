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
import brand7 from '../../assets/brand7.jpg'
import brand8 from '../../assets/brand8.webp'
import brand9 from '../../assets/brand9.jpg'
import brand10 from '../../assets/brand10.png'
import brand11 from '../../assets/brand11.png'
import brand12 from '../../assets/brand12.png'
import brand13 from '../../assets/brand13.png'
import brand14 from '../../assets/brand14.png'
import brand15 from '../../assets/brand15.jpg'
import member1 from '../../assets/members.jpg'
import member2 from '../../assets/members2.jpg'
import member3 from '../../assets/members3.jpg'
import member4 from '../../assets/members4.jpg'
import { FaChartBar, FaCog, FaFacebookF, FaInstagram, FaLock, FaPen, FaTwitter, FaUser, FaUsers } from 'react-icons/fa';
import './About.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';






const About = () => {

  useEffect(() => {
    Aos.init();
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);



  return (
    <div data-aos="fade-up"
    data-aos-duration="1500">

      <Helmet>
      <meta charSet="utf-8" />
      <title>About - OCTALINK</title>

      </Helmet>

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between mt-16 md:mt-24 lg:mt-24 xl:mt-24 mb-20 md:mb-36 lg:mb-36 xl:mb-36 gap-8 md:gap-0 lg:gap-0  xl:gap-0"  data-aos="fade-up"
     data-aos-duration="1500">

        {/* 1st part */}
        <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start gap-10 ml-0 md:ml-20 lg:ml-20 xl:ml-20 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h2 className="font-sans font-semibold tracking-[3px] text-[#797F54] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px]">ABOUT OCTALINK GLOBAL SOURCING</h2>
          <p className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-normal w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px] text-center md:text-start lg:text-start xl:text-start">Embrace Every Thread Embody Every Style</p>
        </div>

        {/* 2nd part */}

        <div className='w-full flex justify-center'>
          <img className='w-[95%]' src={image} alt="" />
        </div>
          
      </div>

      <div className='mb-[250px] flex flex-col items-center gap-8 mx-auto container'>
        <h2 className='font-sans tracking-[2px] font-semibold  text-[#797F54] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px]'>THE OCTALINK GLOBAL SOURCING MISSION</h2>
        <p className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal text-center text-gray-600'>"Seamlessly blend <span className='text-black'>Style and Comfort</span>, offering a curated collection of garments that empower individuals to express their <span className='text-black'>Unique Identity. Our mission</span> extends beyond clothing – <span className='text-black'>We Envision a World</span> where each thread tells a story of <span className='text-black'>Ethical Production</span>, environmental responsibility, and the <span className='text-black'>Celebration Of Individuality</span>."</p>
      </div>


      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row border-black items-center mx-auto container mb-[200px] justify-between gap-8 md:gap-24 lg:gap-24 xl:gap-0' data-aos="fade-up"
     data-aos-duration="1500">
        {/* img boxes */}

      <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 w-full md:w-[60%] lg:w-[60%] xl:w-[60%] items-center'>

        <div className='flex flex-col gap-8'>
          <img className='w-[300px] h-[285px]' src={image3} alt="" />
          <img className='w-[300px] h-[285px] rounded-[50%]' src={image4} alt="" />
        </div>

        <div>
      <img className='w-[350px] h-[600px]' src={image2} alt="" />
        </div>

      </div>

      {/* information boxes */}
      <div className='flex flex-col w-full md:w-[40%] lg:w-[40%] xl:w-[40%]   flex-start text-start gap-8 p-4 md:p-0 lg:p-0 xl:p-0'>
        <h2 className='font-sans tracking-[2px] font-semibold text-[14px] text-[#797F54]'>ABOUT OUR JOURNEY</h2>
        <p className='text-5xl text-start font-normal  text-black'>We Provide The Best Textile Industry Since 1998</p>
        <p className='text-[14px]  font-sans text-start font-semibold  text-gray-600'>At OCTALINK GLOBAL SOURCING, we take immense pride in being at the forefront of the textile industry. Our commitment to excellence, innovation, and sustainability has positioned us as a leader in providing the highest quality fabrics and services. Our journey began with a simple yet powerful vision: to revolutionize the textile industry with unparalleled products and customer-centric services. Over the years, we have built a reputation for delivering exceptional quality, leveraging cutting-edge technology, and embracing sustainable practices.</p>
        <Link to='/contact'><button className="text-[14px] xl:w-1/3 text-white font-sans font-medium mt-10 bg-black translate-y-[40px]  px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">CONTACT US</button></Link>
      </div>

      </div>


      <div className='bg-black text-white p-10 md:p-20 lg:p-20 xl:p-20 mb-32'>
        <div className='flex flex-col items-center gap-10'>
        <h2 className='font-sans  font-semibold text-gray-400 text-xl text-center'>We've worked with <span className='text-white'>Renowned Companies and Brands</span> globally</h2>
        <Marquee>
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand1} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand2} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand3} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand4} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand5} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand6} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand7} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand8} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand9} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand10} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand11} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand12} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand13} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand14} alt="" />
      <img className="h-[100px] w-[200px] rounded-lg mr-28" src={brand15} alt="" />
    </Marquee>
        </div>
        
      </div>

      <div className='mb-32 mx-auto container' data-aos="fade-up"
     data-aos-duration="1500">

        <div className='flex items-center flex-col gap-6 mb-20'>
          <h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">OUR VALUES</h2>
          <p className="text-5xl font-normal text-center">Clothes That Fit Your Personality</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-4 md:p-0 lg:p-0 xl:p-0'>


          <div className='flex gap-4 p-6 md:p-8 lg:p-10 xl:p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaPen /></p>
            <h2 className='text-3xl font-normal'>Passion</h2>
            <p className='w-[90%] md:w-[95%] lg:w-[100%] xl:w-[300px] text-gray-600 font-sans font-normal text-lg'>Passion fuels innovation and excellence, driving us to deliver exceptional products and services.</p>
          </div>

          <div className='flex gap-4 p-6 md:p-8 lg:p-10 xl:p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaUsers /></p>
            <h2 className='text-3xl font-normal'>Community</h2>
            <p className='w-[90%] md:w-[95%] lg:w-[100%] xl:w-[300px] text-gray-600 font-sans font-normal text-lg'>We believe in fostering a strong community through our commitment to sustainable practices and supporting local initiatives.</p>
          </div>
          
          <div className='flex gap-4 p-6 md:p-8 lg:p-10 xl:p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaCog /></p>
            <h2 className='text-3xl font-normal'>Commitment</h2>
            <p className='w-[90%] md:w-[95%] lg:w-[100%] xl:w-[300px] text-gray-600 font-sans font-normal text-lg'>Our commitment lies in delivering excellence, innovation, and sustainable practices, ensuring unparalleled quality and service.</p>
          </div>

          <div className='flex gap-4 p-6 md:p-8 lg:p-10 xl:p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaChartBar /></p>
            <h2 className='text-3xl font-normal'>Growth</h2>
            <p className='w-[90%] md:w-[95%] lg:w-[100%] xl:w-[300px] text-gray-600 font-sans font-normal text-lg'>Growth is our continuous journey, fueled by innovation, customer trust, and expanding global partnerships.</p>
          </div>

          <div className='flex gap-4 p-6 md:p-8 lg:p-10 xl:p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaLock /></p>
            <h2 className='text-3xl font-normal'>Honesty</h2>
            <p className='w-[90%] md:w-[95%] lg:w-[100%] xl:w-[300px] text-gray-600 font-sans font-normal text-lg'>Honesty forms the cornerstone of our values, guiding transparent relationships and integrity in all our endeavors.</p>
          </div>

          <div className='flex gap-4 p-6 md:p-8 lg:p-10 xl:p-12 flex-col items-start border-[1px] border-gray-300'>
            <p className='text-lg text-gray-700 bg-gray-300 p-4 rounded-[50%]'><FaUser /></p>
            <h2 className='text-3xl font-normal'>Team Work</h2>
            <p className='w-[90%] md:w-[95%] lg:w-[100%] xl:w-[300px] text-gray-600 font-sans font-normal text-lg'>Teamwork is the essence of our success, fostering collaboration and synergy to achieve shared goals and drive innovation.</p>
          </div>

          


        </div>

      </div>


    <div className='flex flex-col' data-aos="fade-up"
     data-aos-duration="1500">

 {/* team section */}
    <div className=' pt-[200px] pb-[200px]  bg-[#f8f2e7]'>

<div className='flex flex-col items-center mb-20 gap-10'>
<h2 className="font-sans font-semibold tracking-[3px] text-[#797F54]">OUR TEAM</h2>
<p className="text-5xl font-normal text-center">Meet Our Professional Team</p>
</div>

<div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-14 mx-auto container '>

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
<p className="font-forum text-center text-3xl font-semibold tracking-[6px] mb-8 text-gray-100">Refined Style for Discerning Tastes</p>

<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-4 lg:gap-0 xl:gap-0">

        <div className="flex flex-col items-center border-b-[1px] md:border-b-[1px] lg:border-b-[0px] xl:border-b-[0px] border-r-[0px] md:border-r-[0px] lg:border-r-[1px]  xl:border-r-[1px] border-gray-600 p-2 md:p-4 lg:p-8 xl:p-8">
          <img className="h-[60px] w-[60px] mb-5" src={icon1} alt="" />
          <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Receive Our Catalog</h2>
          <p className="w-[300px] text-center leading-7 font-sans font-normal">Explore our exquisite fabric collections by requesting your free catalog today! Discover innovative designs and high-quality textiles at your fingertips.</p>       
          </div>

        <div className="flex flex-col items-center border-b-[1px] md:border-b-[1px] lg:border-b-[0px] xl:border-b-[0px]  border-r-[0px] md:border-r-[0px] lg:border-r-[1px]  xl:border-r-[1px] border-gray-600 p-2 md:p-4 lg:p-8 xl:p-8">
          <img className="h-[60px] w-[60px] mb-5" src={icon2} alt="" />
          <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Book Appointment</h2>
          <p className="w-[300px] text-center leading-7 font-sans font-normal">Schedule a consultation with our textile experts to find the perfect fabrics for your needs.</p>       
          </div>

        <div className="flex flex-col items-center border-b-[1px] md:border-b-[0px] lg:border-b-[0px] xl:border-b-[0px] border-r-[0px] md:border-r-[0px] lg:border-r-[0px]  xl:border-r-[0px] border-gray-600  p-2 md:p-4 lg:p-8 xl:p-8">
          <img className="h-[60px] w-[60px] mb-5" src={icon3} alt="" />
          <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Create Your Product</h2>
          <p className="w-[300px] text-center leading-7 font-sans font-normal">Design and customize your unique textile products with our expert guidance and premium materials.</p>       
          </div>

      </div>

      <Link to='/contact'><button className="text-[14px] font-sans font-medium mt-10 bg-white text-black px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">BOOK AN APPOINTMENT</button></Link>
</div>


</div>
</div>

{/* another section */}

<div className='bg-[#797F54] p-16 md:p-24 lg:p-30 xl:p-32'>
    <div className='flex flex-col items-center'>
    <h2 className="font-sans mb-8 font-semibold tracking-[3px] text-[white]">GET STARTED</h2>
    <p className="text-[38px] md:text-[58px] lg:text-[68px] xl:text-[68px] text-center w-[350px] md:w-[700px] lg:w-[700px] xl:w-[700px] text-white font-normal">A Classic Ensemble From Head To Toe</p>
    <Link to='/'><button className="text-[14px] font-sans font-medium mt-10 bg-black text-white px-8 py-3 hover:text-black hover:bg-white duration-500">LEARN MORE</button></Link>

    </div>
    </div>

    </div>



   




    </div>
  );
};

export default About  ;
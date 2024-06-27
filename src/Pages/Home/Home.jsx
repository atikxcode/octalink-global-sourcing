
import Marquee from "react-fast-marquee";
import { FaCheck, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import img1 from '../../assets/young-woman-in-stylish-beige-outfit-and-trendy-sun-2ACYSEN-800x1000.jpg'
import img2 from '../../assets/stylish-woman-with-vintage-books-looking-at-camera-QVC6WUS-800x1000.jpg'
import img3 from '../../assets/pretty-brunette-woman-with-blue-jacket-looking-awa-F69ED93-800x1000.jpg'
import img4 from '../../assets/beautiful-girl-in-denim-skirt-and-blouse-holding-f-XLARQ93-800x1000.jpg'
import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from "react";

import brand1 from '../../assets/brand.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'
import brand6 from '../../assets/brand6.png'

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

import image from '../../assets/nh-image-2.jpg'
import logo from '../../assets/logo_Asset-1-1.png'
import CountUp from 'react-countup';

import massimg from '../../assets/massproduction.jpg'
import printimg from '../../assets/printingdesign.jpg'
import sampimg from '../../assets/productsampling.jpg'
import fabimg from '../../assets/fabriccatelog.jpg'
import pattimg from '../../assets/patternmaking.jpg'
import serimg from '../../assets/productservice.jpg'


import prodlogo1 from '../../assets/production_icon_1.png'
import prodlogo2 from '../../assets/production_icon_2.png'
import prodlogo3 from '../../assets/production_icon_3.png'
import prodlogo4 from '../../assets/production_icon_4.png'
import prodlogo5 from '../../assets/production_icon_5.png'
import prodlogo6 from '../../assets/production_icon_6.png'

import review1 from '../../assets/review.jpg'
import review2 from '../../assets/review2.jpg'
import review3 from '../../assets/review3.jpg'


import capture from '../../assets/trendy-brunette-woman-in-blue-blazer-sitting-on-wo-6WRKFUC.jpg'

import reviewimg from '../../assets/reviewbg.png'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

import './Home.css'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";





const Home = () => {

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    Aos.init();
  },[])

  const {isPending, isError, error, refetch, data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosPublic.get('/reviews');
      return res.data;
    }
  });



  
  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }

  // console.log(products)
  

  if (isError) {
    return <p>Error: {error.message}</p>;
  }


  return (
 <div className="min-h-screen  ">
 <div className="divider "></div> 

 <div className="pt-20 flex flex-col items-center gap-4 ">
    <h2 className="text-[#797F54] tracking-wider">OCTALINK GLOBAL SOURCING</h2>
    <p className="text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] font-normal text-center w-[80%] md:w-[50%] lg:w-full xl:w-full">Where Sophistication and Style Meet</p>
    <p className="text-center w-[300px] md:w-[400px] lg:w-[400px] xl:w-[500px] text-gray-500">Discover timeless fashion crafted for the discerning and stylish. Our curated collections blend classic elegance with contemporary trends, redefining your wardrobe with every piece.</p>
    <div className="flex gap-4 items-center mb-10">
      <Link to='/login'><button className="text-white text-[14px] font-sans font-semibold h-[40px]   w-[120px] md:w-[150px] lg:w-[150px] xl:w-[150px] bg-black hover:bg-[#797F54] duration-300">GET STARTED</button></Link>
      <Link to='/contact'><button className="text-black text-[14px] font-sans font-semibold h-[40px] w-[120px] md:w-[150px] lg:w-[150px] xl:w-[150px] bg-inherit border-[1px] border-black hover:bg-[#797F54] hover:border-[#797F54] hover:text-white duration-300">CONTACT US</button></Link>
    </div>

    <Link to='/about'><p className="mb-5 font-sans font-normal text-gray-500">or <span className="underline underline-offset-[3px]">Discover our story</span></p></Link>
    <div className="flex items-center gap-3 mb-36">
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaFacebookF /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaTwitter /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaInstagram /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaDribbble /></p>
    </div>




    <div className="sm:flex md:flex lg:flex xl:flex  gap-10 z-10" data-aos="fade-up"
     data-aos-duration="1500">
      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3 translate-y-[-60px]">
        <p>Timeless Classics</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img1} alt="" />
        <div className="flex flex-row text-[#797F54] text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>SUMMER</p>
          <p>OUTFIT</p>
        </div>
      </div>

      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3">
        <p>Luxury Fabrics</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img2} alt="" />
        <div className="flex flex-row text-[#797F54] text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>WINTER</p>
          <p>OUTFIT</p>
        </div>
      </div>

      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3 translate-y-[-60px]">
        <p>Modern Elegance</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img3} alt="" />
        <div className="flex flex-row text-[#797F54] text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>WINTER</p>
          <p>OUTFIT</p>
        </div>
      </div>

      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3">
        <p>Trendsetters</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img4} alt="" />
        <div className="flex flex-row text-[#797F54] text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>SUMMER</p>
          <p>OUTFIT</p>
        </div>
      </div>

    </div>


    <div className="flex flex-col gap-8  items-center pt-[400px] pb-[100px] translate-y-[-100px]  md:translate-y-[-300px] lg:translate-y-[-300px] xl:translate-y-[-300px] bg-black text-white w-full" >
    
    <h2 className="font-sans font-semibold tracking-[6px] mb-8 text-gray-100" >OUR BELOVED CLIENTS</h2>

    <Marquee>
      <img className="h-[100px] w-[200px] mr-28" src={brand1} alt="" />
      <img className="h-[100px] w-[200px] mr-28" src={brand2} alt="" />
      <img className="h-[100px] w-[200px] mr-28" src={brand3} alt="" />
      <img className="h-[100px] w-[200px] mr-28" src={brand4} alt="" />
      <img className="h-[100px] w-[200px] mr-28" src={brand5} alt="" />
      <img className="h-[100px] w-[200px] mr-28" src={brand6} alt="" />
    </Marquee>

    <hr className="w-full border-t-[1px] border-gray-600 my-24" />


    <div className="flex flex-col items-center gap-8" data-aos="fade-up"
     data-aos-duration="3000">
      <h2 className="font-sans font-semibold tracking-[6px] mb-8 text-gray-100">HOW IT WORKS</h2>
      <p className="font-forum text-center text-3xl font-semibold tracking-[6px] mb-8 text-gray-100">Refined Style for Discerning Tastes</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  ">

        <div className="flex flex-col items-center border-b-[1px] md:border-b-[0px] lg:border-b-[0px] xl:border-b-[0px] border-r-[0px] md:border-r-[1px] lg:border-r-[1px]  xl:border-r-[1px] border-gray-600 p-2 md:p-4 lg:p-8 xl:p-8">
          <img className="h-[60px] w-[60px] mb-5" src={icon1} alt="" />
          <h2 className="font-forum text-2xl font-semibold tracking-[6px] mb-8 text-gray-100 text-center">Receive Our Catalog</h2>
          <p className="w-[300px] text-center leading-7 font-sans font-normal">Explore our exquisite fabric collections by requesting your free catalog today! Discover innovative designs and high-quality textiles at your fingertips.</p>       
          </div>

        <div className="flex flex-col items-center border-b-[1px] md:border-b-[0px] lg:border-b-[0px] xl:border-b-[0px]  border-r-[0px] md:border-r-[1px] lg:border-r-[1px]  xl:border-r-[1px] border-gray-600 p-2 md:p-4 lg:p-8 xl:p-8">
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


    <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row  gap-10 mb-[300px]" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="flex flex-col items-start gap-8">
        <h2 className="text-[#797F54] font-sans font-semibold w-full text-center md:text-start lg:text-start xl:text-start">ABOUT OCTALINK GLOBAL SOURCING </h2>
        <h2 className="text-4xl font-normal text-center md:text-start lg:text-start xl:text-start w-full md:w-[350px] lg:w-[350px] xl:w-[350px] ">Exclusive Quality as Unique as You, Fusce accumsan ut sem.</h2>
        <p className="w-full md:w-[500px] lg:w-[500px] xl:w-[500px] font-sans font-normal text-gray-500  text-center md:text-start lg:text-start xl:text-start">Experience the unparalleled quality and uniqueness of our textiles. Each piece is crafted with meticulous attention to detail, ensuring a perfect blend of elegance and durability. Fusce accumsan ut sem, enhancing your designs with exceptional beauty and sophistication.</p>
        <img className="w-[90%] md:w-[500px] lg:w-[500px] xl:w-[500px] mx-auto" src={image} alt="" />
      </div>

      <div className="flex flex-col items-start gap-8 translate-y-[210px]">
        <p className="w-full text-center md:text-start lg:text-start xl:text-start md:w-[90%] lg:w-[90%] xl:w-[500px] font-sans font-normal text-gray-500">Our commitment to excellence ensures that every fabric stands out with distinct charm and superior craftsmanship. From vibrant patterns to subtle textures, each textile is designed to reflect your individuality. </p>
         
         <div className="flex flex-col items-start gap-2">
         <h2 className="text-3xl font-normal mb-6 w-full text-center md:text-start lg:text-start xl:text-start">Our Vision</h2>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span><span className="font-bold">Innovation and Excellence:</span> To lead the textile industry through cutting-edge designs and unparalleled quality.</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span><span className="font-bold">Sustainability:</span> To commit to eco-friendly practices, ensuring our products are as kind to the planet as they are beautiful.</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span><span className="font-bold">Customer-Centric Approach:</span> To prioritize our clients' needs, delivering customized solutions that exceed expectations.</span></p>
         </div>


         <div className="flex flex-col items-start gap-2">
         <h2 className="text-3xl font-normal mb-6 w-full text-center md:text-start lg:text-start xl:text-start">Our Mission</h2>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span><span className="font-bold">Quality Assurance:</span> To consistently deliver textiles of the highest standards, ensuring satisfaction and trust among our customers.</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span><span className="font-bold">Innovation:</span>  To pioneer new trends and techniques, pushing the boundaries of textile design and production.</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span><span className="font-bold">Community Engagement:</span>  To support and empower our local and global communities through ethical business practices and partnerships.</span></p>
         </div>

         <div className="bg-black flex flex-col overflow-hidden text-white p-8 ">
          <h2 className="text-3xl font-normal tracking-[5px] mb-5">Have a project? Let's Talk!</h2>
          <div className=" flex items-center justify-between">
          <img className="w-[130px] md:w-[140px] lg:w-[140px] xl:w-[150px] translate-x-[-50px] translate-y-[40px]" src={logo} alt="" />
          <Link to='/contact'><button className="text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-sans font-medium mt-10 bg-white translate-y-[40px] text-black px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">BOOK AN APPOINTMENT</button></Link>

          </div>
          
         </div>

      </div>
    </div>

    <div className="mb-20" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-16 items-center">

        <div className="flex flex-col items-center">
          <h2 className="text-[#797F54] font-sans font-normal text-2xl">Years of Experience</h2>
          <div className="divider "></div> 
          <p className="text-[60px] font-normal"><CountUp end={25} duration={8} />+</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[#797F54] font-sans font-normal text-2xl">Our Employees</h2>
          <div className="divider"></div> 
          <p className="text-[60px] font-normal"><CountUp end={150} duration={8} />+</p>
        </div>


        <div className="flex flex-col items-center">
          <h2 className="text-[#797F54] font-sans font-normal text-2xl">Successful Projects</h2>
          <div className="divider "></div> 
          <p className="text-[60px] font-normal"><CountUp end={400} duration={8} />+</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[#797F54] font-sans font-normal text-2xl">Positive Reviews</h2>
          <div className="divider "></div> 
          <p className="text-[60px] font-normal"><CountUp end={999} duration={8} />+</p>
        </div>


      </div>

    </div>


    <div className="mb-20" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="flex flex-col items-center gap-8">

        <h2 className="text-[#797F54] font-sans font-semibold tracking-[8px] text-[16px]">OUR SERVICES</h2>
        <p className="text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] font-normal mb-10 w-full text-center">Where Sophistication and Style Meet</p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">

        <div className="w-[90%] md:w-full lg:w-full xl:w-full mx-auto  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={massimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo1} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-normal text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Efficiently scale production while maintaining the highest standards of quality and craftsmanship.</p>
          <Link to='/about'><button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-[#797F54] duration-500">LEARN MORE</button></Link>
          </div>
        </div>


        <div className="w-[90%] md:w-full lg:w-full xl:w-full mx-auto  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={printimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo2} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-normal text-2xl">Printing Design</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Transform your ideas into reality with our versatile printing design services, tailored to meet your exact specifications.</p>
          <Link to='/about'><button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-[#797F54] duration-500">LEARN MORE</button></Link>
          </div>
        </div>


        <div className="w-[90%] md:w-full lg:w-full xl:w-full mx-auto  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={sampimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo3} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-normal text-2xl">Product Sampling</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Explore our product sampling service to experience the quality and craftsmanship of our textiles firsthand before committing to larger orders.</p>
          <Link to='/about'><button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-[#797F54] duration-500">LEARN MORE</button></Link>
          </div>
        </div>


        <div className="w-[90%] md:w-full lg:w-full xl:w-full mx-auto  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={fabimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo4} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-normal text-2xl">Fabric Catalog</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Browse our comprehensive fabric catalog showcasing a wide range of textures, patterns, and materials to inspire your next project.</p>
          <Link to='/about'><button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-[#797F54] duration-500">LEARN MORE</button></Link>
          </div>
        </div>


        <div className="w-[90%] md:w-full lg:w-full xl:w-full mx-auto  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={pattimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo5} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-normal text-2xl">Pattern Making</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Utilize our expert pattern making services to translate your creative concepts into precise and professional patterns for textile production.</p>
          <Link to='/about'><button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-[#797F54] duration-500">LEARN MORE</button></Link>
          </div>
        </div>


        <div className="w-[90%] md:w-full lg:w-full xl:w-full mx-auto  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={serimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo6} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-normal text-2xl">Product Service</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">From customization to consultation, we provide tailored solutions to meet all your textile needs with expertise and dedication.</p>
          <Link to='/about'><button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-[#797F54] duration-500">LEARN MORE</button></Link>
          </div>
        </div>



        
        </div>
     
     
      </div>
    </div>




    <div className="mb-20 mt-10 w-full p-10 bg-[#f8f2e7]" data-aos="fade-up"
     data-aos-duration="1500">

    <div className="flex flex-col container mx-auto items-center">
    <div className="flex flex-col  w-full gap-8 mb-10">
        <h2 className="text-[#797F54] font-sans font-semibold tracking-[8px] text-[16px] w-full text-center md:text-start lg:text-start xl:text-start">WHY CHOOSE US</h2>
        <p className="text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] font-normal mb-10  leading-[50px]  w-full text-center md:text-start lg:text-start xl:text-start">High Style Exceptional Service</p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row flex-start  w-full items-center gap-8">
        {/* Left side work */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full md:w-2/3 lg:w-2/3 xl:w-2/3">

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">01.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">Modern Process and Factory</h2>
        <p className="font-sans font-normal w-[280px]">Experience our state-of-the-art facilities and advanced manufacturing processes, ensuring efficiency and quality in every textile production.</p>
      </div>

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">02.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">Professional Team and Staffs</h2>
        <p className="font-sans font-normal w-[280px]">Our dedicated team of experts ensures precision and excellence in every aspect of textile production, delivering unparalleled quality and service.</p>
      </div>

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">03.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">Best Quality Results</h2>
        <p className="font-sans font-normal w-[280px]">Achieve exceptional quality and reliability in every textile product, backed by our commitment to excellence and meticulous craftsmanship.</p>
      </div>

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">04.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">24/7 Full Support</h2>
        <p className="font-sans font-normal w-[280px]">We're here round-the-clock to provide comprehensive assistance and guidance, ensuring your textile needs are met promptly and effectively.</p>
      </div>


      </div>

      {/* Right side work */}

      <div className="flex justify-end w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <img className="w-[400px] h-[600px]" src={capture} alt="" />
      </div>
    </div>

      </div>

    </div>

    <div  className='h-[550px] w-full my-20 bg-fixed' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${reviewimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
   
    <div className="flex items-center  w-[80%] h-full mx-auto container">
   
    <div className="flex  h-[60%] mx-auto container items-center  justify-center ">

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        reviews.map(review => 
          <div key={review?._id}>
            <SwiperSlide>
          <div className="flex flex-col items-center gap-8 w-[70%]">
            <p className="text-lg md:text-3xl lg:text-3xl xl:text-3xl font-normal text-gray-600">{review?.review}</p>
           <div className="flex items-center flex-col">
           <img className="" src={review?.photo} alt="" />
           <h2 className="font-sans font-normal">{review?.name}</h2>
           </div>
          </div>
        </SwiperSlide>
          </div>
        )
       }

     
      </Swiper>

    </div>

    </div>

    </div>




    <div className=" mt-10 w-full p-4 md:p-32 lg:p-32 xl:p-32 bg-[#f8f2e7]" data-aos="fade-up"
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
 </div>
  );
};

export default Home;
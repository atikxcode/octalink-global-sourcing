
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



import capture from '../../assets/trendy-brunette-woman-in-blue-blazer-sitting-on-wo-6WRKFUC.jpg'




const Home = () => {

  useEffect(() => {
    Aos.init();
  },[])

  return (
 <div className="min-h-screen  ">
 <div className="divider "></div> 

 <div className="pt-20 flex flex-col items-center gap-4 ">
    <h2 className="text-[#797F54] tracking-wider">OCTALINK GLOBAL SOURCING</h2>
    <p className="text-[72px] font-normal text-center">Where Sophistication and Style Meet</p>
    <p className="text-center w-[500px] text-gray-500">Discover timeless fashion crafted for the discerning and stylish. Our curated collections blend classic elegance with contemporary trends, redefining your wardrobe with every piece.</p>
    <div className="flex gap-4 items-center mb-10">
      <button className="text-white text-[14px] font-sans font-semibold h-[40px] w-[150px] bg-black hover:bg-[#797F54] duration-300">GET STARTED</button>
      <button className="text-black text-[14px] font-sans font-semibold h-[40px] w-[150px] bg-inherit border-[1px] border-black hover:bg-[#797F54] hover:border-[#797F54] hover:text-white duration-300">CONTACT US</button>
    </div>
    <div className="flex items-center gap-3 mb-36">
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaFacebookF /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaTwitter /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaInstagram /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaDribbble /></p>
    </div>




    <div className="flex gap-10 z-10" data-aos="fade-up"
     data-aos-duration="1500">
      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3 translate-y-[-60px]">
        <p>Timeless Classics</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img1} alt="" />
        <div className="flex flex-row text-gray-400 text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>SUMMER</p>
          <p>OUTFIT</p>
        </div>
      </div>

      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3">
        <p>Luxury Fabrics</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img2} alt="" />
        <div className="flex flex-row text-gray-400 text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>WINTER</p>
          <p>OUTFIT</p>
        </div>
      </div>

      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3 translate-y-[-60px]">
        <p>Modern Elegance</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img3} alt="" />
        <div className="flex flex-row text-gray-400 text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>WINTER</p>
          <p>OUTFIT</p>
        </div>
      </div>

      <div className=" px-6 py-4 bg-white flex flex-col items-center gap-3">
        <p>Trendsetters</p>
        <img className="h-[340px] w-[272px] hover:translate-y-[-10px] duration-700" src={img4} alt="" />
        <div className="flex flex-row text-gray-400 text-[14px] items-center justify-between font-sans font-normal  w-full">
          <p>SUMMER</p>
          <p>OUTFIT</p>
        </div>
      </div>

    </div>


    <div className="flex flex-col gap-8  items-center pt-[400px] pb-[100px] translate-y-[-300px] bg-black text-white w-full" >
    
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


    <div className="flex gap-10 mb-10" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="flex flex-col items-start gap-8">
        <h2 className="text-[#797F54] font-sans font-semibold ">ABOUT OCTALINK GLOBAL SOURCING </h2>
        <h2 className="text-4xl font-normal w-[350px]">Exclusive Quality as Unique as You, Fusce accumsan ut sem.</h2>
        <p className="w-[500px] font-sans font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac aliquam ipsum. Nullam facilisis commodo mi, eu sollicitudin orci molestie ut. Fusce accumsan ut sem ac cursus. Curabitur sodales mauris lectus, nec pellentesque urna commodo et. Proin ac diam at mi condimentum faucibus eu at metus.</p>
        <img className="w-[500px]" src={image} alt="" />
      </div>

      <div className="flex flex-col items-start gap-8 translate-y-[210px]">
        <p className="w-[500px] font-sans font-normal text-gray-500">Nulla auctor vulputate erat eget dapibus. Proin condimentum sagittis metus, eget bibendum diam. Vestibulum fermentum nulla eget posuere luctus. Nunc dignissim blandit aliquet. Mauris a urna suscipit, interdum lorem eleifend, malesuada mi. Mauris maximus pretium dignissim.</p>
         
         <div className="flex flex-col items-start gap-2">
         <h2 className="text-3xl font-normal mb-6">Our Vision</h2>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span>Nunc ante diam at nunc, posuere posuere ligula</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span>Nunc ante diam at nunc, posuere posuere ligula</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span>Nunc ante diam at nunc, posuere posuere ligula</span></p>
         </div>


         <div className="flex flex-col items-start gap-2">
         <h2 className="text-3xl font-normal mb-6">Our Mission</h2>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span>Nunc ante diam at nunc, posuere posuere ligula</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span>Nunc ante diam at nunc, posuere posuere ligula</span></p>
          <p className="flex items-center gap-2 font-sans font-normal text-gray-600"><span className="text-[14px]"><FaCheck /></span><span>Nunc ante diam at nunc, posuere posuere ligula</span></p>
         </div>

         <div className="bg-black flex flex-col overflow-hidden text-white p-8 ">
          <h2 className="text-3xl font-normal tracking-[5px] mb-5">Have a project? Let's Talk!</h2>
          <div className=" flex items-center justify-between">
          <img className="w-[150px] translate-x-[-50px] translate-y-[40px]" src={logo} alt="" />
          <button className="text-[14px] font-sans font-medium mt-10 bg-white translate-y-[40px] text-black px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">BOOK AN APPOINTMENT</button>

          </div>
          
         </div>

      </div>
    </div>

    <div className="mb-20" data-aos="fade-up"
     data-aos-duration="1500">

      <div className="flex gap-16 items-center">

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
        <p className="text-5xl font-normal mb-10">Where Sophistication and Style Meet</p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">

        <div className="  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={massimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo1} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-semibold text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
          <button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-black duration-500">LEARN MORE</button>
          </div>
        </div>


        <div className="  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={printimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo2} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-semibold text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
          <button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-black duration-500">LEARN MORE</button>
          </div>
        </div>


        <div className="  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={sampimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo3} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-semibold text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
          <button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-black duration-500">LEARN MORE</button>
          </div>
        </div>


        <div className="  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={fabimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo4} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-semibold text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
          <button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-black duration-500">LEARN MORE</button>
          </div>
        </div>


        <div className="  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={pattimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo5} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-semibold text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
          <button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-black duration-500">LEARN MORE</button>
          </div>
        </div>


        <div className="  flex flex-col items-center bg-white">
          <img className="w-[400px]" src={serimg} alt="" />
          <img className="w-[60px] translate-y-[-40px]" src={prodlogo6} alt="" />
          <div className="flex flex-col items-center gap-6 pb-6">
          <h2 className="font-semibold text-2xl">Mass Production</h2>
          <p className="text-center font-sans font-normal text-gray-600 w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
          <button className="font-sans text-[12px] font-normal tracking-[4px] underline underline-offset-4 text-gray-400 hover:text-black duration-500">LEARN MORE</button>
          </div>
        </div>



        
        </div>
     
     
      </div>
    </div>




    <div className="mb-20 mt-10 w-full p-10 bg-[#f8f2e7]" data-aos="fade-up"
     data-aos-duration="1500">

    <div className="flex flex-col container mx-auto items-center">
    <div className="flex flex-col  w-full gap-8 mb-10">
        <h2 className="text-[#797F54] font-sans font-semibold tracking-[8px] text-[16px]">WHY CHOOSE US</h2>
        <p className="text-5xl font-normal mb-10 w-[500px] leading-[50px]">High Style Exceptional Service</p>
      </div>

      <div className="flex flex-row flex-start  w-full items-center gap-8">
        {/* Left side work */}

      <div className="grid grid-cols-2 gap-8 w-2/3">

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">01.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">Modern Process and Factory</h2>
        <p className="font-sans font-normal w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">02.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">Professional Team and Staffs</h2>
        <p className="font-sans font-normal w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">03.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">Best Quality Results</h2>
        <p className="font-sans font-normal w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>

      <div className="flex flex-col gap-3 ">
        <h2 className="font-sans font-semibold text-[#797F54] tracking-[6px]">04.</h2>
        <div className="divider "></div> 
        <h2 className="text-2xl font-normal  w-[200px] text-black">24/7 Full Support</h2>
        <p className="font-sans font-normal w-[280px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>


      </div>

      {/* Right side work */}

      <div className="flex justify-end w-1/3">
        <img className="w-[400px] h-[600px]" src={capture} alt="" />
      </div>
    </div>

      </div>

    </div>
   

 </div>
 </div>
  );
};

export default Home;
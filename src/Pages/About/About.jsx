import CountUp from 'react-countup';
import image from '../../assets/sewing-machine-item-clothing_95675-1093.jpg'
import { useEffect, useState } from 'react';

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
import { FaChartBar, FaCog, FaLock, FaPen, FaRegUser, FaUser, FaUsers } from 'react-icons/fa';



const About = () => {



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


      <div className='flex  border-black items-center mx-auto container mb-[200px] justify-between'>
        {/* img boxes */}

      <div className='flex gap-8 w-[60%] '>

        <div className='flex flex-col gap-8'>
          <img className='w-[300px] h-[285px]' src={image3} alt="" />
          <img className='w-[300px] h-[285px] rounded-[50%]' src={image4} alt="" />
        </div>

        <div>
      <img className='w-[300px] h-[600px]' src={image2} alt="" />
        </div>

      </div>

      {/* information boxes */}
      <div className='flex flex-col w-[40%]   flex-start text-start gap-8'>
        <h2 className='font-sans tracking-[2px] font-semibold text-[14px] text-[#797F54]'>ABOUT OUR JOURNEY</h2>
        <p className='text-5xl text-start font-normal  text-black'>We Provide The Best Textile Industry Since 1998</p>
        <p className='text-[14px] font-bold font-sans text-start   text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptate aliquam accusamus praesentium voluptatem molestiae molestias nulla consectetur neque vero, ad autem minus nihil! Repellat quas quo pariatur et officiis iure qui, sequi, eius necessitatibus labore architecto esse optio doloremque quae? Autem non, rerum rem accusamus distinctio aliquid, ea sunt molestiae eius ut vero laborum ipsum saepe! Et officia voluptas repellat possimus facere consequuntur, dolore, consectetur culpa molestiae eos dolor nobis eveniet ipsum, alias provident! Nesciunt perspiciatis culpa aut deleniti architecto accusantium maiores voluptate odit, ut veritatis vitae quia quaerat assumenda similique ipsum cupiditate quos repudiandae inventore. Eligendi, natus et!</p>
        <button className="text-[14px] w-1/3 text-white font-sans font-medium mt-10 bg-gray-600 translate-y-[40px]  px-8 py-3 hover:text-white hover:bg-[#797F54] duration-500">LEARN MORE</button>
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

      <div className='mb-32 mx-auto container'>

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




    </div>
  );
};

export default About;

import Marquee from "react-fast-marquee";
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
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



const Home = () => {

  useEffect(() => {
    Aos.init();
  },[])

  return (
 <div className="min-h-screen">
 <div className="divider "></div> 

 <div className="pt-20 flex flex-col items-center gap-4">
    <h2 className="text-[#797F54] tracking-wider">OCTALINK GLOBAL SOURCING</h2>
    <p className="text-[72px] font-normal text-center">Where Sophistication and Style Meet</p>
    <p className="text-center w-[500px] text-gray-500">Discover timeless fashion crafted for the discerning and stylish. Our curated collections blend classic elegance with contemporary trends, redefining your wardrobe with every piece.</p>
    <div className="flex gap-4 items-center mb-10">
      <button className="text-white text-[14px] font-sans font-semibold h-[40px] w-[150px] bg-black hover:bg-[#797F54] duration-300">GET STARTED</button>
      <button className="text-black text-[14px] font-sans font-semibold h-[40px] w-[150px] bg-inherit border-[1px] border-black hover:bg-[#797F54] hover:border-[#797F54] hover:text-white duration-300">CONTACT US</button>
    </div>
    <div className="flex items-center gap-3 mb-20">
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaFacebookF /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaTwitter /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaInstagram /></p>
      <p className="rounded-[50%] border-[1px] border-gray-400 p-2 bg-inherit hover:bg-black hover:text-white hover:border-[1px] hover:border-black duration-500"><FaDribbble /></p>
    </div>




    <div className="flex gap-10 z-10" data-aos="fade-up"
     data-aos-duration="3000">
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


    <div className="flex flex-col gap-8  items-center pt-[600px] pb-[500px] translate-y-[-300px] bg-black text-white w-full">
    <h2 className="font-sans font-semibold tracking-widest mb-8">OUR BELOVED CLIENTS</h2>

    <Marquee>
      <img className="h-[100px] w-[200px] mr-24" src={brand1} alt="" />
      <img className="h-[100px] w-[200px] mr-24" src={brand2} alt="" />
      <img className="h-[100px] w-[200px] mr-24" src={brand3} alt="" />
      <img className="h-[100px] w-[200px] mr-24" src={brand4} alt="" />
      <img className="h-[100px] w-[200px] mr-24" src={brand5} alt="" />
      <img className="h-[100px] w-[200px] mr-24" src={brand6} alt="" />
    </Marquee>
    </div>

 </div>
 </div>
  );
};

export default Home;
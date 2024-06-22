import { FaArrowRight, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import image from '../../assets/logo_Asset-1-1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-[200px]  mt-20">
     
      <div className='mx-auto container'>

      <div className='flex justify-between'>

        {/* first part */}

        <div className='flex flex-col gap-8 w-1/2'>


        <div className='flex items-center gap-4'>
        <img className='w-[70px]' src={image} alt="" />
        <h2 className='text-4xl font-normal'>Octalink Global Sourcing</h2>
        </div>

        <p className='text-gray-400 font-sans w-[350px] text-lg font-semibold mb-2 hover:text-white duration-500'>Join to our newsletter for the latest trends and updates in fashion and textiles!</p>
         
         

         <div className='flex items-center'>
         <input className="bg-inherit placeholder:text-white placeholder:font-normal placeholder:tracking-[2px] border-b-[1px] w-[300px] border-gray-600 focus:border-white hover:border-white  px-4 py-2 outline-none duration-500" placeholder="Your email" type="email" />

         <p><FaArrowRight></FaArrowRight></p>
         </div>

        


         <div className="flex items-center gap-3 mb-36">
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaFacebookF /></p>
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaTwitter /></p>
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaInstagram /></p>
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaDribbble /></p>
    </div>



        </div>

        {/* second part */}

        <div className='flex justify-between  w-1/2 '>

        {/* 1 */}
          <div className='flex-col items-start'>

            <div className='mb-8'>
              <h2 className='text-3xl font-normal mb-4'>Address</h2>
              <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>16 Road No.11 Uttara, <br />Dhaka 1230</p>
            </div>

            <div>
              <h2 className='text-3xl font-normal mb-4'>Contact</h2>
              <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>+880 1718-854866</p>
              <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>octalink@gmail.com</p>
            </div>

          </div>

          {/* 2 */}
          
          <div className='flex flex-col items-start'>
            <h2 className='text-3xl font-normal mb-4'>Explore</h2>
            <Link to='/'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Home</p></Link>
            <Link to='/about'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>About</p></Link>
            <Link to='/products'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Products</p></Link>
            <Link to='/partners'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Partners</p></Link>
            <Link to='/contact'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Contacts</p></Link>
            
          </div>

          {/* 3 */}
          
          <div>
            <h2 className='text-3xl font-normal mb-4'>Resources</h2>
            <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Documentation</p>
            <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Privacy Policy</p>
            <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Press Files</p>
            <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>FAQs</p>
            <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Contact</p>
          </div>

        </div>


      </div>

      </div>

    <div className='bg-gray-600 h-[1px]'></div>

    <div className='flex justify-between py-4 mx-auto container'>

      <h2 className='font-sans font-normal'>Copyright © 2024 - All right reserved by Octalink Global Sourcing</h2>
      
      <div className='flex gap-4'>
        <p className='font-sans font-normal'>Privacy Policy</p>
        <p className='font-sans font-normal'>Terms & Services</p>
      </div>
    </div>

  </footer>
  );
};

export default Footer;
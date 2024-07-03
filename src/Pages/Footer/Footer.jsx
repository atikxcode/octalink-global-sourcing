import { FaArrowRight, FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import image from '../../assets/logo_Asset-1-1.png'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import logo from '../../assets/octalink-logo.png'

const Footer = () => {

  const axiosPublic = useAxiosPublic();

  
  const {isPending, isError, error, refetch, data: pressfile } = useQuery({
    queryKey: ['pressfile'],
    queryFn: async () => {
      const res = await axiosPublic.get('/pressfile');
      return res.data;
    }
  });
  const { data: faqs } = useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const res = await axiosPublic.get('/faq');
      return res.data;
    }
  });

  const { register, handleSubmit, reset,  formState: { errors }} = useForm();


  

  if (isPending) {
    return <div className="mx-auto container flex justify-center"><span className="loading loading-dots loading-lg"></span></div>;
  }


  

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const onSubmit = async (data) => {
    // console.log(data);
    Swal.fire({
      toast:true,
      position: "top-end",
      icon: "success",
      title: "Thanks for Joining. We will keep posted to you our exciting news.",
      showConfirmButton: false,
      timer: 2500
    });
   
  };

  return (
    <footer className="bg-[#0f0f0f] text-white pt-[200px]  ">
     
      <div className='mx-auto container p-4'>

      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between'>

        {/* first part */}

        <div className='flex flex-col gap-8 w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>


        <div className='flex flex-row md:flex-row lg:flex-row xl:flex-row items-center md:items-center lg:items-center xl:items-center gap-4 justify-center md:justify-start lg:justify-start xl:justify-start '>
        <img className='w-[60px] md:w-[70px] lg:w-[70px] xl:w-[70px]' src={logo} alt="" />
        <h2 className='text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-normal'>Octalink Global Sourcing</h2>
        </div>

        <div className=' justify-center md:justify-start lg:justify-start xl:justify-start'>
        <p className='text-gray-400 text-center md:text-start lg:text-start xl:text-start  font-sans w-full  md:w-[350px] lg:w-[350px] xl:w-[350px] text-lg font-semibold mb-2 hover:text-white duration-500'>Join to our newsletter for the latest trends and updates in fashion and textiles!</p>
        </div>
         
         

         <div className='flex items-center justify-center md:justify-start lg:justify-start xl:justify-start'>
         
         <form onSubmit={handleSubmit(onSubmit)}>
         <input
              type='email'
              placeholder="Your email"
              {...register("name", {required: true})} 
              className="bg-inherit placeholder:text-white placeholder:font-normal placeholder:tracking-[2px] border-b-[1px] w-[300px] border-gray-600 focus:border-white hover:border-white  px-4 py-2 outline-none duration-500" 
            />
            
            <button type='submit'><p><FaArrowRight></FaArrowRight></p></button>
            </form>

         
         </div>

        


         <div className="flex items-center gap-3 mb-36 justify-center md:justify-start lg:justify-start xl:justify-start">
      <a href="https://www.facebook.com/profile.php?id=100063438861532" target='_blank'><p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaFacebookF /></p></a>
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaTwitter /></p>
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaInstagram /></p>
      <p className="rounded-[50%] text-[15px] border-[1px] border-gray-600 p-[7px] bg-inherit hover:bg-white hover:text-black hover:border-[1px] hover:border-white duration-500"><FaDribbble /></p>
    </div>



        </div>

        {/* second part */}

        <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between w-full md:w-1/2 lg:w-1/2 xl:w-1/2  items-start p-4 md:p-0 lg:p-0 xl:p-0 '>

        {/* 1 */}
          <div className='flex-col items-center md:items-start lg:items-start xl:items-start   '>

            <div className='mb-8'>
              <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal mb-4'>Address</h2>
              <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>16 Road No.11 Uttara, <br />Dhaka 1230</p>
            </div>

            <div>
              <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal mb-4'>Contact</h2>
              <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>+880 1718-854866</p>
              <p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>octalink@gmail.com</p>
            </div>

          </div>

          {/* 2 */}
          
          <div className='flex flex-col items-start mt-4 md:mt-0 lg:mt-0 xl:mt-0'>
            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal mb-4'>Explore</h2>
            <Link to='/'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Home</p></Link>
            <Link to='/about'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>About</p></Link>
            <Link to='/products'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Products</p></Link>

            <Link to='/contact'><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Contacts</p></Link>
            
          </div>

          {/* 3 */}
          
          <div className='mt-4 md:mt-0 lg:mt-0 xl:mt-0'>
            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal mb-4'>Resources</h2>
            <Link><a onClick={()=>document.getElementById('my_modal_1').showModal()}><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Documentation</p></a></Link>
            <Link><a onClick={()=>document.getElementById('my_modal_2').showModal()}><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Privacy Policy</p></a></Link>
            <Link><a onClick={()=>document.getElementById('my_modal_3').showModal()}><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Press Files</p></a></Link>
            <Link><a onClick={()=>document.getElementById('my_modal_4').showModal()}><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>FAQs</p></a></Link>
            <Link><a onClick={()=>document.getElementById('my_modal_5').showModal()}><p className='text-gray-400 font-sans text-lg font-semibold mb-2 hover:text-white duration-500'>Contact</p></a></Link>
           
          </div>

          {/* Modal 1*/}
          <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle text-black">
        <div className="modal-box flex flex-col items-center font-sans">

          <h2 className="font-bold text-lg">Company Name: OCTALINK GLOBAL SOURCING</h2>
          <p className="py-4">Overview: Welcome to OCTALINK GLOBAL SOURCING, your premier destination for high-quality textiles. We specialize in offering a diverse range of fabrics, including eco-friendly options, to cater to various textile needs. Our commitment lies in providing top-notch products coupled with excellent customer service.</p>
          <p className='py-4'>Mission Statement: At OCTALINK GLOBAL SOURCING, our mission is to deliver premium fabrics while upholding sustainable and ethical practices in the textile industry. We aim to exceed customer expectations through innovation, quality, and reliability.</p>
          <p className='py-4'>Services: <br /> Fabric Sales: We offer a wide selection of fabrics ranging from cotton and silk to polyester blends, catering to both individual and bulk orders.
          Custom Fabric Orders: Tailored solutions for unique fabric needs, ensuring our customers get exactly what they require for their projects.
          Fabric Printing Services: Personalize your fabric designs with our custom printing services, perfect for creating bespoke textiles.
          Commitment to Sustainability: We are dedicated to reducing our environmental impact by offering eco-friendly fabrics and promoting sustainable production methods throughout our supply chain.</p>
                    <p className='py-4'>Contact Us: For inquiries, orders, or more information about our products and services, please visit our website or contact our customer service team at octalink@gmail.com.</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>


          {/* Modal 2*/}
          <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle text-black">
        <div className="modal-box flex flex-col items-center font-sans">

          <h2 className="font-bold text-lg">Privacy Policy</h2>
          <h2 className="font-bold text-lg">Effective Date: 16th May 2014</h2>
          <p className="py-4">Introduction: <br /> OCTALINK GLOBAL SOURCING is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</p>
          <p className="py-4">Information We Collect <br /> <br />

We may collect personal information from you when you interact with our website, place orders, or communicate with us. This may include: <br /> <br />

Contact information such as name, email address, phone number, and shipping address. <br /> <br />
Payment information for purchases made on our site. <br /> <br />
Information you provide when contacting customer service or participating in surveys or promotions. <br /> <br />
Use of Your Information <br /> <br />

We use the information we collect to: <br /> <br />

Process and fulfill your orders.<br /> <br />
Communicate with you, including providing customer service and responding to inquiries.<br /> <br />
Improve our products, services, and website functionality.<br />
Personalize your experience and offer tailored content, promotions, and recommendations.<br /> <br />
Sharing of Your Information<br /> <br />

We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. These parties are contractually obligated to keep your information confidential and secure.<br /> <br />

Security of Your Information <br /> <br />

We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.<br /> <br />

Your Choices<br /> <br />

You have the right to:<br /> <br />

Access, update, or delete your personal information.<br /> <br />
Opt-out of receiving promotional communications.<br /> <br />
Request information about the data we have collected about you and how it has been used.<br /> <br />
Changes to This Privacy Policy <br /> <br />

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

Contact Us <br /> <br />

If you have any questions about this Privacy Policy, please contact us at octalink@gmail.com.</p>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>


          {/* Modal 3*/}
          <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle text-black">
          <div className="modal-box flex flex-col items-center font-sans">
               
                {
                  pressfile?.map(file => <div key={file?._id}>
                 
                    <h2 className="font-bold text-lg">Title: {file?.title}</h2>
                    <p className="py-4">Launch Date: {file?.date}</p>
                    <p className='py-4'>Content: {file?.content}</p>
                    </div>)
                }

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
                      </div>
         
      </dialog>


          {/* Modal 4*/}
          <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle text-black">
          <div className="modal-box flex flex-col items-center font-sans">
               
          <h2 className="font-bold text-lg text-center">All Questions And Ans Regarding Octalink Global Sourcing.</h2>
                {
                  faqs?.map(faq => <div className='mb-6' key={faq?._id}>
                 
                    
                    <p className="py-4">Question: {faq?.question}</p>
                    <p className='py-4'>Answer: {faq?.answer}</p>
                    </div>)
                }

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
                      </div>
         
      </dialog>

      {/* Modal 5 */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
  <div className="modal-box flex flex-col items-center text-xl">
    <h3 className="font-bold text-lg">Contacts Info</h3>
    <p className="py-4">Email: octalink@gmail.com</p>
    <p className="py-4">Phone Number: +880 1718-854866 /  +880 1971-112550</p>
    <p className="py-4">Address: House: 16, Road: 11, Sector 01 Uttara, Dhaka 1230</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </div>


      </div>

      </div>

    <div className='bg-gray-600 h-[1px]'></div>

    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between py-4 mx-auto container gap-4'>

      <div className='order-2 md:order-1 lg:order-1 xl:order-1'>
      <h2 className='font-sans font-normal text-center'>Copyright © 2024 - All Right Reserved By Atiqul Islam</h2>
      </div>
      
      <div className='order-1 md:order-2 lg:order-2 xl:order-2 flex gap-4 items-center justify-center '>
        <p className='font-sans font-normal'>Privacy Policy</p>
        <p className='font-sans font-normal'>Terms & Services</p>
      </div>
    </div>

  </footer>
  );
};

export default Footer;
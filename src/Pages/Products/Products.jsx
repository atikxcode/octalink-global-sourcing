import { Helmet } from "react-helmet";

import mens from '../../assets/mens.avif'
import womens from '../../assets/women2.jpg'
import kids from '../../assets/kids.avif'
import { Link } from "react-router-dom";


const Products = () => {



  return (
<div className="my-20 mx-auto container min-h-screen">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Product - OCTALINK</title>

      </Helmet>
  <div className="flex flex-col  mb-20 items-center">
    <h2 className='font-sans tracking-[2px] font-semibold text-[16px] text-[#797F54] mb-8'>Luxury Fabrics, Timeless Elegance</h2>
    <p className="text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-normal text-center">Discover the Art of Quality and Craftsmanship in Every Thread</p>
  </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-between p-4">

    <Link to="/product" state={{ collection: "men" }}>
    <div className="relative mx-auto mb-10 w-[90%] md:w-[90%] lg:w-[360px] xl:w-[360px] h-[539px] shadow-custom2">
        <img className="w-full h-full" src={mens} alt="Mens Collection" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            Men's Collection
        </div>
    </div>
</Link>

<Link to="/product" state={{ collection: "women" }}>
    <div className="relative mx-auto mb-10 w-[90%] md:w-[90%] lg:w-[360px] xl:w-[360px] h-[539px] shadow-custom2">
        <img className="w-full h-full" src={womens} alt="Mens Collection" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            Womens's Collection
        </div>
    </div>
</Link>

<Link to="/product" state={{ collection: "kids" }}>
    <div className="relative mx-auto mb-10 w-[90%] md:w-[90%] lg:w-[360px] xl:w-[360px] h-[539px] shadow-custom2">
        <img className="w-full h-full" src={kids} alt="Mens Collection" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            Kids Collection
        </div>
    </div>
</Link>

    </div>



</div>
  );
};

export default Products;
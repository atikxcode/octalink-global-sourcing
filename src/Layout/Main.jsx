import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar'
import Footer from '../Pages/Footer/Footer'
import img from '../assets/nh-image-6.jpg'

const Main = () => {
  return (
    <div className='font-forum font-bold'>
      <NavBar></NavBar>
      <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default Main;
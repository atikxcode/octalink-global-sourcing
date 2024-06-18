import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar'
import Footer from '../Pages/Footer/Footer'

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="error-page bg-[#1b1b1b] text-white h-screen flex flex-col justify-center items-center">
    <h1 className="text-5xl mb-4">Oops! Something went wrong.</h1>
    <p className="text-xl mb-8">We apologize for the inconvenience.</p>
    <Link to='/'><button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300">Go back to homepage</button></Link>
  </div>
  );
};

export default ErrorPage;
import React from 'react';
import { useRouteError, Link } from 'react-router';
import errorImg from '../assets/images/error-404.png'

const Error = () => {
  const error = useRouteError(); 
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <img src={errorImg} alt="" />
      <h1 className="text-6xl font-bold mb-4 text-[#632ee3]">Oops!</h1>
      <p className="text-xl mb-2">Sorry, the page you are looking for does not exist.</p>

      <Link to="/" className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-xl">Go Back Home</Link>
    </div>
  );
};

export default Error;

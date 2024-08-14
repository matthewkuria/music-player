// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="">
            <p className="text-3xl">Muziki Website</p>
          </div>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </nav>
      <div className="content ">
        <div className=" text-white mt-20 ml-20 relative max-w-lg">
           <h1 className='text-white text-6xl font-bold'>Welcome to Muziki Website</h1>
            <p>The best Web music player</p>
       </div>
        <img src="src/assets/product02.png" alt="The headphone image" className=' absolute top-20 right-0'/>
      </div>

    </div>
  );
};

export default Home;
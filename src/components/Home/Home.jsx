// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to Muziki Website</h1>
        <p>Upload your favourite songs and play!!!</p>
        <img src="src\assets\product02.png" alt="" />
      </div>

    </div>
  );
};

export default Home;
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import img from '../../assets/bg1.jpg';

function SplashScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="text-center">
        <img src={logo} alt="Logo" className="w-40 mx-auto mb-8" />
        <h1 className="text-3xl font-bold mb-4">Welcome to Healthcare Application</h1>
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/login"
            className="bg-green-primary-color text-white py-2 px-4 rounded-lg hover:bg-green-secondary-color transition duration-300"
            activeClassName="bg-green-100"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-green-primary-color text-white py-2 px-4 rounded-lg hover:bg-green-secondary-color transition duration-300"
            activeClassName="bg-green-100"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;

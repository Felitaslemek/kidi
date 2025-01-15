import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileNavigation = ({ profileIcon }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative">
      <div 
        className="sm:relative sm:top-auto sm:transform-none cursor-pointer"
        onClick={toggleMenu}
      >
        <img src={profileIcon} alt="Profile Icon" className="w-10 h-10 rounded-full" />
      </div>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <button onClick={() => setIsLoggedIn(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
              <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileNavigation;


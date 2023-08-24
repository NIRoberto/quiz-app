import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavBar from '../common/NavBar';

const navigationLinks = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/how-to-play', text: 'How to Play' },
  { path: '/game-library', text: 'Game Library' },
];
const servicesLinks = [
  {
    path: '/teaching',
    text: 'Teaching',
  },
  {
    path: '/game-library',
    text: 'Quizzes',
  },
  {
    path: '/how-to-play',
    text: 'Tips',
  },
];

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      {/* Navigation */}
      <NavBar navigationLinks={navigationLinks} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Content */}
      <main className="flex-1">
        <div className="container mx-auto p-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-row">
            <div>
              <Link to="/" className=" text-lg font-semibold">
                <span className="text-green-500">QUIZ</span>
                <span className="text-yellow-500">Let</span>
              </Link>
            </div>
            <div className="px-2">
              <h5 className="text-xl font-bold">Services</h5>
              {servicesLinks.map((link, index) => (
                <div key={index}>
                  <NavLink to={link.path} className="text-white hover:text-gray-300" activeClassName="font-semibold">
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            &copy; {new Date().getFullYear()}{' '}
            <Link to="/" className=" text-lg font-semibold">
              <span className="text-green-500">QUIZ</span>
              <span className="text-yellow-500">Let</span>
            </Link>
            . All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigationLinks = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/how-to-play", text: "How to Play" },
  { path: "/game-library", text: "Game Library" },
];

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      {/* Navigation */}
      <nav className="bg-yellow-600 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            QuizQuest
          </Link>
          <div className="space-x-8">
            {navigationLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold"
              >
                {link.text}
              </NavLink>
            ))}
            {/* Modern profile  */}
            {isLoggedIn ? (
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/25126281?v=4"
                      alt=""
                    />
                  </button>

                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </Link>

                    {/* <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >

                    </a> */}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white border-none text-yellow-500 capitalize btn hover:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white  border-none text-yellow-500 capitalize btn hover:text-gray-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1">
        <div className="container mx-auto p-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} QuizQuest. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ navigationLinks, isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-yellow-600 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            QuizQuest
          </Link>
          <div className="space-x-8">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 lg:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className="hidden lg:flex gap-4">
              <div className={`hidden lg:flex items-center lg:space-x-8`}>
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
              </div>
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
                    className="bg-white border-none text-yellow-500 capitalize btn hover:text-gray-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <>
        {menuOpen && (
          <div className=" flex flex-col gap-4 lg:hidden relative inset-0 bg-yellow-600 p-4 border-t border-yellow-700">
            <div className="flex flex-col gap-4 text-white ">
              {navigationLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={toggleMenu}
                  className="text-yellow hover:text-gray-300"
                  activeClassName="font-semibold"
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
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
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="bg-white w-1/5 border-none text-yellow-500 capitalize btn hover:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={toggleMenu}
                  className="bg-white w-1/5 border-none text-yellow-500 capitalize btn hover:text-gray-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </>
    </>
  );
};

export default NavBar;

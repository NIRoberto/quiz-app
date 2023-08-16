import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../common/NavBar";

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
      <NavBar
        navigationLinks={navigationLinks}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

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

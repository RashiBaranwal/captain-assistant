import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-black border-b border-gray-800 py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-yellow-400 text-2xl font-bold tracking-wide hover:opacity-90 transition"
        >
          CAPTAIN-ASSISTANT
        </Link>

        {/* Menu for small screens */}
        <button
          onClick={() => setOpen(!open)}
          className="text-yellow-400 md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-300 text-sm">
                Hello, <span className="text-yellow-400">{user.username}</span>
              </span>

              {/* Predict Button */}
              <button
                onClick={() =>
                  (window.location.href = "https://www.localhost:5172")
                }
                className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition shadow-md"
              >
                Predict
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-yellow-400 transition px-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 hover:text-yellow-400 transition px-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111] mt-3 p-5 rounded-xl border border-gray-800"
        >
          {user ? (
            <>
              <p className="text-gray-300 mb-3">
                Logged in as{" "}
                <span className="text-yellow-400 font-semibold">
                  {user.username}
                </span>
              </p>

              {/* Predict Button */}
              <button
                onClick={() =>
                  (window.location.href = "https://www.google.com")
                }
                className="w-full border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition mb-3 shadow-md"
              >
                Predict
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-gray-300 hover:text-yellow-400 mb-3"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-gray-300 hover:text-yellow-400"
              >
                Register
              </Link>
            </>
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

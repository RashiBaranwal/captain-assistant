import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold text-yellow-400 mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 mb-8"
      >
        Oops! The page you're looking for doesn’t exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition"
        >
          Return Home 🚖
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

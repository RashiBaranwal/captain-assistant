import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ user, error }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-center mb-6 text-sm">{error}</p>
      )}

      {/* MAIN CONTENT */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] w-full max-w-5xl rounded-2xl shadow-xl border border-gray-800 p-8"
        >
          {user ? (
            <>
              {/* Logged-in Captain View */}
              <motion.h2
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-yellow-400 mb-3"
              >
                Welcome Captain, {user.username} 👋
              </motion.h2>

              <p className="text-gray-300 mb-6 text-lg">
                Email: <span className="text-white">{user.email}</span>
              </p>

              {/* Power BI Analytics Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-black border border-gray-700 rounded-xl p-4 shadow-lg"
              >
                <h3 className="text-yellow-400 text-2xl font-bold mb-4">
                  📊 Captain Performance Dashboard
                </h3>

                <iframe
                  title="Uber Report"
                  width="100%"
                  height="520"
                  src="https://app.powerbi.com/reportEmbed?reportId=a6014099-bd55-46d4-8332-824f4836aa55&autoAuth=true&ctid=09bd1956-edda-4e9a-9543-7c7aa2cf4e81"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="rounded-xl border border-gray-600"
                ></iframe>
              </motion.div>
            </>
          ) : (
            <>
              {/* Logged-out View */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold text-yellow-400 mb-6 text-center"
              >
                Welcome to Uber Captain Portal 🚖
              </motion.h2>

              <p className="text-gray-300 text-center text-lg mb-8">
                Please login to access your dashboard and analytics.
              </p>

              <div className="flex flex-col items-center space-y-4 max-w-sm mx-auto">
                <Link
                  className="w-full bg-yellow-400 text-black p-3 rounded-lg font-semibold hover:bg-yellow-500 transition text-center"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="w-full bg-gray-800 text-white p-3 rounded-lg font-semibold hover:bg-gray-700 transition text-center"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

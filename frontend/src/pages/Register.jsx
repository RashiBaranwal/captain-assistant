import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-[#111] p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-yellow-400">
          Join as Captain 🚘
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-300 text-sm">Username</label>
            <input
              className="w-full p-3 rounded-md mt-1 bg-[#1a1a1a] border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Captain John"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              className="w-full p-3 rounded-md mt-1 bg-[#1a1a1a] border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="captain@example.com"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              className="w-full p-3 rounded-md mt-1 bg-[#1a1a1a] border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              required
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full bg-yellow-400 text-black p-3 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Register
          </motion.button>
        </form>

        <p className="text-gray-400 text-center text-sm mt-5">
          Already a Captain?{" "}
          <Link
            to="/login"
            className="text-yellow-400 hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;

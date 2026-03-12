import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-4">

      <div className="text-center max-w-2xl">

        {/* Worker Image */}
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://cdn-icons-png.flaticon.com/512/3306/3306571.png"
          alt="Maintenance Worker"
          className="w-56 mx-auto mb-8"
        />

        {/* Icon */}
        <div className="flex justify-center mb-4 text-yellow-300 text-5xl">
          <FaTools />
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Site Under Maintenance
        </motion.h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-blue-100 mb-6">
          Our website is currently under maintenance.  
          Our team is working hard to improve your experience.
        </p>

        <p className="text-md text-blue-200">
          Please check back again soon.
        </p>

      </div>

    </div>
  );
};

export default Home;
